import nc from 'next-connect';
import {getProducts, newProduct} from "@/backend/controllers/productControllers";
import dbConnect from "@/backend/config/dbConnect";


const handler = nc();

dbConnect();

handler.get(getProducts);
handler.post(newProduct);

export default handler;