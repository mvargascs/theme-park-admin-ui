import { Observable, of } from 'rxjs';

import { Location } from '@shared/models/location';

import { locations } from '@testing/data/locations';

export class MockLocationService {
    createLocation(location: Location): Promise<any> {
        return null;
        // return this.locationsCollection.add(location);
    }

    /* Grab all documents in the locations collection tied to the user, option added to return IDs of those documents as well. */
    getLocations(): Observable<Location[]> {
        return of(locations);
        // return this.locationsCollection.valueChanges({ idField: 'id' });
    }

    deleteLocation(id: string): Promise<void> {
        return null;
        // return this.locationsCollection.doc(id).delete();
    }

    addDefaultLocations() {
        // this.getDefaultLocations().then((res: QuerySnapshot<any>) => {
        //     res.forEach(doc => {
        //         // Cast the data of each doc returned to a location, add that location to the user's location collection
        //         const defaultLocation = doc.data() as Location;

        //         this.locationsCollection.add(defaultLocation);
        //     });
        // });
    }

    /* Grab all documents in the default locations collection once. */
    private getDefaultLocations(): Promise<any> {
        return null;
        // return this.afs.firestore.collection('default-locations').get();
    }
}
