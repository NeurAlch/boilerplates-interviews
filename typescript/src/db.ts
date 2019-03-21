import * as mongoose from "mongoose";

let db: mongoose.Connection;

const setupDB = async () => {

    try {

        try {

            await mongoose.connect("mongodb://localhost:27017/interviews?retryWrites=true", {
                poolSize: 10,
                autoIndex: true,
                autoReconnect: true,
                useNewUrlParser: false,
            });

        } catch (err) {

            console.error("Could not connect to mongodb")

        }

        db = mongoose.connection;

    } catch (err) {

        console.error("Could not start Mongo connection");

        process.exit(1);

    }

};

export {
    db,
    setupDB,
}