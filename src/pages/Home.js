import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Banner from "../components/Banner";

const Home = () => {
  // Get products from product context
  const { products } = useContext(ProductContext);

  console.log(products);

  // Filter products by category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "jewelery"
    );
  });

  return (
    <div>
      <Banner />
      <section className="py-5">
        <div className="container mt-4">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Our Products
          </h1>
          <div className="row">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
