import { ProductService } from './../../../../services/product/product.service';
import { CategoryService } from './../../../../services/category/category.service';
import { Icategory } from './../../../../viewModel/Icategory';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Ibrand } from 'src/app/viewModel/Ibrand';
import { BrandService } from './../../../../services/brand/brand.service';
import { ShippingService } from './../../../../services/shipping/shipping.service';
import { FeeService } from './../../../../services/feeService/fee.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from './../../../../services/user/user.service';
import { Iuser } from 'src/app/viewModel/Iuser';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  user:Iuser|undefined
  imgName: string | undefined
  prodForm: FormGroup = this.fb.group({})
  subscription: Subscription[] = [];
  categories: Icategory[] = [];
  brands: Ibrand[] = [];
  constructor(private fb: FormBuilder, private catServ: CategoryService,private brandSer:BrandService, private proServ: ProductService
    , private router: Router,private shipService:ShippingService,private feeServ:FeeService,private storage: AngularFireStorage,private userServ:UserService) { }


  ngOnInit(): void {
    // get categories
    this.catServ.getAllCategories().subscribe((res)=>
    {
      this.categories = res
    },err=>console.log(err))
       // get brands
       this.brandSer.getAllBrands().subscribe((res)=>
       {
         this.brands = res
       },err=>console.log(err))
       // get fees

    // get brands
    this.prodForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: [, [Validators.required, Validators.min(1)]],
      quantity: [, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      brand: [, Validators.required],
      discount: [,[Validators.required,Validators.min(0),Validators.max(100
        // this.prodForm.controls['fee'].value.fee?(100-this.prodForm.controls['fee'].value.fee):100
        )]],
      shipping: this.fb.group({
          period:[,[Validators.required, Validators.min(0)]],
          shipPrice:[,[Validators.required, Validators.min(1)]]
      }),
      // test: [{value:0,disabled:true}, Validators.required],  // failed in value check
      // fee: new FormControl({value: '', disabled: false},[Validators.required]),
      fee: this.fb.group({
        fee:new FormControl('',[Validators.required]),
        admin:[,[Validators.required]],
        category:[,[Validators.required]]
      }),
      size: ['', Validators.required],
      color: ['', Validators.required],
      image: [, Validators.required],
      tags: [[], ],
      description:['',Validators.required],
      seller:['',Validators.required]

    })

    console.log(this.prodForm.controls['fee'].get('fee'))

    // get current user
    this.getCurrentUser();
  }

  getCurrentUser():void{
    let token = this.userServ.isUserSignedIn()
    if(token)
    this.userServ.getUserByToken(token).subscribe(res=>this.user=res,err=>alert(err))
    else{
      alert('please Log in')
      this.router.navigate(['/home'])
    }
  }

        // selectImg by image
  onSelectImg(selectElement:any):void{
    // console.log('clicked on image: ',selectElement.nativeElement)
    selectElement.click();
  }

        // selectImg by input
 onSeleImg(e:any):void{
    var file = e.target.files[0];
    console.log(file.name)
    // to change form control name value
    
    this.readImageFromFile(file)
}
// read image From  File object and then Upload image on it
 readImageFromFile(file:File) {
  // Check if the file is an image.
  console.log(file.type.indexOf("image"));
  if (file.type && file.type.indexOf('image') === -1) {
    // console.log('File is not an image.', file.type, file);
    return;
  }
  this.imgName = file.name;
  // this event is fired when readAsDataUrl content is read
  const reader = new FileReader();
  reader.onload=(e) => {
    console.log("event: ",e)
    // file local url
    let url = e.target?.result;
    // to add to formgroup control when added an img
    this.uploadImage(file,file.name);
    
  };
  // start to read data and trigger on load event
  // return file or a blob
  reader.readAsDataURL(file);
}

// upload image in storage and get url
 uploadImage(file:File,name:string):void{
  console.log(file)
      // init storage
  let imagesRef = this.storage.storage.ref().child('images');
  var uploadTask = imagesRef.child(name).put(file).then((snapshot)=>{
  return imagesRef.child(name).getDownloadURL();
})
.then((url)=>{
    // `url` is the download URL for 'images/stars.jpg'
console.log("img url is ",url)
    this.prodForm.controls['image'].setValue(url);
})
.catch((e)=>console.log("error uploading image"));

// better reference from codelabs
// https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#10
}

// on select category
  getFee() {
    let id:number =Number(this.prodForm.controls['category'].value) 
    console.log("id: ",typeof id)
    this.feeServ.getFeebyCatId(id).subscribe(res =>
    {

      console.log(res)
      let {fee,admin,category} = res? res:{fee:undefined,admin:undefined,category:undefined};
      this.prodForm.controls['fee'].setValue({fee,admin,category});
      console.log(this.prodForm.controls['fee'].get('fee'))

    }, err => console.log(err))

  }
// on change price
  updateTotalPrice(priceEle:any){
    let price = this.prodForm.controls['price'].value;
    let discount = this.prodForm.controls['discount'].value;
    let fee = this.prodForm.controls['fee'].value.fee
    let netPrice = price * (100-discount)/100
    let totalPrice = netPrice*(100-fee)/(100)
    console.log(this.prodForm.value)
    // this.prodForm.controls['price'].setValue()
    priceEle.value = totalPrice

    console.log("prod state: ",this.prodForm.value)

    
  }
  

  addProduct(): void {
    console.log(this.prodForm.value)
    //add new product with new shipping
    this.proServ.addNewProduct(this.prodForm.value)
      .subscribe(res => {
        console.log(res)
        alert("successfully added your product")
        // nav to home
        this.router.navigate(['/seller/home'])
          .then(res => { console.log(res) })
          .catch(err => console.log(err))

      }, err => { console.log(err) })

  }
resetForm():void{
  this.prodForm.reset();
  this.router.navigate(['/seller/home'])
}
  
}
