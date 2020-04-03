import { statuses } from '../statuses';

export class StatusDocument {

    constructor() {}

    data(): any {
        return statuses[0];
    }
}
