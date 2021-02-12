import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdminModule } from '../../admin-app.module';

@Injectable({
  providedIn: "any"

  // will be available only when module import admin module only
  // providedIn: AdminModule,
})
export class AdminBrandService {
  sharedData:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { 

  }
  // sharet notify of category components for siblings and their parent
  getSharedData():BehaviorSubject<boolean>{
    return this.sharedData;
  }
}
