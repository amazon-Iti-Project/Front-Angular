import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AdminHomeAuthenticatedModule } from './adminComponents/admin-home-authenticated/admin-home-authenticated.module';

@Injectable({
  providedIn: AdminHomeAuthenticatedModule
})
export class AdminModuleService {

  constructor(private filter:BehaviorSubject<[]>) {
    filter = new BehaviorSubject([]);
   }
   getFilterArray(){
     return filter;
   }
}
