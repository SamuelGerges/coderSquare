import express, { ErrorRequestHandler, RequestHandler } from 'express';

import {db} from './datastore/index';
import { listPostHandler, createPostHandler } from './datahandlers/Posthandlers';
import { nextTick } from 'process';
import { log } from 'console';

const app = express();

app.use(express.json());


// const posts: any = [];

const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
    console.log(req.method, req.path, ' -body: ', req.body );
    next();
};

app.use(requestLoggerMiddleware);

// app.use((req, res, next) => {
//     console.log(Date.now());
//     next();
// });

app.get('/posts', listPostHandler);
app.post('/posts', createPostHandler);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error("Uncaught Exception: ", err);
    return res.status(500).send('Opps!, an unexpected error occurred, please try again');
}

app.use(errorHandler);

app.listen(3000);