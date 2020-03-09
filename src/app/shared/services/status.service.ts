import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Status } from '@shared/models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusesCollection = this.afs.collection<Status>(`users/${this.afAuth.auth.currentUser.uid}/statuses`);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  createStatus(status: Status): Promise<any> {
    return this.statusesCollection.add(status);
  }

  /* Grab all documents in the statuses collection tied to the user, option added to return IDs of those documents as well. */
  getStatuses(): Observable<Status[]> {
    return this.statusesCollection.valueChanges({idField: 'id'});
  }

  deleteStatus(id: string): Promise<void> {
    return this.statusesCollection.doc(id).delete();
  }

  addDefaultStatuses() {
    this.getDefaultStatuses().then((res: QuerySnapshot<any>) => {
      res.forEach(doc => {
        // Cast the data of each doc returned to a location, add that location to the user's location collection
        const defaultStatus = doc.data() as Status;

        this.statusesCollection.add(defaultStatus);
      });
    });
  }

  /* Grab all documents in the default statuses collection once. */
  private getDefaultStatuses(): Promise<any> {
    return this.afs.firestore.collection('default-statuses').get();
  }
}
