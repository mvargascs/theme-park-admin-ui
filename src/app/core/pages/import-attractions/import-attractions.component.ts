import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AttractionsService } from '@shared/services/attractions.service';

import { Status } from '@shared/models/status';
import { Attraction } from '@shared/models/attraction';

@Component({
  selector: 'app-import-attractions',
  templateUrl: './import-attractions.component.html',
  styleUrls: ['./import-attractions.component.scss']
})
export class ImportAttractionsComponent implements OnInit {
  private attractionsToImport: Attraction[];
  
  attractionJsonForm: FormGroup;

  constructor(
    private attractionsService: AttractionsService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.attractionJsonForm = this.fb.group({
      attractionsJson: ['', Validators.required],
    });
  }

  importAttractions() {
    let imported = 0;
    if (this.isValidJson(this.attractionJsonForm.controls.attractionsJson.value)) {
      this.attractionsToImport.forEach(attraction => {
        this.attractionsService.createAttraction(attraction)
          .then(() => {
            if(++imported === this.attractionsToImport.length) {
              this.router.navigate(['/', 'attractions']);
            }
          });
      });
    }
  }

  private isValidJson(json: string) {
    try {
      const obj = JSON.parse(json);
      if (obj && typeof obj === 'object' && obj !== null) {
        this.attractionsToImport = obj;
        return true;
      }
    } catch (error) { }

    return false
  }
}
