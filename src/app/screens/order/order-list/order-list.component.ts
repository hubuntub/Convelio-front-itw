import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../../../models/order.model';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>;

  constructor(
    private orderService: OrderService
  ) {
    this.orders = orderService.getOrders();
  }

  ngOnInit() {}

}
