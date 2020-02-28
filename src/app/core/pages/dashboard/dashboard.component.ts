import { Component, OnInit } from '@angular/core';
import { OperationCard } from '@shared/models/operation-card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: OperationCard[] = [
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
    {
      title: 'View Locations',
      description: 'View a list of locations available and their details.',
      url: '/locations'
    },
    {
      title: 'View Statuses',
      description: 'View a list of statuses available and their details.',
      url: '/statuses'
    },
    // {
    //   title: 'Import Attraction JSON',
    //   description: 'Create an attraction from a JSON object.'
    // },
  ]

  constructor() { }

  ngOnInit() {
  }

}
