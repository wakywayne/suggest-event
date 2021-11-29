import * as express from "express";
import loginRouter from "./login";
import Blogs from "../../db/blogs";
import config from "../../config";
import register from './register'

const router = express.Router();


router.use("/login", loginRouter);

router.use("/register", register);

export default router;
