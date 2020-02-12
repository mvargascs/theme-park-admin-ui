import { AttractionStatus } from './attraction-status';

export interface Attraction {
    name: string;
    location: string;
    quicklane: boolean;
    status: AttractionStatus;
    id?: string;
    description?: string;
    waittime?: number;
}
