import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

import { OrderService } from '../services/order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderResolver implements Resolve<Order> {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Order> {
    return this.orderService.getOrderById(route.params.orderId);
  }
}
