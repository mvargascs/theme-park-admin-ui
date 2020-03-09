import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

export interface Attraction {
    id?: string;
    name: string;
    description?: string;
    location: string;
    waittime?: number;
    lastUpdated?: Timestamp;
    status: string;
    quicklane: boolean;
}
