import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_AllProducts } from "../graphql/productQuery";
import { ProductType } from "../types";
import Product from "./product";

const Main: React.FC = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const { data } = useQuery(GET_AllProducts);

  useEffect(() => {
    if (data?.allProducts) {
      setAllProductsData(data.allProducts);
    }
  }, [data]);

  return (
    <div>
      {allProductsData.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Main;
