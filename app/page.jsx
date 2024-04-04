import Image from "next/image";
import React from "react";
import ListProducts from "@/components//products/ListProducts";
import axios from "axios";


const getProducts = async () => {
    const {data} = await axios.get(`${process.env.API_URL}/api/products`);
    return data
}

const Home = async() => {

    const productsData = await getProducts();

  return (
    <ListProducts data={productsData} />

   
  );
}

export default Home;

