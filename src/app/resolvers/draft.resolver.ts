import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Draft } from '../models/draft.model';

import { OrderService } from '../services/order.service';

@Injectable({
  providedIn: 'root'
})
export class DraftResolver implements Resolve<Draft> {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Draft> {
    return this.orderService.getDraftOrderById(route.params.orderId);
  }
}
