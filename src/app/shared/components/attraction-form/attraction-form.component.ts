import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AttractionsService } from '@shared/services/attractions.service';
import { LocationService } from '@shared/services/location.service';
import { StatusService } from '@shared/services/status.service';

import { Attraction } from '@shared/models/attraction';
import { Location } from '@shared/models/location';
import { Status } from '@shared/models/status';

@Component({
  selector: 'app-attraction-form',
  templateUrl: './attraction-form.component.html',
  styleUrls: ['./attraction-form.component.scss']
})
export class AttractionFormComponent implements OnInit {
  @Input() id: string;

  private formTitles = ['Create Attraction', 'Update Attraction'];

  attractionForm: FormGroup;
  locations$: Observable<Location[]>;
  statuses$: Observable<Status[]>;
  currentTitle: string;

  formPopulated = false;

  constructor(
    private attractionsService: AttractionsService,
    private locationService: LocationService,
    private statusService: StatusService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentTitle = this.setTitle();

    this.locations$ = this.locationService.getLocations();
    this.statuses$ = this.statusService.getStatuses();

    this.attractionForm = this.fb.group({
      name: ['', Validators.required],
      description: [null],
      location: ['', Validators.required],
      status: ['Inactive', Validators.required],
      waittime: [0],
      quicklane: [false, Validators.required],
    });

    this.setForm()
      .then(() => {
        this.formPopulated = true;
      });
  }

  cancel() {
    this.id ? this.router.navigate(['/', 'attractions']) : this.router.navigate(['/', 'dashboard']);
  }

  submitAttraction(): void {
    this.id ? this.updateAttraction() : this.createAttraction();
  }

  private createAttraction() {
    const newAttraction: Attraction = {
      name: this.attractionForm.controls.name.value,
      description: this.attractionForm.controls.description.value,
      waittime: null,
      location: this.attractionForm.controls.location.value,
      status: this.attractionForm.controls.status.value,
      quicklane: this.attractionForm.controls.quicklane.value,
    };

    this.attractionsService.createAttraction(newAttraction)
      .then(() => {
        this.router.navigate(['/', 'attractions']);
      });
  }

  private updateAttraction() {
    const attraction: Attraction = {
      id: this.id,
      name: this.attractionForm.controls.name.value,
      description: this.attractionForm.controls.description.value,
      waittime: this.attractionForm.controls.waittime.value,
      location: this.attractionForm.controls.location.value,
      status: this.attractionForm.controls.status.value,
      quicklane: this.attractionForm.controls.quicklane.value,
    };

    this.attractionsService.updateAttraction(attraction)
      .then(() => {
        this.router.navigate(['/', 'attractions']);
      });
  }

  private setTitle(): string {
    return this.id ? this.formTitles[1] : this.formTitles[0];
  }

  private setForm(): Promise<void> {
    if (this.id) {
      let attraction: Attraction = null;
      return this.attractionsService.getAttraction(this.id)
        .then((doc) => {
          attraction = doc.data() as Attraction;

          this.attractionForm.patchValue({
            name: attraction.name,
            description: attraction.description,
            location: attraction.location,
            status: attraction.status,
            waittime: attraction.waittime,
            quicklane: attraction.quicklane,
          });
        });
    } else {
      return Promise.resolve();
    }
  }
}
