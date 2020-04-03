import { attractions } from './attractions';

export class AttractionDocument {
    
    constructor() {}
    
    data(): any {
        return attractions[0];
    }
};
