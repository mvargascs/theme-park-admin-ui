import { AttractionStatus } from './attraction-status';

export interface Attraction {
    id: string;
    name: string;
    description?: string;
    waittime?: number;
    location: string;
    quicklane: boolean;
    status: AttractionStatus;
}
