import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AdminCategoryService {
  sharedData:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { 

  }
  // sharet notify of category components for siblings and their parent
  getSharedData():BehaviorSubject<boolean>{
    return this.sharedData;
  }
}
