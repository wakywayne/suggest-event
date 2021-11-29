import * as express from "express";


export interface ReqUser extends express.Request{
  user?:{
    id?: number;
    email?: string;
    userpassword?: string;
    creatrd_at?: Date;
  }
}

export interface Payload{
    userid: number;
    email: string;
    role: number; 
}