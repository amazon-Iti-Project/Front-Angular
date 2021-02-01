import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Iorder } from 'src/app/viewModel/Iorder';

@Injectable()
export class OrdersService {
    constructor(private httpClient: HttpClient) { }
    
    getOrders(customerId: string): Observable<Iorder[]>{
        let params: { [param: string]: string } = {};
        if (customerId) params.customer = customerId;
        return this.httpClient.get<Iorder[]>(`${environment.API_BASE_URL}/orders`, { params: params });
    }
}