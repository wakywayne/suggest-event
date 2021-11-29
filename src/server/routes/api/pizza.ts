import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as passport from "passport";
import {tokenCheck}  from '../../middleware/auth'
import config from '../../config';

const rout = express.Router();

rout.get('/',  tokenCheck, (req, res, next) => {

    try {
        res.json({message: "Enjoy your pizza Time"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'My code sucks let me know!'});
        }
    });
  

export default rout;