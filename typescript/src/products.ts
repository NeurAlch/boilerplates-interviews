import { Document } from "mongoose";
import { Model, model, Schema } from "mongoose";

export interface IProduct {
    name: string;
    description: string;
}

export interface IProductModel extends Document, IProduct {}

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
});

const Product: Model<IProductModel> = model("Product", schema);

const getProducts = async () => {

    return Product.find().exec();

};

const createProduct = async (data: IProduct) => {

    const item = new Product(data);

    await item.save();

};

export {
    getProducts,
    createProduct,
}