import { Injectable } from '@angular/core';
import { AdminModule } from './admin-app.module';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: AdminModule
})
export class AdminModuleService {

  constructor(private filter:BehaviorSubject<[]>) {
    filter = new BehaviorSubject([]);
   }
   getFilterArray(){
     return filter;
   }
}
