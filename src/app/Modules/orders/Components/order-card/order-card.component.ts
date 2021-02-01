import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DELIVERY_STATE } from 'src/app/enums/enums';
import { Iorder } from 'src/app/viewModel/Iorder';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {

  @Input() model = {} as Iorder;

  closeResult: string='';
  
  constructor(private modalService: NgbModal,
    private router :Router) {}
    
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    // console.log(this.model);
  }

  getEnumName(status: DELIVERY_STATE){
    return DELIVERY_STATE[status];
  }

  canCancel(status: DELIVERY_STATE){
    return status != DELIVERY_STATE.Pending;
  }
  canTrack(status: DELIVERY_STATE){
    return status != DELIVERY_STATE.Arriving && status != DELIVERY_STATE.Delivered ;
  }


  target(): void {
    let oId = this.model.id;
    if (this.model.state == DELIVERY_STATE.Delivered)
      this.router.navigate([`/Orders/DeliveredPackage/${oId}`]);
    else if (this.model.state == DELIVERY_STATE.Arriving)
      this.router.navigate([`/Orders/DeliveringPackage/${oId}`]);
  }
  canceling(orderID:number){
    this.router.navigate(['/Orders/cancelledorders/', orderID]);
  }
}
