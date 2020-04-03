import { locations } from '../locations';

export class LocationDocument {

    constructor() {}

    data(): any {
        return locations[0];
    }
}
