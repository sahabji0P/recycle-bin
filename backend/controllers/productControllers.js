import Product from "../models/product";
import APIFilteres from "../utils/APIFilters";

export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        product,
    });
};

export const getProducts = async (req, res, next) => {

    const resPerPage = 3;
    const productCount = await Product.countDocuments();


    const apiFilters = new APIFilteres(Product.find(), req.query)
    .search()
    .filter();

    let products = await apiFilters.query;
    const filteredProductsCount = products.length;

    apiFilters.pagination(resPerPage);

    products = await apiFilters.query.clone();

        

    res.status(200).json({
        productCount,
        resPerPage,
        filteredProductsCount,
        products,
    });

};

export const getProduct = async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    if (!product) {
        res.status(404).json({
            error: "Product not found.",
        }); 
    }
    res.status(200).json({
        product,
    });
};