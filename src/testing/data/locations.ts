import { Location } from '@shared/models/location';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

const dateObj = new Date();
const seconds = dateObj.getTime() / 1000;
const openingTimestamp: Timestamp = new Timestamp(seconds, 0);

export const locations: Location[] = [
    {
        id: 'LLLLLLLLLLLLLLLLLLLA',
        name: 'Dream World',
        openingDate: openingTimestamp,
    },
    {
        id: 'LLLLLLLLLLLLLLLLLLLB',
        name: 'Vortex of Fate',
        openingDate: openingTimestamp,
    },
    {
        id: 'LLLLLLLLLLLLLLLLLLLC',
        name: 'Raging Seas',
        openingDate: openingTimestamp,
    },
];
