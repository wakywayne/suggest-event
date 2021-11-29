import * as express from "express";
import * as path from 'path';
import apiRouter from "./routes/index";
import {configurePassport} from './middleware/passport-stradegies';


const app = express();

configurePassport(app);
app.use(express.static("public"));
app.use(express.json());
app.use(apiRouter);
app.get(['*'], (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
}
)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));


