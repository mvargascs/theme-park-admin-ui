import { Component, OnInit } from '@angular/core';
import { OperationCard } from '@shared/models/operation-card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  attractionCards: OperationCard[] = [
    {
      title: 'View Attractions',
      description: 'View a list of attractions available and their details.',
      url: '/attractions'
    },
    {
      title: 'Create Attraction Form',
      description: 'Create an attraction through a validated form.',
      url: '/create-attraction'
    },
  ];

  locationCards: OperationCard[] = [
    {
      title: 'View Locations',
      description: 'View a list of locations available and their details.',
      url: '/locations'
    },
    {
      title: 'Create Location Form',
      description: 'Create a location through a validated form.',
      url: '/create-location'
    },
  ];

  statusCards: OperationCard[] = [
    {
      title: 'View Statuses',
      description: 'View a list of statuses available and their details.',
      url: '/statuses'
    },
    {
      title: 'Create Status Form',
      description: 'Create a status through a validated form.',
      url: '/create-status'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
