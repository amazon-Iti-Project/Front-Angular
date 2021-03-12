import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from 'src/app/viewModel/IProduct';

@Component({
  selector: 'app-department-carousel',
  templateUrl: './department-carousel.component.html',
  styleUrls: ['./department-carousel.component.scss']
})
export class DepartmentCarouselComponent implements OnInit, OnChanges {
  @Input() productsList: Iproduct[] | undefined = [];
  @Input() depName: String | undefined;

  carouselList: Iproduct[] | undefined = []
  index: number = 0;
  // length of carousel content
  length: number = 4;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.productsList)
    if (this.productsList && this.productsList.length >= this.length)
      this.carouselList = this.productsList?.slice(this.index, this.index + this.length);
    else {
      this.length = this.productsList?.length ? this.productsList?.length : this.length;
      this.carouselList = this.productsList?.slice(this.index, this.index + this.length);
    }


  }

  ngOnInit(): void {

  }
  onClickNext() {
    if (this.productsList) {
      if (this.index < (this.productsList.length - this.length)) {
        this.index += this.length;
      } else {
        this.index = 0;

      }
      console.log(this.index, this.length)
      this.carouselList = this.productsList.slice(this.index, this.index + this.length)
      console.log("carouselList", this.carouselList)
    }
  }

  onClickPrevious() {
    if (this.productsList) {
      if (this.index > this.length) {
        this.index -= this.length;
      } else {
        this.index = this.productsList.length - this.length;
      }
      this.carouselList = this.productsList.slice(this.index, this.index + this.length)
    }
    console.log(this.index, this.length)
    console.log("carouselList", this.carouselList)

  }

}
