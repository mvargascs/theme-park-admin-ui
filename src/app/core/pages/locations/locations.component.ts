import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';

import { Location } from '@shared/models/location';
import { LocationService } from '@shared/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'openingDate', 'more'];
  dataSource: MatTableDataSource<Location>;
  subs: Subscription = new Subscription();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([])
    this.dataSource.sort = this.sort;
    this.subs.add(
      this.locationService.getLocations().subscribe((locations: Location[]) => {
        this.dataSource = new MatTableDataSource(locations);
        this.dataSource.sort = this.sort;
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  deleteLocation(location: Location) {
    this.locationService.deleteLocation(location.id);
  }

  addDefaultLocations() {
    this.locationService.addDefaultLocations();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
