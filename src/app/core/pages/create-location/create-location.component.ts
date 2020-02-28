import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp

import { LocationService } from '@shared/services/location.service';

import { Location } from '@shared/models/location';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.scss']
})
export class CreateLocationComponent implements OnInit {
  locationForm: FormGroup;

  constructor(
    private locationService: LocationService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.locationForm = this.fb.group({
      locationName: ['', Validators.required],
      openingDate: [null, Validators.required],
    });
  }

  createLocation() {
    const dateObj = this.locationForm.controls.openingDate.value as Date;
    const seconds = dateObj.getTime() / 1000;
    const openingTimestamp: Timestamp = new Timestamp(seconds, 0);

    const newLocation: Location = {
      name: this.locationForm.controls.locationName.value,
      openingDate: openingTimestamp
    };

    this.locationService.createLocation(newLocation)
      .then(() => {
        this.router.navigate(['/', 'locations'])
      });
  }
}
