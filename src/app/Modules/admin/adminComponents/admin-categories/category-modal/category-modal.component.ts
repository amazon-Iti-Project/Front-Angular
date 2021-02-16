import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import { Icategory } from 'src/app/viewModel/Icategory';
import { AdminCategoryService } from './../admin-category.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],

})
export class CategoryModalComponent implements OnInit {
  imgName: string | undefined
  catForm: FormGroup = this.fb.group({})
  constructor(private fb: FormBuilder,private catServ:CategoryService,
    private adminServ:AdminCategoryService,private storage: AngularFireStorage) { }

  ngOnInit(): void {
      console.log('category details')

      // category form
      this.catForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        image: [, Validators.required],
  
      })
  }

  // on select image 
  onSelecImg(element:any):void{
    element.click();
  }

    // selectImg by input
    onSeleInput(e: any): void {
      var file = e.target.files[0];
      console.log(file.name)
      // to change form control name value
  
      this.readImageFromFile(file)
    }
    // read image From  File object and then Upload image on it
    readImageFromFile(file: File) {
      // Check if the file is an image.
      console.log(file.type.indexOf("image"));
      if (file.type && file.type.indexOf('image') === -1) {
        // console.log('File is not an image.', file.type, file);
        return;
      }
      this.imgName = file.name;
      // this event is fired when readAsDataUrl content is read
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("event: ", e)
        // file local url
        let url = e.target?.result;
       
        this.uploadImage(file,file.name);
      };
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
    this.catForm.controls['image'].setValue(url);
})
.catch((e)=>console.log("error uploading image"));

// better reference from codelabs
// https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#10
}
  
    addNewCategory():void{
      this.catServ.addNewCategory(this.catForm.value).subscribe(res=> {
        alert("success")
        this.adminServ.getSharedData().next(true);
      },err=>alert(err))
  
    }
  
    resetForm():void{
      this.catForm.reset();
      this.adminServ.getSharedData().next(false);
    }


}
