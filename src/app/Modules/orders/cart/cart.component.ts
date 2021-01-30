import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deSelectAll(){
    // var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // for( var i in checkboxes){
    //     checkboxes[i].removeAttribute("checked");
    }

calcTotalPrice(){
  // var total=0.0;
  // var prices = document.getElementsByName("price-tag");
  // var totalTag = document.getElementsByName("total-price-tag");
  // for(var i=0;i<prices.length;i++){
  //     total += parseFloat(prices[i].innerText);
  // }
  // for(var i=0;i<totalTag.length;i++){
  //     totalTag[i].innerHTML = total;
  // }
  }

// $(".dropdown-item").click(function(){
//     var selected_val = $(this).attr("value");
//     $("#drop-val").html(selected_val);
// });

}
