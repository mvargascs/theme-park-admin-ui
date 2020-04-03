import { Observable, of } from 'rxjs';

import { Status } from '@shared/models/status';

import { statuses } from '@testing/data/statuses';

import { StatusDocument } from '@testing/data/firebase-docs/status-doc';

export class MockStatusService {
    createStatus(status: Status): Promise<any> {
        return null;
        // return this.statusesCollection.add(status);
    }

    /* Grab all documents in the statuses collection tied to the user, option added to return IDs of those documents as well. */
    getStatuses(): Observable<Status[]> {
        return of(statuses);
        // return this.statusesCollection.valueChanges({ idField: 'id' });
    }

    getStatus(id: string): Promise<any> {
        return Promise.resolve(new StatusDocument());
    }

    updateStatus(status: Status) {
        return Promise.resolve();
    }

    deleteStatus(id: string): Promise<void> {
        return null;
        // return this.statusesCollection.doc(id).delete();
    }

    addDefaultStatuses() {
        // this.getDefaultStatuses().then((res: QuerySnapshot<any>) => {
        //     res.forEach(doc => {
        //         // Cast the data of each doc returned to a location, add that location to the user's location collection
        //         const defaultStatus = doc.data() as Status;

        //         this.statusesCollection.add(defaultStatus);
        //     });
        // });
    }

    /* Grab all documents in the default statuses collection once. */
    private getDefaultStatuses(): Promise<any> {
        return null;
        // return this.afs.firestore.collection('default-statuses').get();
    }
}
