"use client";
import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2";
import styles from "@/styles/GeneralComponents/Header.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Fashion District</h1>
        <nav className={styles.navbar}>
          <Link href={"/"} className={styles.link}>
            Home
          </Link>
          <Link href={"/"} className={styles.link}>
            Products
          </Link>
          <Link href={"/"} className={styles.link}>
            Blog
          </Link>
          <Link href={"/"} className={styles.link}>
            Contact
          </Link>
        </nav>
        <div className={styles.buttons}>
          <button className={styles.heartBtn}>
            <CiHeart size={20} />
          </button>
          <button className={styles.cartBtn}>
            <IoCart size={20} />
          </button>
          <button className={styles.loginBtn}>Login</button>
          <button
            className={styles.burgerBtn}
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <GiHamburgerMenu size={32} color="#06264b" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            className={`${styles.sidebar}`}
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "0" }}
            exit={{ translateX: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className={styles.topSection}>
              <div className={styles.heading}>
                <h1 className={styles.logo}>Fashion District</h1>
                <button
                  className={styles.xMarkBtn}
                  onClick={() => setShowSidebar(false)}
                >
                  <HiMiniXMark size={32} color="#06264b" />
                </button>
              </div>
              <nav className={styles.navbar}>
                <Link href={"/"} className={styles.link}>
                  Home
                </Link>
                <Link href={"/"} className={styles.link}>
                  Products
                </Link>
                <Link href={"/"} className={styles.link}>
                  Blog
                </Link>
                <Link href={"/"} className={styles.link}>
                  Contact
                </Link>
              </nav>
            </div>
            <div className={styles.bottomSection}>
              <button className={styles.loginBtn}>Login</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
