import * as express from "express";
import apiRouter from "./routes/index";
import * as passport from 'passport';
import * as PassportLocal from 'passport-local';


import './middleware/passport-stradegies';

const app = express();

console.log(passport);

app.use(passport.initialize());
app.use(express.static("public"));
app.use(express.json());
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));


