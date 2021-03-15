import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SellerModule } from './seller.module';
import { Iproduct } from './../../viewModel/IProduct';

@Injectable({
  providedIn: 'any'
})
export class SellerModuleService {

  private ProductlToUpdate = new BehaviorSubject(undefined);
  productUpdateChanges = this.ProductlToUpdate.asObservable();

  constructor() { }

  sendProductToUpdate(prod: Iproduct) {
    this.ProductlToUpdate.next(prod)
  }
}