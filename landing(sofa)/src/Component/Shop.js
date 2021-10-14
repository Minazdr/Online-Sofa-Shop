import DataArmChair from "./Data/DataArmChair";
import DataSofa     from "./Data/DataSofa";
import DataPouff    from "./Data/DataPouff";
import DataChair    from "./Data/DataChair";
import DataFootrest from "./Data/DataFootrest";

import styles from "./Css/Shop.module.css";

import heart    from "../images/heart.svg";
import angle    from "../images/angle-small-left.svg";



const Shop = () => {
    const armChairItems = DataArmChair.map((item) =>
    <div className={styles.container}>
        <div className={styles.card} key={item.id}>
            <img src={heart} className={styles.heart} alt="heart" />
            <img src={angle} className={styles.angle} alt="angle" />
            <div className={styles.card_heder}>
                <div>
                    <img src={item.img} alt="sofa" className={styles.card_img}/>
                </div>
                <div className={styles.title}>
                    <h2 className={styles.product_name}>{item.product_name}</h2>
                    <p className={styles.description}>{item.description}</p>
                </div>
                <div className={styles.price_btn}>
                    <p  className={styles.price}><span className={styles.currency}>{item.currency}</span>{item.price}</p>
                    <button className={styles.btn} >Read More</button>
                </div>
            </div>   
        </div>
    </div>);

    const sofaItems = DataSofa.map((item) =>
    <div className={styles.container}>
        <div className={styles.card} key={item.id}>
            <img src={heart} className={styles.heart} alt="heart" />
            <img src={angle} className={styles.angle} alt="angle" />
            <div className={styles.card_heder}>
                <div>
                    <img src={item.img} alt="sofa" className={styles.card_img}/>
                </div>
                <div className={styles.title}>
                    <h2 className={styles.product_name}>{item.product_name}</h2>
                    <p className={styles.description}>{item.description}</p>
                </div>
                <div className={styles.price_btn}>
                    <p  className={styles.price}><span className={styles.currency}>{item.currency}</span>{item.price}</p>
                    <button className={styles.btn} >Read More</button>
                </div>
            </div>      
        </div>
    </div>);

    const chairItems = DataChair.map((item) =>
    <div className={styles.container}>
        <div className={styles.card} key={item.id}>
            <img src={heart} className={styles.heart} alt="heart" />
            <img src={angle} className={styles.angle} alt="angle" />
            <div className={styles.card_heder}>
                <div>
                    <img src={item.img} alt="sofa" className={styles.card_img}/>
                </div>
                <div className={styles.title}>
                    <h2 className={styles.product_name}>{item.product_name}</h2>
                    <p className={styles.description}>{item.description}</p>
                </div>
                <div className={styles.price_btn}>
                    <p  className={styles.price}><span className={styles.currency}>{item.currency}</span>{item.price}</p>
                    <button className={styles.btn} >Read More</button>
                </div>
            </div> 
        </div>
    </div>);


    const pouffItems = DataPouff.map((item) =>
    <div className={styles.container}>
        <div className={styles.card} key={item.id}>
            <img src={heart} className={styles.heart} alt="heart" />
            <img src={angle} className={styles.angle} alt="angle" />
            <div className={styles.card_heder}>
                <div>
                    <img src={item.img} alt="sofa" className={styles.card_img}/>
                </div>
                <div className={styles.title}>
                    <h2 className={styles.product_name}>{item.product_name}</h2>
                    <p className={styles.description}>{item.description}</p>
                </div>
                <div className={styles.price_btn}>
                    <p  className={styles.price}><span className={styles.currency}>{item.currency}</span>{item.price}</p>
                    <button className={styles.btn} >Read More</button>
                </div>
            </div>   
        </div>
    </div>);


    const footrestItems = DataFootrest.map((item) =>
    <div className={styles.container}>
        <div className={styles.card} key={item.id}>
            <img src={heart} className={styles.heart} alt="heart" />
            <img src={angle} className={styles.angle} alt="angle" />
            <div className={styles.card_heder}>
                <div>
                    <img src={item.img} alt="sofa" className={styles.card_img}/>
                </div>
                <div className={styles.title}>
                    <h2 className={styles.product_name}>{item.product_name}</h2>
                    <p className={styles.description}>{item.description}</p>
                </div>
                <div className={styles.price_btn}>
                    <p  className={styles.price}><span className={styles.currency}>{item.currency}</span>{item.price}</p>
                    <button className={styles.btn} >Read More</button>
                </div>
            </div>
        </div>
    </div>);

    return(
        <div className={styles.main}>
            <div className={styles.main_content}>{armChairItems}</div>
            <div className={styles.main_content}>{sofaItems}</div>
            <div className={styles.main_content}>{chairItems}</div>
            <div className={styles.main_content}>{pouffItems}</div>
            <div className={styles.main_content}>{footrestItems}</div>
        </div>
    )
}

export default Shop
