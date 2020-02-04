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
      title: 'View Rides',
      description: 'View a list of rides available and their details.',
      url: '/attractions'
    },
    {
      title: 'Create Ride Form',
      description: 'Create a ride through a validated form.'
    },
    {
      title: 'Import Ride JSON',
      description: 'Create a ride from a JSON object.'
    },
    {
      title: 'Delete a Ride',
      description: 'Pick a ride from a dropdown to remove from the list of rides.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
