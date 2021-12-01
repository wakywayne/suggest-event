import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import config from '../../config';
import blog from '../../db/blogs';
import {generateHash} from '../../utils'


const router = express.Router();


router.post("/", async (req: any, res, next) => {
    const newUser = req.body;
  try {
      newUser.userpassword = generateHash(newUser.userpassword);
      const result: any = await blog.insert(newUser);

      const newUserId = await blog.find('email', newUser.email);
    const token = jwt.sign(
      {userid: newUserId.id, email: newUser.email, role: 1}, 
      config.jwt.secret, {expiresIn: '1d'}
      );
      return res.json(token);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "My code register broke oops" });
    }
  });
  
  
  export default router;
