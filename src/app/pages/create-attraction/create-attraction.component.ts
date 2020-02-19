import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AttractionsService } from '@shared/services/attractions.service';
import { Attraction } from '@shared/models/attraction';
import { AttractionStatus } from '@shared/models/attraction-status';
import { AttractionLocations } from '@shared/models/attraction-locations';

@Component({
  selector: 'app-create-attraction',
  templateUrl: './create-attraction.component.html',
  styleUrls: ['./create-attraction.component.scss']
})
export class CreateAttractionComponent implements OnInit {
  attractionForm: FormGroup;
  locations = AttractionLocations;
  statusOptions = Object.keys(AttractionStatus).filter(e => !isNaN(+e)).map(o => { return AttractionStatus[o] });

  constructor(
    private attractionsService: AttractionsService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.attractionForm = this.fb.group({
      name: ['', Validators.required],
      description: [null],
      location: ['', Validators.required],
      status: [AttractionStatus.Inactive, Validators.required],
      quicklane: [false, Validators.required],
    });
  }

  createAttraction() {
    const newAttraction: Attraction = {
      id: null,
      name: this.attractionForm.controls.name.value,
      description: this.attractionForm.controls.description.value,
      waittime: null,
      location: this.attractionForm.controls.location.value,
      status: this.mapAttractionStatus(),
      quicklane: this.attractionForm.controls.quicklane.value,
    }

    // The service will turn into creating firebase documents and will handle routing
    this.attractionsService.createAttraction(newAttraction) ? this.router.navigate(['/', 'dashboard']): null;
  }

  mapAttractionStatus() {
    switch(this.attractionForm.controls.status.value) {
      case '0':
        return AttractionStatus.Active;
      case '1':
        return AttractionStatus.Inactive;
      case '2':
        return AttractionStatus.UnderConstruction;
      case '3':
        return AttractionStatus.UnderRenovation;
      default:
        return AttractionStatus.Inactive;
    }
  }
}
