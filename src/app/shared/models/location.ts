import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp

export interface Location {
    id?: string;
    name: string;
    openingDate?: Timestamp;
}
