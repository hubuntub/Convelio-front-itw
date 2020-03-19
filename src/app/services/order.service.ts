import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Draft } from '../models/draft.model';

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

  public getDraftOrders(): Observable<Draft[]> {
    return this.apiService.get().pipe(
      map(res => res.drafts)
    );
  }

  public getDraftOrderById(orderId: string): Observable<Draft> {
    return this.apiService.get().pipe(
      map(res => res.drafts.find(draft => draft.id === orderId))
    );
  }
}
