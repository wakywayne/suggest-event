import * as express from "express";
import {tokenCheck} from '../middleware/auth'
import Api from "./api";
import Auth from "./auth";

const router = express.Router();

router.use("/api", Api);
router.use("/auth", Auth);


export default router;
