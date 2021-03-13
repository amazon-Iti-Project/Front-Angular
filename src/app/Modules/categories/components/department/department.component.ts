import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';

interface DepartmentComModel {
  depName?: string;
  productsList?: Iproduct[];
  currentUser?: Iuser | undefined;
  cartItems?: Iproduct[];
  totalPrice?: number;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departmentCompModel: DepartmentComModel = {};

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodService: ProductService,
    private userService: UserService) { }
  ngOnInit(): void {
    console.log("on Init department")
    this.departmentCompModel.totalPrice = 0;
    let currUrl = this.router.url;
    console.log(currUrl)
    this.activatedRoute.paramMap.subscribe(param => {
      console.log("search")
      let paramName = param.get('depName');
      let paramId = param.get('dId');
      let searchName = param.get('text');
      if(paramName&&paramId){
        console.log("department request")
        this.departmentCompModel.depName = paramName ? paramName : undefined;
        
        this.prodService.getProductsByCategoryId(Number.parseInt(paramId))
          .subscribe(
            response => {
              this.departmentCompModel.productsList = response;
              console.log("products: ", this.departmentCompModel.productsList);
            },
            error => { console.log(error); }
          )
      }
      else if (searchName == 'all'){



          console.log("search request")
          this.departmentCompModel.depName = 'all'
          this.prodService.getAllProducts()
            .subscribe(
              response => {
                this.departmentCompModel.productsList = response;
                console.log("products: ", this.departmentCompModel.productsList);
              },
              error => { console.log(error); }
            )
      }else if(searchName){
        console.log("search request")
        this.departmentCompModel.depName = searchName ? searchName : undefined;
        this.prodService.searchProductsByText(searchName)
          .subscribe(
            response => {
              this.departmentCompModel.productsList = response;
              console.log("products: ", this.departmentCompModel.productsList);
            },
            error => { console.log(error); }
          )
      }
   
    });
    // this.productService.getAllProducts().subscribe(
    //   response => this.productsList = response,
    //   error => console.log(error)
    // )
    let token = this.userService.isUserSignedIn()
    if (token) {
      this.userService.getUserByToken(token).subscribe(
        response => {
          console.log("user", response)
          this.departmentCompModel.currentUser = response

          this.prodService.getListOfProductsById(this.departmentCompModel.currentUser?.cart)?.subscribe(
              (carts) => {
                this.departmentCompModel.cartItems = carts
                if (this.departmentCompModel.totalPrice)
                  for (let prod of carts) {
                    this.departmentCompModel.totalPrice += prod.price
                  }
                // this.departmentCompModel.currentUser.cart.forEach(id => {
                //   this.prodService.getProductById(id).subscribe(
                //     response => {
                //       this.departmentCompModel.cartItems?.push(response)
                //       if(this.departmentCompModel.totalPrice)
                //       this.departmentCompModel.totalPrice += response.price
                //     },
                //     error => console.log(error)
                //   )
                // });
              },
              error => console.log(error)
            )
        }
      );
    }
  }
}
