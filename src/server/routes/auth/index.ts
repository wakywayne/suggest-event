import * as express from "express";
// import loginRouter from "./login";
import Blogs from "../../db/blogs";
import config from "../../config";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Yay");
});

// router.use("/login", loginRouter);

export default router;
