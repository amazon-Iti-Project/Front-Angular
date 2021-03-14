import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Iorder } from 'src/app/viewModel/Iorder';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';
import { UserService } from './../../../../services/user/user.service';

@Component({
    selector: 'orders-list',
    templateUrl: 'orders-list.component.html',
    styleUrls: ['./orders-list.component.scss'],
})

export class OrdersListComponent implements OnInit {
    closeResult: string = '';

    ordersList: Iorder[] = [];
    productList:Iproduct[]=[];
    loading: boolean = true;
    subscribtion: Subscription|null=null;
    filterValue: string = "2";
    ordersFiltered: Iorder[] = []
    filterTerm: string ='';
    currentUser:Iuser|undefined;
    constructor( private ordersSvc: OrderService,
        private userServ:UserService,
        private productsSvc: ProductService) { }
 
    
    ngOnInit(): void {
        this.getUser();

    }

    getUser():void{
        let token = this.userServ.isUserSignedIn();
        console.log("token:",token)
        if(token)
        this.userServ.getUserByToken(token)
        .subscribe(res =>{
            this.currentUser = res;
            console.log(this.currentUser)
        this.getOrders();
        });
    }

    getOrders() {
        // this.ordersSvc.getOrders().subscribe(res => {
        //     this.ordersList = res;
        //     this.loading = false;
        // })    
        console.log("ordrUser: ",this.currentUser)    
        if(this.currentUser && this.currentUser.id){
            console.log("get order have user: ")
            this.subscribtion = this.ordersSvc.getOrdersByCustomerId(this.currentUser.id).subscribe((response) => {
                this.ordersList = response;
                console.log("order return",this.ordersList)
            },
                (err) => { console.log(err) }
            );
        }else{
            console.log("getOrders have no user: ")

        }
    }

    getFilteredOrders() {
        let today = new Date();
        switch (this.filterValue) {
            case "1":                
                today.setDate(today.getDate() - 30);
                return this.ordersList.filter(o => new Date(o.orderDate) >= today);
            case "2":
                today.setDate(today.getDate() - (30 * 3));
                return this.ordersList.filter(o => new Date(o.orderDate) >= today);
            default:
                return this.ordersList;
        }
    }
}



