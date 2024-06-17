"use client"
import React from "react";
import styles from "@/styles/Home/TopCollections.module.scss";
import ProductCard from "../GeneralComponents/ProductCard";
import { motion } from "framer-motion";

const TopCollections = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Top Collections</h2>
      <div className={styles.productsContainer}>
        <ProductCard
          title="Denim Long shirt"
          price={80.0}
          imageUrl="/images/product_card_img.webp"
        />
        <ProductCard
          title="Denim Long shirt"
          price={80.0}
          imageUrl="/images/product_card_img.webp"
          isSale={true}
          salePercentage={18}
        />
        <ProductCard
          title="Denim Long shirt"
          price={80.0}
          imageUrl="/images/product_card_img.webp"
        />
        <ProductCard
          title="Denim Long shirt"
          price={80.0}
          imageUrl="/images/product_card_img.webp"
          isSoldout={true}
        />
        <ProductCard
          title="Denim Long shirt"
          price={80.0}
          imageUrl="/images/product_card_img.webp"
        />
        <ProductCard
          title="Denim Long shirt"
          price={80.0}
          imageUrl="/images/product_card_img.webp"
          isSale={true}
          salePercentage={20}
        />
        <ProductCard
          title="Denim Long shirt"
          price={80.0}
          imageUrl="/images/product_card_img.webp"
          isSale={true}
          salePercentage={15}
        />
        <ProductCard
          title="Denim Long shirt"
          price={80.0}
          imageUrl="/images/product_card_img.webp"
        />
      </div>
      <motion.button
        initial={{
          backgroundColor: "#06264b",
        }}
        whileHover={{ backgroundColor: "transparent", color: "#06264b" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "linear", delay: 0.1 }}
        className={styles.productBtn}
      >
        More Products
      </motion.button>
    </section>
  );
};

export default TopCollections;
