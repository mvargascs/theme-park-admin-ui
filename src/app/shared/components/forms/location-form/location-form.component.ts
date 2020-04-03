import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

import { LocationService } from '@shared/services/location.service';

import { Location } from '@shared/models/location';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {
  @Input() id: string;

  private operations = ['Create', 'Update'];
  private cancelUrls = ['dashboard', 'locations'];

  locationForm: FormGroup;
  locations$: Observable<Location[]>;
  currentOperation: string;
  cancelUrl: string;

  formPopulated = false;

  constructor(
    private locationService: LocationService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentOperation = this.getOperation();
    this.cancelUrl = this.getCancelUrl();

    this.locations$ = this.locationService.getLocations();

    this.locationForm = this.fb.group({
      locationName: ['', Validators.required],
      openingDate: [null, Validators.required],
    });

    this.setForm()
      .then(() => {
        this.formPopulated = true;
      });
  }

  cancel() {
    this.id ? this.router.navigate(['/', 'locations']) : this.router.navigate(['/', 'dashboard']);
  }

  submitLocation(): void {
    this.id ? this.updateLocation() : this.createLocation();
  }

  private createLocation() {
    const dateObj = this.locationForm.controls.openingDate.value as Date;
    const seconds = dateObj.getTime() / 1000;
    const openingTimestamp: Timestamp = new Timestamp(seconds, 0);

    const newLocation: Location = {
      name: this.locationForm.controls.locationName.value,
      openingDate: openingTimestamp
    };

    this.locationService.createLocation(newLocation)
      .then(() => {
        this.router.navigate(['/', 'locations']);
      });
  }

  private updateLocation() {
    const location: Location = {
      id: this.id,
      name: this.locationForm.controls.locationName.value,
      openingDate: this.locationForm.controls.openingDate.value,
    };

    this.locationService.updateLocation(location)
      .then(() => {
        this.router.navigate(['/', 'locations']);
      });
  }

  private getOperation(): string {
    return this.id ? this.operations[1] : this.operations[0];
  }

  private getCancelUrl(): string {
    return this.id ? this.cancelUrls[1] : this.cancelUrls[0];
  }

  private setForm(): Promise<void> {
    if (this.id) {
      let location: Location = null;
      return this.locationService.getLocation(this.id)
        .then((doc) => {
          location = doc.data() as Location;

          this.locationForm.patchValue({
            locationName: location.name,
            openingDate: location.openingDate.toDate(),
          });
        });
    } else {
      return Promise.resolve();
    }
  }
}
