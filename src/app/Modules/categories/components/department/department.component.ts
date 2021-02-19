import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';
import { ProductsJsonService } from '../../services/products-json.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  depName : string | null =null;
  productsList: Iproduct[] | null = [];
  currentUser : Iuser | undefined = undefined;
  cartItems : Iproduct[] = [];
  totalPrice = 0.0;
  constructor(private activatedRoute : ActivatedRoute,
    private productService : ProductsJsonService,
    private prodService : ProductService,
    private userService : UserService) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( param => {
      this.depName = param.get('depName');
      this.productService.getProductsByCatName(this.depName?this.depName.toLowerCase():'')
      .subscribe(
        response => { 
          this.productsList = response;
          console.log(this.productsList);
        },
        error => { console.log(error); }
      )
    });
    // this.productService.getAllProducts().subscribe(
    //   response => this.productsList = response,
    //   error => console.log(error)
    // )
    // let token = this.userService.isUserSignedIn()
    let token = "aea407a0-7f44-fcd0-c325-b1b3cbbe7711"
    if(token){
      this.userService.getUserByToken(token).subscribe(
        response => {
          this.currentUser = response
          this.currentUser.cart.forEach( id => {
            this.prodService.getProductById(id).subscribe(
              response => {
                this.cartItems.push(response)
                this.totalPrice += response.price
              },
              error => console.log(error)
            )
          });
        },
        error => console.log(error)
      )
    }
  }
}
