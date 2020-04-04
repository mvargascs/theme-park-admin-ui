import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit, OnDestroy {
  attractionId: string;
  subs: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.attractionId = params.get('id');
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
