import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Attraction } from '@shared/models/attraction';
import { Status } from '@shared/models/status';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {
  private attractionsCollection = this.afs.collection<Attraction>(`users/${this.afAuth.auth.currentUser.uid}/attractions`);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  createAttraction(attraction: Attraction): Promise<any> {
    return this.attractionsCollection.add(attraction);
  }

  /* Grab all documents in the attractions collection tied to the user, option added to return IDs of those documents as well. */
  getAttractions(): Observable<Attraction[]> {
    return this.attractionsCollection.valueChanges({idField: 'id'});
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
}
