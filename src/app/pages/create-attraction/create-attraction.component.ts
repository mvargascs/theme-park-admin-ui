import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AttractionsService } from '@shared/services/attractions.service';
import { Attraction } from '@shared/models/attraction';
import { AttractionStatus } from '@shared/models/attraction-status';

@Component({
  selector: 'app-create-attraction',
  templateUrl: './create-attraction.component.html',
  styleUrls: ['./create-attraction.component.scss']
})
export class CreateAttractionComponent implements OnInit {
  attractionForm: FormGroup;
  attractionStatus = AttractionStatus;
  statusOptions = Object.keys(AttractionStatus).filter(e => !isNaN(+e)).map(o => { return AttractionStatus[o] });

  constructor(
    private attractionsService: AttractionsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.attractionForm = this.fb.group({
      name: ['', Validators.required],
      description: [null],
      location: ['', Validators.required],
      quicklane: [false, Validators.required],
      status: [AttractionStatus.Inactive, Validators.required],
    });
  }

  createAttraction() {
    const newAttraction: Attraction = {
      id: '000',
      name: this.attractionForm.controls.name.value,
      description: this.attractionForm.controls.description.value,
      waittime: null,
      location: this.attractionForm.controls.location.value,
      quicklane: this.attractionForm.controls.quicklane.value,
      status: this.attractionForm.controls.status.value,
    }

    console.dir(newAttraction);
    // this.attractionsService.createAttraction(newAttraction);
  }
}
