import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response, Application } from "express";

const start = (callback: (app: Application) => void) => {

    const app: Application = express();

    app.set('trust proxy', 1);
    app.disable('x-powered-by');

    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const SERVER_PORT = process.env.SERVER_PORT || 8080;

    callback(app);

    app.listen(SERVER_PORT, () => {
        console.log(`Starting server in port ${SERVER_PORT}`);
    });

}

const apiName = async (req: Request, res: Response): Promise<void> => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.json({
        firstName: "Pablo",
        lastName: "Rosales",
    });

}

start((app: Application) => {

    app.get("/api/name$/", apiName);

})