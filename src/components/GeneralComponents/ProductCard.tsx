import React from "react";
import styles from "@/styles/GeneralComponents/ProductCard.module.scss";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  isSale?: boolean;
  isSoldout?: boolean;
  salePercentage?: number;
}
const ProductCard = ({
  title,
  price,
  imageUrl,
  isSale,
  isSoldout,
  salePercentage,
}: ProductCardProps) => {
  const priceAfterSale = salePercentage
    ? price - price * (salePercentage / 100)
    : price;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.image}>
        <Image src={imageUrl} alt={title} fill />
        {isSale && <div className={styles.saleTag}>SALE</div>}
        {salePercentage && (
          <div className={styles.salePercentage}>-{salePercentage}%</div>
        )}
        {isSoldout && <div className={styles.soldoutTag}>SOLDOUT</div>}
      </div>
      <h3>{title}</h3>
      {!salePercentage ? (
        <p>${price}</p>
      ) : (
        <div className={styles.priceContainer}>
          <p className={styles.salePrice}>${priceAfterSale.toFixed(2)}</p>
          <p className={styles.normalPrice}>${price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
