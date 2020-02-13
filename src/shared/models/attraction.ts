import { AttractionStatus } from './attraction-status';

// TODO: this is a collection.
export interface Attraction {
    name: string;
    location: string;
    quicklane: boolean;
    status: AttractionStatus;
    id?: string;
    description?: string;
    waittime?: number;
}
