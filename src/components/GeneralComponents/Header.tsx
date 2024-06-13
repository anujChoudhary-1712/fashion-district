"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2";
import styles from "@/styles/GeneralComponents/Header.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Fashion District</h1>
        <nav className={styles.navbar}>
          <Link href={"/"} className={styles.link}>
            Home
          </Link>
          <div
            className={styles.shoplink}
            onClick={() => setShowShopDropdown(!showShopDropdown)}
            onMouseEnter={() => setShowShopDropdown(true)}
            onMouseLeave={() => setShowShopDropdown(false)}
          >
            <Link href={"/"} className={styles.link}>
              Shop <FaChevronDown size={12} />
            </Link>
            {showShopDropdown && (
              <motion.div
                className={styles.shopDropdown}
                initial={{ top: 60, position: "absolute", opacity: 0.2 }}
                whileInView={{ top: 26, opacity: 1 }}
                transition={{ duration: 0.5, ease: "linear" }}
                viewport={{ once: true }}
              >
                <Link href={"/"} className={styles.dropdownLink}>
                  Men Fashion
                </Link>
                <Link href={"/"} className={styles.dropdownLink}>
                  Women Fashion
                </Link>
                <Link href={"/"} className={styles.dropdownLink}>
                  Kids Fashion
                </Link>
              </motion.div>
            )}
          </div>
          <Link href={"/"} className={styles.link}>
            Product
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
                <div
                  className={styles.shoplink}
                  onClick={() => setShowShopDropdown(!showShopDropdown)}
                >
                  <Link href={"/"} className={styles.link}>
                    Shop <FaChevronDown size={12} />
                  </Link>
                  {showShopDropdown && (
                    <div className={styles.shopDropdown}>
                      <Link href={"/"} className={styles.dropdownLink}>
                        Men Fashion
                      </Link>
                      <Link href={"/"} className={styles.dropdownLink}>
                        Women Fashion
                      </Link>
                      <Link href={"/"} className={styles.dropdownLink}>
                        Kids Fashion
                      </Link>
                    </div>
                  )}
                </div>
                <Link href={"/"} className={styles.link}>
                  Product
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
