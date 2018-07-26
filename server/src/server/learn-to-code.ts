import { Server, ServerOptions, createServer, plugins } from 'restify';
import * as corsMiddleware from 'restify-cors-middleware';

import { router } from './routes';

import { DBConnector } from './db/db';

import { Promise, defer } from 'q';
/**
 * Server configuration class
 *
 * @export
 * @class LearnToCode
 */
export class LearnToCode {
    private _server: Server;
    private serverOpts: ServerOptions = {};
    private _port = 3000;

    private corsConfig = corsMiddleware({
        origins: ['*'],
        allowHeaders: ['*'],
        exposeHeaders: ['*']
    });

    constructor() {
        this._server = createServer();
    }

    public get server(): Server {
        return this._server;
    }

    configure(): LearnToCode {
        this._server.pre(this.corsConfig.preflight);
        this._server.use(plugins.bodyParser());
        this._server.use(plugins.queryParser());
        this._server.use(this.corsConfig.actual);

        router.applyRoutes(this._server);

        return this;
    }

    start(): Promise<string> {
        const deferred = defer();
        const dbInstance = new DBConnector();

        dbInstance.connect()
            .then(() => {
                this._server.listen(this._port, () => {
                    this.serverStarted();
                    deferred.resolve('');
                });
            })
            .catch(() => {
                deferred.reject('Failed to connect to the database');
            });


        return <Promise<string>>deferred.promise;
    }

    serverStarted(): void {
        console.log(`Server Started Successfully on ${this._port}`);
    }

}
