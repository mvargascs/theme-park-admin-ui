import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  locationId: string;
  subs: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.locationId = params.get('id');
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
