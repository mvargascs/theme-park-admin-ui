import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

import { Attraction } from '@shared/models/attraction';
import { AttractionLocation } from '@shared/models/attraction-location';
import { AttractionStatus } from '@shared/models/attraction-status';
import { AuthService } from './auth.service';
import { flatMap, merge, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {
  private deafultAttractions: Attraction[] = [];
  private attractions: Attraction[] = [];

  private defaultAttractionsCollection = this.afs.collection<Attraction>('default-attractions');
  private userAttractionsCollection = this.afs.collection<Attraction>(`users/${this.afAuth.auth.currentUser.uid}/attractions`);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  getAttractions(): Observable<Attraction[]> {
    // Grab all documents in the attractions collection tied to the user, option added to return IDs of those documents as well.
    return this.userAttractionsCollection.valueChanges({idField: 'id'});
  }

  addDefaultAttractions() {
    this.getDefaultAttractions().then((res: QuerySnapshot<any>) => {
      res.forEach(doc => {
        // Cast the data of each doc returned to an attraction, add that attraction to the user's attraction collection
        const defaultAttraction = doc.data() as Attraction;

        this.userAttractionsCollection.add(defaultAttraction);
      })
    });
  }

  private getDefaultAttractions(): Promise<any> {
    // Grab all documents in the default attractions collection once.
    return this.afs.firestore.collection('default-attractions').get();
  }

  getAttractionLocations(): Observable<AttractionLocation[]> {
    return this.afs.collection<AttractionLocation>('default-locations').valueChanges({idField: 'id'});
  }

  getAttractionStatuses(): Observable<AttractionStatus[]> {
    return this.afs.collection<AttractionStatus>('default-statuses').valueChanges({idField: 'id'});
  }

  createAttraction(attraction: Attraction): Promise<any> {
    return this.userAttractionsCollection.add(attraction);
  }

  deleteAttraction(attraction: Attraction): boolean {
    // const oldLength = this.attractions.length;
    // const index = this.attractions.findIndex(attr => attr.id === attraction.id);

    // if (index > -1) {
    //   this.attractions.splice(index, 1);
    // }

    // const newLength = this.attractions.length;
    // return newLength > oldLength;
    return false;
  }
}
