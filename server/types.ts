import { RequestHandler } from "express";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export interface Post {
    id: string;
    title: string;
    url: string;
    userId: string;
    postedAt: number | string;
}


export interface Like {
    userId: string;
    postId: string;

}

export interface Comment {
    id: string;
    userId: string;
    postId: string;
    comment: string;
    postedAt: number;
}

export type ExpressHandler <Req, Res> = RequestHandler<
    string, 
    Partial<Res>, 
    Partial<Req>, 
    any
>; 


export function formatDate(date: number): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}