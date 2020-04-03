import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Status } from '@shared/models/status';
import { StatusService } from '@shared/services/status.service';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.scss']
})
export class StatusesComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['status', 'description', 'more'];
  dataSource: MatTableDataSource<Status>;
  subs: Subscription = new Subscription();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private statusService: StatusService,
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.sort = this.sort;
    this.subs.add(
      this.statusService.getStatuses().subscribe((statuses: Status[]) => {
        this.dataSource = new MatTableDataSource(statuses);
        this.dataSource.sort = this.sort;
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  deleteStatus(status: Status) {
    this.statusService.deleteStatus(status.id);
  }

  addDefaultStatuses() {
    this.statusService.addDefaultStatuses();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
