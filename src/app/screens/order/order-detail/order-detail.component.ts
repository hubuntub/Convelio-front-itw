import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public order: Order;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.order = this.route.snapshot.data.order as Order;
  }

}
