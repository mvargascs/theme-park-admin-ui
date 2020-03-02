import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AttractionsService } from '@shared/services/attractions.service';

import { Attraction } from '@shared/models/attraction';

@Component({
  selector: 'app-import-attractions',
  templateUrl: './import-attractions.component.html',
  styleUrls: ['./import-attractions.component.scss']
})
export class ImportAttractionsComponent implements OnInit {
  private attractionsToImport: Attraction[];
  
  attractionJsonForm: FormGroup;

  invalidJson = false;

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
    this.invalidJson = false;
    const json = this.attractionJsonForm.controls.attractionsJson.value;
    
    if (this.isJsonArray(json) && this.isValidJson(json)) {
      this.attractionsToImport = JSON.parse(json);

      this.attractionsToImport.forEach(attraction => {
        this.attractionsService.createAttraction(attraction)
          .then(() => {
            if(++imported === this.attractionsToImport.length) {
              this.router.navigate(['/', 'attractions']);
            }
          });
      });
    }
    else {
      this.invalidJson = true;
    }
  }

  private isJsonArray(json: string): boolean {
    return json.startsWith('[') && json.endsWith(']');
  }

  private isValidJson(json: string): boolean {
    try {
      const obj = JSON.parse(json);
      if (obj && typeof obj === 'object' && obj !== null) {
        return true;
      }
    } catch (error) { }

    return false
  }
}
