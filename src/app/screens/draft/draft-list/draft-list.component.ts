import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Draft } from '../../../models/draft.model';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.scss']
})
export class DraftListComponent {

  drafts$: Observable<Draft[]>;

  constructor(
    private orderService: OrderService
  ) {
    this.drafts$ = orderService.getDraftOrders();
  }

}
