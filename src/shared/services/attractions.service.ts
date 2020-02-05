import { Injectable } from '@angular/core';
import { Attraction } from '@shared/models/attraction';
import { of, Observable } from 'rxjs';
import { AttractionStatus } from '@shared/models/attraction-status';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  attractions: Attraction[] = [
    {
      id: 'ede3ee7a-b2d2-4286-a549-cb9a4e231728',
      name: 'Huey',
      description: 'An adventurous journey on a flying horse',
      waittime: 10,
      location: 'Dream World',
      quicklane: false,
      status: AttractionStatus.Active,
    },
    {
      id: '93cd7e38-2234-476b-a3a6-e6ca7d714246',
      name: 'Vortex of Fate',
      description: 'Zip and zoom through the twists of fate',
      waittime: 55,
      location: 'Abstractland',
      quicklane: true,
      status: AttractionStatus.Inactive,
    },
    {
      id: '284ea724-069c-4807-b4a4-6e9c357c03be',
      name: 'Raging Seas',
      description: 'Coming Soon...',
      location: 'Islands of Mists',
      quicklane: false,
      status: AttractionStatus.UnderConstruction,
    },
  ]

  constructor() { }

  getAttractions(): Observable<Attraction[]> {
    return of(this.attractions);
  }

  createAttraction(attraction: Attraction): boolean {
    const oldLength = this.attractions.length;
    const newLength = this.attractions.push(attraction);
    return newLength > oldLength;
  }

  deleteAttraction(attraction: Attraction): boolean {
    const oldLength = this.attractions.length;
    const index = this.attractions.findIndex(attr => attr.id === attraction.id);

    if (index > -1) {
      this.attractions.splice(index, 1);
    }

    const newLength = this.attractions.length;
    return newLength > oldLength;
  }
}