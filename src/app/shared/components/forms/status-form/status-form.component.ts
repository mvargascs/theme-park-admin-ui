import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StatusService } from '@shared/services/status.service';

import { Status } from '@shared/models/status';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent implements OnInit {
  @Input() id: string;

  private operations = ['Create', 'Update'];
  private cancelUrls = ['dashboard', 'statuses'];

  statusForm: FormGroup;
  statuses$: Observable<Status[]>;
  currentOperation: string;
  cancelUrl: string;

  formPopulated = false;

  constructor(
    private statusService: StatusService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentOperation = this.getOperation();
    this.cancelUrl = this.getCancelUrl();

    this.statuses$ = this.statusService.getStatuses();

    this.statusForm = this.fb.group({
      statusName: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.setForm()
      .then(() => {
        this.formPopulated = true;
      });
  }

  cancel() {
    this.id ? this.router.navigate(['/', 'statuses']) : this.router.navigate(['/', 'dashboard']);
  }

  submitStatus(): void {
    this.id ? this.updateStatus() : this.createStatus();
  }

  private createStatus() {
    const newStatus: Status = {
      status: this.statusForm.controls.statusName.value,
      description: this.statusForm.controls.description.value,
    };

    this.statusService.createStatus(newStatus)
      .then(() => {
        this.router.navigate(['/', 'statuses']);
      });
  }

  private updateStatus() {
    const updatedStatus: Status = {
      id: this.id,
      status: this.statusForm.controls.statusName.value,
      description: this.statusForm.controls.description.value,
    };

    this.statusService.updateStatus(updatedStatus)
      .then(() => {
        this.router.navigate(['/', 'statuses']);
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
      let existingStatus: Status = null;
      return this.statusService.getStatus(this.id)
        .then((doc) => {
          existingStatus = doc.data() as Status;

          this.statusForm.patchValue({
            statusName: existingStatus.status,
            description: existingStatus.description,
          });
        });
    } else {
      return Promise.resolve();
    }
  }
}
