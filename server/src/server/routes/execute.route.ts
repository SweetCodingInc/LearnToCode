import { router } from './router';
import { Request, Response, Next } from 'restify';
import { defer, Promise } from 'q';
import axios from 'axios';

import { IExecution } from '../models/execute.model';

/**
 * API to register new user.
 * @constructor
 * @param {string} endpoint /register
 * @param {string} method POST
 * @param {string} requestBody - { username: string, password: string, firstName: string, lastName: string, email: string}
 */

function execute(req: Request, res: Response, next: Next) {
    const { language, code } = <IExecution>req.body;

    const URL = `https://run.glot.io/languages/${language}/latest`;
    const TOKEN = `${process.env.COMPILER_API_TOKEN}`;
    const TYPE = 'application/json';

    const REQUEST_HEADERS = {
        headers: {
            'Authorization': TOKEN,
            'Content-Type': TYPE
        }
    };

    const REQUEST_BODY = {
        files: [
            {
                name: 'main.c',
                content: code
            }
        ]
    };

    axios.post(URL, REQUEST_BODY, REQUEST_HEADERS)
        .then(response => {
            console.log(response);
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
            res.status(500);
            res.send(error.data);
        });
}

router.post('/execute', execute);

export const executeRouter = router;
