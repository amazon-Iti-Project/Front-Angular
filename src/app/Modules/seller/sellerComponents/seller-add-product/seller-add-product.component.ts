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

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  imgName: string | undefined
  feePercent:number|undefined
  prodForm: FormGroup = this.fb.group({})
  shipForm: FormGroup = this.fb.group({})
  subscription: Subscription[] = [];
  categories: Icategory[] = [];
  brands: Ibrand[] = [];
  constructor(private fb: FormBuilder, private catServ: CategoryService,private brandSer:BrandService, private proServ: ProductService
    , private router: Router,private shipService:ShippingService,private feeServ:FeeService) { }


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
      discount: [,[Validators.required,Validators.min(0),Validators.max(this.feePercent?(100-this.feePercent):100)]],
      shipping: this.fb.group({
          period:[,[Validators.required, Validators.min(0)]],
          shipPrice:[,[Validators.required, Validators.min(1)]]
      }),
      // test: [{value:0,disabled:true}, Validators.required],  // failed in value check
      // fee: new FormControl({value: '', disabled: false},[Validators.required]),
      fee: this.fb.group({
        fee:new FormControl({value: '', disabled: false},[Validators.required]),
        admin:[,[Validators.required]],
        category:[,[Validators.required]]
      }),
      size: ['', Validators.required],
      color: ['', Validators.required],
      image: [, Validators.required],
      tags: [[], ],

    })
    this.shipForm = this.fb.group({
      period: [, [Validators.required, Validators.min(0)]],
      shipPrice: [, [Validators.required, Validators.min(1)]],

    })
    console.log(this.prodForm.controls['image'].value)
    // shipForm.['id'].value

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
    this.prodForm.controls['image'].setValue(url);
    
  };
  // return file or a blob
  reader.readAsDataURL(file);
}

// on select category
  getFee() {
    let id:number =Number(this.prodForm.controls['category'].value) 
    console.log("id: ",typeof id)
    this.feeServ.getFeebyCatId(id).subscribe(res =>
    {

      console.log(res)
      this.prodForm.controls['fee'].setValue(res);
      console.log(this.prodForm.controls['fee'].value)

      this.feePercent=res?.fee;
    }, err => console.log(err))

  }
// on change price
  updateTotalPrice(priceEle:any){
    let price = this.prodForm.controls['price'].value;
    let discount = this.prodForm.controls['discount'].value;
    let fee = this.feePercent ? this.feePercent : 0
    let netPrice = price * (100-discount)/100
    let totalPrice = netPrice*(100-fee)/(100)
    console.log(this.prodForm.controls['fee'].value)
    console.log(this.shipForm.controls['shipPrice'].value)
    // this.prodForm.controls['price'].setValue()
    priceEle.value = totalPrice

    console.log("prod state: ",this.prodForm.value)
    console.log("ship state",this.shipForm.value)
    console.log("cond: ",this.prodForm.invalid&&this.shipForm.invalid)

    
  }
  

addProduct():void{
  console.log(this.prodForm.value)
  console.log(this.shipForm.value)
  // add shipping
  this.shipService.addNewShipping(this.shipForm.value)
    .subscribe(res =>{
      console.log("newShipping",res)
      // set shipping id to product
      this.prodForm.controls['shipping'].setValue(res.id)
      console.log(this.prodForm.value)
      //add new product with new shipping
      this.proServ.addNewProduct(this.prodForm.value)
      .subscribe(res=>console.log(res),err=>{console.log(err)})
      // nav to home
      this.router.navigate(['/seller/home'])
      .then(res=>{console.log(res)})
      .catch(err=>console.log(err))
      
    } ,err=>console.log(err));

}
resetForm():void{
  this.prodForm.reset();
  this.shipForm.reset();
}
  
}
