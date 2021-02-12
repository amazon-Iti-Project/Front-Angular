import { Colors } from './../../../enums/colors';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Iproduct } from 'src/app/viewModel/IProduct';
import{Location} from '@angular/common'
import { getSourceFileOrError } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Iuser } from './../../../viewModel/Iuser';
import { UserService } from './../../../services/user/user.service';

@Component({
  selector: 'app-products-detalis',
  templateUrl: './products-detalis.component.html',
  styleUrls: ['./products-detalis.component.scss']
})


export class ProductsDetalisComponent implements OnInit {
  prd:Iproduct|null=null;
  // this is passed Id >>>
  prdID:number=1;

<<<<<<< HEAD

=======
  // current user
  user:Iuser|undefined
>>>>>>> 56acb9d026eeb646ca92b4a45d9c93f026bc2c01
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private pService:ProductService,
    private location: Location,private userServ:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      // this will be handeled lated
      let prdIDParam = params.get('pId')
      this.prdID = (prdIDParam) ? parseInt(prdIDParam) : 0;
      // this.prd= this.prdService.getProductByID(this.prdID);
      this.pService.getProductById(this.prdID).subscribe(
        (res) => {
          console.log(res)
          this.prd = res;
        })
    })

    // get user
    this.getCurrentUser();

    console.log(this.prdID);
    console.log(this.prd);
  }

  getCurrentUser():void{
    let  userToken =  this.userServ.isUserSignedIn();
    if(userToken){
      this.userServ.getUserByToken(userToken).subscribe(res=>this.user=res,err=>alert(err))
    }
<<<<<<< HEAD
    selectedColor = '';

    colors = [
       {

        name: 'Silver',
        value: '#C0C0C0'
      },
      {

        name: 'Black',
        value: '#000'
      },

      {

        name: 'Yellow',
        value: '#ffff05'
      },
      {
        name: 'Red',
        value: '#ff3300'
      },
      {
        name: 'Navy',
        value: '#3f729b'
      }
    ];

    onChange(value:any){
      this.selectedColor = value;
    }


=======
  }

  addtoCart():void{
    console.log(this.user)
    if(this.user && this.prdID){
      this.userServ.addToCart(this.user,this.prdID).subscribe(res=>{
        console.log("added",res)
        this.router.navigate(['/cart'])
      },err=>alert(err))
    }else alert("you must login First..")
  }
>>>>>>> 56acb9d026eeb646ca92b4a45d9c93f026bc2c01

}
