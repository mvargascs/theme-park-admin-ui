import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StatusService } from '@shared/services/status.service';

import { Status } from '@shared/models/status';

@Component({
  selector: 'app-create-status',
  templateUrl: './create-status.component.html',
  styleUrls: ['./create-status.component.scss']
})
export class CreateStatusComponent implements OnInit {
  statusForm: FormGroup;

  constructor(
    private statusService: StatusService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.statusForm = this.fb.group({
      statusName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  createStatus() {
    const newStatus: Status = {
      status: this.statusForm.controls.statusName.value,
      description: this.statusForm.controls.description.value
    };

    this.statusService.createStatus(newStatus)
      .then(() => {
        this.router.navigate(['/', 'statuses'])
      });
  }
}
