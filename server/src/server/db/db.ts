import { connect, Mongoose, connection } from 'mongoose';
import { Promise, defer } from 'q';

export class DBConnector {
    private host = 'mongodb://localhost:27017';
    private db = 'learntocode';

    constructor() {
    }

    connect(): Promise<boolean> {
        const deferred = defer();
        const url = `${this.host}/${this.db}`;
        connect(url)
            .then(deferred.resolve)
            .catch(deferred.reject);

        return <Promise<boolean>>deferred.promise;
    }
}
