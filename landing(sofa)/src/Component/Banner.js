import React from 'react';
import styles from "./Css/Banner.module.css";
import banner from "../images/banner/banner.jpg";
import ChairWhite from "../images/banner/ChairWhite.jfif";
import chairBlue from "../images/banner/chairBlue.jfif";
import ChairGreen from "../images/banner/ChairGreen.jfif";
import comment from "../images/banner/comment-alt.svg";
import comment2 from "../images/banner/comment.svg";


const Banner = () => {
    return (
        <div className={styles.container}>
            
            <img className={styles.banner} src={banner} alt="banner" />
            <div className={styles.textContainer}>
                
                
                <h1>SOFA RELAXE</h1>
                <p>From home to factory with <span>OFFDECORE</span></p>
                <form id="demo-2">
	                        <input type="search" placeholder="Search" />
                </form>
            </div>
            <div className={styles.chair}>
                <ul>
                    <img src={comment2} alt="comment2" className={styles.comment2}/>
                    <li><img src={ChairGreen} alt="chair" className={styles.ChairGreen}/></li>
                    <li><img src={ChairWhite} alt="chair" className={styles.ChairWhite}/></li>
                    <li><img src={chairBlue} alt="chair" className={styles.chairBlue}/></li>
                </ul>
            </div>
            <img src={comment} alt="comment" className={styles.comment}/>
        </div>
    );
};

export default Banner;