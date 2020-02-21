import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Observable, Subscription } from 'rxjs';

import { Attraction } from '@shared/models/attraction';
import { AttractionsService } from '@shared/services/attractions.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'waittime', 'location', 'quicklane', 'status'];
  dataSource: MatTableDataSource<Attraction>;
  subs: Subscription = new Subscription();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private attractionsService: AttractionsService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([])
    this.subs.add(
      this.attractionsService.getAttractions().subscribe((attractions: Attraction[]) => {
        this.dataSource = new MatTableDataSource(attractions);
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  addDefaultAttractions() {
    this.attractionsService.addDefaultAttractions();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
