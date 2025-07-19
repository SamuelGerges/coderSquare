import express, { RequestHandler } from 'express';

import {db} from './datastore/index';
import { listPostHandler, createPostHandler } from './datahandlers/Posthandlers';

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

app.listen(3000);