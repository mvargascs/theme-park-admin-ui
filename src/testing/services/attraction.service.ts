import { Observable, of } from 'rxjs';

import { Attraction } from '@shared/models/attraction';

import { attractions } from '@testing/data/attractions';

export class MockAttractionsService {
    createAttraction(attraction: Attraction): Promise<any> {
        return null;
        // return this.attractionsCollection.add(attraction);
    }

    /* Grab all documents in the attractions collection tied to the user, option added to return IDs of those documents as well. */
    getAttractions(): Observable<Attraction[]> {
        return of(attractions);
    }

    getAttraction(id: string): Promise<any> {
        return null;
        // return this.afs.firestore.collection(`users/${this.afAuth.auth.currentUser.uid}/attractions`).doc(id).get();
    }

    updateAttraction(attraction: Attraction) {
        return null;
        // return this.attractionsCollection.doc(attraction.id).update({
        //     name: attraction.name,
        //     description: attraction.description,
        //     location: attraction.location,
        //     waittime: attraction.waittime,
        //     status: attraction.status,
        //     quicklane: attraction.quicklane,
        // });
    }

    deleteAttraction(id: string): Promise<void> {
        return null;
        // return this.attractionsCollection.doc(id).delete();
    }

    addDefaultAttractions() {
        // this.getDefaultAttractions().then((res: QuerySnapshot<any>) => {
        //     res.forEach(doc => {
        //         // Cast the data of each doc returned to an attraction, add that attraction to the user's attraction collection
        //         const defaultAttraction = doc.data() as Attraction;

        //         this.attractionsCollection.add(defaultAttraction);
        //     });
        // });
    }

    /* Grab all documents in the default attractions collection once. */
    private getDefaultAttractions(): Promise<any> {
        return null;
        // return this.afs.firestore.collection('default-attractions').get();
    }
}