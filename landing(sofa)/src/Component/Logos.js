import React from 'react';
import styles from "./Css/Logos.module.css";
import logo1 from "../images/logo/logo1.jfif";
import logo2 from "../images/logo/logo2.jfif";
import logo3 from "../images/logo/logo3.jfif";
import logo4 from "../images/logo/logo4.jfif";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={logo1} alt="support" className={styles.logo1} />
                <img src={logo2} alt="support" className={styles.logo2} />
                <img src={logo3} alt="support" className={styles.logo3} />
                <img src={logo4} alt="support" className={styles.logo4} />
            </div>
            
        </div>
    );
};

export default Logos;