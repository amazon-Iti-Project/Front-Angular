import { ProductService } from './../../../../services/product/product.service';
import { CategoryService } from './../../../../services/category/category.service';
import { Icategory } from './../../../../viewModel/Icategory';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  imgName: string | undefined
  url: string | ArrayBuffer | undefined
  prodForm: FormGroup = this.fb.group({})
  subscription: Subscription[] = [];
  categories: Icategory[] = [];
  constructor(private fb: FormBuilder, private catServ: CategoryService, private proServ: ProductService
    , private route: Router) { }

  ngOnInit(): void {
    // get categories
    this.catServ.getAllCategories().subscribe((res)=>
    {
      this.categories = res
    },err=>console.log(err))
    this.prodForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      brand: [, Validators.required],
      discount: [0, Validators.required],
      shipping: [0, Validators.required],
      size: ['', Validators.required],
      colors: [[], Validators.required],
      image: [, Validators.required],
      tags: [[], Validators.required]
    })

  }
  
}
