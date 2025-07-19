import { db } from "../datastore";
import { Post } from "../types";
import { ExpressHandler } from "../types";
import { formatDate } from "../types";
import crypto from 'crypto';




export const listPostHandler: ExpressHandler<{}, {}> = (request, response) => {
    response.send({ posts: db.listPost() });
}; 


type CreatePostRequest = Pick<Post, 'title'|'url'|'userId'>

interface CreatePostResponse {};

export const createPostHandler : ExpressHandler<CreatePostRequest , CreatePostResponse> = (req, res) => {

    if(!req.body.title || !req.body.url || !req.body.userId)
        return res.sendStatus(400);

    const post:Post = {
        id:crypto.randomUUID(),
        postedAt: formatDate(Date.now()),
        title:req.body.title,
        url:req.body.url,
        userId:req.body.userId

    };

    db.createPost(post);
    res.sendStatus(200);
    
};

