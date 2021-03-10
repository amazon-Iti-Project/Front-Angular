import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from 'src/app/viewModel/IProduct';

@Component({
  selector: 'app-department-body',
  templateUrl: './department-body.component.html',
  styleUrls: ['./department-body.component.scss']
})
export class DepartmentBodyComponent implements OnInit,OnChanges {
  @Input() productsList: Iproduct[]|undefined=[];
  @Input() depName: String|undefined='';
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.productsList);
  }

  ngOnInit(): void {
  }

}
