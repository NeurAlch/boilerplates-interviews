import * as cors from "cors";
import { setupDB } from "./db";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response, Application } from "express";
import { getProducts, IProductModel, createProduct } from "./products";

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

const apiProductsGET = async (req: Request, res: Response): Promise<void> => {

    const requester = req.get("X-Requester");

    if (requester !== "ScalablePathTest") {

        res.status(403).json({
            products: [],
        });

        return;

    }

    const products = await getProducts();

    res.json({
        products: products.map((product) => ({id: product._id, name: product.name, description: product.description})),
    });

}

const createProductsSample = async () => {

    await createProduct({
        name: "VSCode",
        description: "The Editor",
    });

    await createProduct({
        name: "JavaScript",
        description: "The Language",
    });

}

setupDB();

start(async (app: Application) => {

    // await createProductsSample();

    const corsOptions = {
        optionsSuccessStatus: 200,
        origin: "*",
    };

    app.options('/api/products$/', cors(corsOptions));
    app.get("/api/products$/", cors(corsOptions), apiProductsGET);

})