import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/viewModel/IProduct';

@Component({
  selector: 'app-recommentaion-section',
  templateUrl: './recommentaion-section.component.html',
  styleUrls: ['./recommentaion-section.component.scss']
})
export class RecommentaionSectionComponent implements OnInit {
  @Input() productsList: Iproduct[] | undefined = [];
  @Input() depName: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
