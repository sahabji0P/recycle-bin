// import ListProducts from "../components/ListProducts";
import axios from "axios";


const getProducts = async () => {
    const {data} = await axios.get(`${process.env.API_URL}/api/products`);
    return data
}

export default async function Home() {

    const productsData = await getProducts();

  return (
    // <ListProducts data={productsData} />
    <div>Hello World</div>
   
  );
}
