import React from "react";
import Slider from "../../Components/Slider/Slider";
import styles from "./home.module.scss";
import Category from "../../Components/Category/Category";
import ProductList from "../../Components/ProductList/ProductList";
const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <Slider />
      <Category />
      <ProductList />
    </div>
  );
};

export default Home;
