import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DraftResolver } from '../../resolvers/draft.resolver';
import { DraftListComponent } from './draft-list/draft-list.component';
import { DraftDetailComponent } from './draft-details/draft-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DraftListComponent
  },
  {
    path: ':orderId',
    component: DraftDetailComponent,
    resolve: { draft: DraftResolver }
  }
];

@NgModule({
  declarations: [DraftListComponent, DraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DraftResolver
  ]
})
export class DraftModule { }
