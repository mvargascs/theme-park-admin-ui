import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, OnDestroy {
  statusId: string;
  subs: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.statusId = params.get('id');
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

