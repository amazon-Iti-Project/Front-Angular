import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { Iorder } from 'src/app/viewModel/Iorder';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { OrdersService } from '../../orders.service';

@Component({
    selector: 'orders-list',
    templateUrl: 'orders-list.component.html'
})

export class OrdersListComponent implements OnInit {
    closeResult: string = '';

    ordersList: Iorder[] = [];
    productList:Iproduct[]=[];
    loading: boolean = true;
    subscribtion: Subscription|null=null;
    filterValue: string = "2";
    ordersFiltered: Iorder[] = []

    constructor( private ordersSvc: OrdersService,
        private productsSvc: ProductService) { }
 
    
    ngOnInit(): void {
        this.getOrders();
    }

    getOrders() {
        // this.ordersSvc.getOrders().subscribe(res => {
        //     this.ordersList = res;
        //     this.loading = false;
        // })        
        let cusId = localStorage.getItem("customerId") as string;
        this.subscribtion = this.ordersSvc.getOrders(cusId).subscribe((response) => {
            this.ordersList = response;
        },
            (err) => { console.log(err) }
        );
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



