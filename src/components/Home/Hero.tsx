"use client";
import React, { useState } from "react";
import styles from "@/styles/Home/Hero.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={styles.imageContainer}>
            <Image
              src={"/images/hero_img_one.webp"}
              alt="a man in blue suit"
              fill
              loading="eager"
            />
            <div className={styles.leftText}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "linear" }}
              >
                FASHION FEST
              </motion.p>
              <motion.h2
                initial={{ position: "relative", y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "linear" }}
              >
                Blazer Collections,
                <br />
                Featured Shop
              </motion.h2>
              <motion.button
                initial={{ position: "relative", y: 20, opacity: 0,backgroundColor:"#06264b" }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{backgroundColor:"transparent",color:"#06264b"}}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "linear", delay: 0.1 }}
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainer}>
            <Image
              src={"/images/hero_img_two.webp"}
              alt="a man in grey suit"
              fill
              loading="eager"
            />
            <div className={styles.rightText}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "linear" }}
              >
                BLAZER SHOP
              </motion.p>
              <motion.h2
                initial={{ position: "relative", y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "linear" }}
              >
                Fantastic Fashion,
                <br />
                Super Collections
              </motion.h2>
              <motion.button
                initial={{ position: "relative", y: 20, opacity: 0,backgroundColor:"#06264b" }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{backgroundColor:"transparent",color:"#06264b"}}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "linear", delay: 0.1 }}
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
