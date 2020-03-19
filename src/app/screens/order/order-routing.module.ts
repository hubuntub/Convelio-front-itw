import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderResolver } from '../../resolvers/order.resolver';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: ':orderId',
    component: OrderDetailComponent,
    resolve: { order: OrderResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OrderResolver]
})
export class OrderRoutingModule { }
