import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Draft } from '../../../models/draft.model';

@Component({
  selector: 'app-draft-details',
  templateUrl: './draft-detail.component.html',
  styleUrls: ['./draft-detail.component.scss']
})
export class DraftDetailComponent implements OnInit {

  public draft: Draft;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.draft = this.route.snapshot.data.draft as Draft;
  }

}
