import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Attraction } from '@shared/models/attraction';
import { AttractionsService } from '@shared/services/attractions.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'waittime', 'location', 'quicklane', 'status', 'more'];
  dataSource: MatTableDataSource<Attraction>;
  subs: Subscription = new Subscription();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private attractionsService: AttractionsService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([])
    this.dataSource.sort = this.sort;
    this.subs.add(
      this.attractionsService.getAttractions().subscribe((attractions: Attraction[]) => {
        this.dataSource = new MatTableDataSource(attractions);
        this.dataSource.sort = this.sort;
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  deleteAttraction(attraction: Attraction) {
    this.attractionsService.deleteAttraction(attraction.id);
  }

  addDefaultAttractions() {
    this.attractionsService.addDefaultAttractions();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
