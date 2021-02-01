import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsJsonService } from '../../services/products-json.service';
import { IProduct } from '../../viewModels/IProduct';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  depName : string | null =null;
  productsList: IProduct[] | null = [];
  constructor(private activatedRoute : ActivatedRoute,
    private productService : ProductsJsonService) { }
  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe( param => {
    //   this.depName = param.get('depName');
    //   this.productService.getProductsByCatName(this.depName?this.depName.toLowerCase():'')
    //   .subscribe(
    //     response => { this.productsList = response;
    // console.log(this.productsList);},
    //     error => { console.log(error); }
    //   )
    // });
  }

}
