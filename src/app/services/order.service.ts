import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Order } from '../models/order.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private apiService: ApiService
  ) {}

  public getOrders(): Observable<Order[]> {
    return this.apiService.get().pipe(
      map(res => res.orders)
    );
  }

  public getOrderById(orderId: string): Observable<Order> {
    return this.apiService.get().pipe(
      map(res => res.orders.find(order => order.id === orderId))
    );
  }
}
