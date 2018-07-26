import { connect, Mongoose, connection } from 'mongoose';
import { Promise, defer } from 'q';

export class DBConnector {
    private host = process.env.DB_HOST;
    private db = process.env.DB_NAME;
    private CONN_STRING = `${this.host}/${this.db}`;

    connect(): Promise<boolean> {
        const deferred = defer();
        connect(this.CONN_STRING)
            .then(deferred.resolve)
            .catch(deferred.reject);

        return <Promise<boolean>>deferred.promise;
    }
}
