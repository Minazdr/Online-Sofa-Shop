import React from 'react';
import styles from "./Css/Navbar.module.css";
import { Link } from "react-router-dom";
import shopping from "../images/shopping-cart-add.svg";
import comment from "../images/comment-heart.svg";
import user from "../images/user.svg";
import home from "../images/home.svg";



const Navbar = () => {
    return (
        <header className={styles.header}>
            
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li className={styles.home}><Link to="homepPage" ><img className={styles.home} src={home} alt="search" /></Link></li>
                    <li className={styles.products}><Link to="products">Products</Link></li>
                    <li className={styles.Cantact}><Link to="shop">Cantact</Link></li>
                    <li className={styles.api}><Link to="api">API</Link></li>
                </ul>
            </div>

            <div className={styles.logo}>
                <ul>
                   <li><Link to="products"><img className={styles.comment} src={comment} alt="search" /></Link></li>
                   <li><Link to="products"><img className={styles.shopping} src={shopping} alt="search" /></Link></li>
                   <li><Link to="products"><img className={styles.user} src={user} alt="menu" /></Link></li>
                </ul>
               
            </div>
        </header>
    );
};

export default Navbar;