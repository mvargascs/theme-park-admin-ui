import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AttractionsService } from '@shared/services/attractions.service';
import { LocationService } from '@shared/services/location.service';

import { Attraction } from '@shared/models/attraction';
import { Location } from '@shared/models/location';
import { AttractionStatus } from '@shared/models/attraction-status';

@Component({
  selector: 'app-create-attraction',
  templateUrl: './create-attraction.component.html',
  styleUrls: ['./create-attraction.component.scss']
})
export class CreateAttractionComponent implements OnInit {
  attractionForm: FormGroup;
  locations$: Observable<Location[]>;
  statuses$: Observable<AttractionStatus[]>;

  constructor(
    private attractionsService: AttractionsService,
    private locationService: LocationService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.locations$ = this.locationService.getLocations();
    this.statuses$ = this.attractionsService.getAttractionStatuses();

    this.attractionForm = this.fb.group({
      name: ['', Validators.required],
      description: [null],
      location: ['', Validators.required],
      status: ['Inactive', Validators.required],
      quicklane: [false, Validators.required],
    });
  }

  createAttraction() {
    const newAttraction: Attraction = {
      name: this.attractionForm.controls.name.value,
      description: this.attractionForm.controls.description.value,
      waittime: null,
      location: this.attractionForm.controls.location.value,
      status: this.attractionForm.controls.status.value,
      quicklane: this.attractionForm.controls.quicklane.value,
    }

    // The service will turn into creating firebase documents and will handle routing
    // this.attractionsService.createAttraction(newAttraction) ? this.router.navigate(['/', 'dashboard']): null;
    this.attractionsService.createAttraction(newAttraction);
  }
}
