import * as express from "express";
import Blogs from "../../db/blogs";
import config from "../../config";
import pizza from './pizza'

const router = express.Router();

router.use('/pizza', pizza);

router.get("/hello", (req, res, next) => {
  res.json(`Hello ${config.test}`);
});

router.get("/suggestedevents", async (req, res) => {
  try {
    res.json(await Blogs.allsuggestedevents());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/suggestedeventsusers", async (req, res) => {
  try {
    res.json(await Blogs.allsuggestedeventsusers());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/suggestedevents", async (req, res) => {
  console.log(req.body.eventname);
  try {
    res.json(
      await Blogs.addEvent(
        req.body.eventname,
        req.body.eventdescription,
        req.body.eventdate,
        req.body.userId
      )
    );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
