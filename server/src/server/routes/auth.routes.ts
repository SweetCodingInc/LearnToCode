import { router } from './router';
import { Request, Response, Next } from 'restify';
import { defer, Promise } from 'q';

import { IAuthResponse } from '../models/auth.model';
import { IUser } from '../models/user.model';
import { UserModel } from '../db/models/user.model';

function login(username: string, password: string): Promise<IAuthResponse> {
    const deferred = defer();
    UserModel.findOne({ username })
        .then((model: any) => {
            if (model.password === password) {
                model.success = true;
                model.error = undefined;
                deferred.resolve(model);
            } else {
                const error = {
                    message: 'Incorrect username or password',
                    success: false
                };
                deferred.reject(error);
            }
        })
        .catch((model: any) => {
            model.success = false;
            deferred.reject(model);
        });
    return <Promise<IAuthResponse>>deferred.promise;
}

function register(user: IUser): Promise<IUser> {
    const deferred = defer();

    const userSchema = new UserModel(user);
    userSchema.save((err, _user) => {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(_user);
        }
    });

    return <Promise<IUser>>deferred.promise;
}

router.get('/login', (req: Request, res: Response, next: Next) => {
    const { username, password } = req.query;
    login(username, password)
        .then((response: IAuthResponse) => {
            res.json(response);
        })
        .catch((response: IAuthResponse) => {
            res.status(500);
            res.json(response);
        });
});

/**
 * API to register new user.
 * @constructor
 * @param {string} endpoint /register
 * @param {string} method POST
 * @param {string} requestBody - { username: string, password: string, firstName: string, lastName: string, email: string}
 */
router.post('/register', (req: Request, res: Response, next: Next) => {
    const data = req.body;
    if(data)
    {
        data.createdOn = new Date().getTime();
        register(data)
        .then((user: IUser) => {
            res.json(user);
        })
        .catch((error: any) => {
            res.status(500);
            res.json(error);
        })
    }
    else{
        res.status(422) // unprocessable entity
        res.json({
            'message': 'Request body was not present'
        })
    }
});

export const authRouter = router;
