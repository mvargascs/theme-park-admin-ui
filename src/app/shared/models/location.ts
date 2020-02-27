import { firestore } from 'firebase';

export interface Location {
    id?: string;
    name: string;
    openingDate?: firestore.Timestamp;
}
