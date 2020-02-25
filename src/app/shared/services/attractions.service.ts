import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Attraction } from '@shared/models/attraction';
import { AttractionLocation } from '@shared/models/attraction-location';
import { AttractionStatus } from '@shared/models/attraction-status';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {
  private attractionsCollection = this.afs.collection<Attraction>(`users/${this.afAuth.auth.currentUser.uid}/attractions`);
  private locationsCollection = this.afs.collection<AttractionLocation>(`users/${this.afAuth.auth.currentUser.uid}/locations`);
  private statusesCollection = this.afs.collection<AttractionStatus>(`users/${this.afAuth.auth.currentUser.uid}/statuses`);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  /* Grab all documents in the attractions collection tied to the user, option added to return IDs of those documents as well. */
  getAttractions(): Observable<Attraction[]> {
    return this.attractionsCollection.valueChanges({idField: 'id'});
  }

  /* Grab all documents in the locations collection tied to the user, option added to return IDs of those documents as well. */
  getAttractionLocations(): Observable<AttractionLocation[]> {
    return this.locationsCollection.valueChanges({idField: 'id'});
  }

  /* Grab all documents in the statuses collection tied to the user, option added to return IDs of those documents as well. */
  getAttractionStatuses(): Observable<AttractionStatus[]> {
    return this.statusesCollection.valueChanges({idField: 'id'});
  }

  createAttraction(attraction: Attraction): Promise<any> {
    return this.attractionsCollection.add(attraction);
  }

  deleteAttraction(id: string): Promise<void> {
    return this.attractionsCollection.doc(id).delete();
  }

  addDefaultAttractions() {
    this.getDefaultAttractions().then((res: QuerySnapshot<any>) => {
      res.forEach(doc => {
        // Cast the data of each doc returned to an attraction, add that attraction to the user's attraction collection
        const defaultAttraction = doc.data() as Attraction;

        this.attractionsCollection.add(defaultAttraction);
      })
    });
  }

  /* Grab all documents in the default attractions collection once. */
  private getDefaultAttractions(): Promise<any> {
    return this.afs.firestore.collection('default-attractions').get();
  }

  addDefaultLocations() {
    this.getDefaultLocations().then((res: QuerySnapshot<any>) => {
      res.forEach(doc => {
        // Cast the data of each doc returned to a location, add that location to the user's location collection
        const defaultLocation = doc.data() as AttractionLocation;

        this.locationsCollection.add(defaultLocation);
      })
    });
  }

  /* Grab all documents in the default locations collection once. */
  private getDefaultLocations(): Promise<any> {
    return this.afs.firestore.collection('default-locations').get();
  }

  addDefaultStatuses() {
    this.getDefaultStatuses().then((res: QuerySnapshot<any>) => {
      res.forEach(doc => {
        // Cast the data of each doc returned to a status, add that status to the user's statuses collection
        const defaultStatus = doc.data() as AttractionStatus;

        this.statusesCollection.add(defaultStatus);
      })
    });
  }

  /* Grab all documents in the default statuses collection once. */
  private getDefaultStatuses(): Promise<any> {
    return this.afs.firestore.collection('default-statuses').get();
  }
}
