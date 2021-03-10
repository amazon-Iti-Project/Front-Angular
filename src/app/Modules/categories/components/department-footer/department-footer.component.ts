import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';

@Component({
  selector: 'app-department-footer',
  templateUrl: './department-footer.component.html',
  styleUrls: ['./department-footer.component.scss']
})
export class DepartmentFooterComponent implements OnInit ,OnChanges{
@Input() productsList: Iproduct[]|undefined=[];
@Input() cartItems:Iproduct[]|undefined=[];
@Input() currentUser:Iuser | undefined;
@Input() totalPrice:number | undefined;
@Input() depName:String | undefined;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cartItems",this.cartItems)
  }

  ngOnInit(): void {
  }

}

