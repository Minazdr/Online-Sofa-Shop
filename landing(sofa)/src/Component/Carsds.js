import React, { Component } from 'react';
import Card from './Card'
import styles from "./Css/Cards.module.css";
import sofa1 from "../images/sofa1.jfif";
import sofa2 from "../images/sofa2.jfif";
import sofa3 from "../images/sofa3.jfif";
import sofa4 from "../images/sofa4.jfif";
  
class Carsds extends Component {
    constructor() {
        super()
        this.state = {
            sofaData: [
                {id: 1, image: sofa1, name:"Roe Luna",   cost:"300 $" },
                {id: 2, image: sofa2, name:"Hiltonia",   cost:"150 $" },
                {id: 3, image: sofa3, name:"Filomena",   cost:"320 $" },
                {id: 4, image: sofa4, name:"Dames Aqua", cost:"100 $" }
            ]
        }
    }

    render() {
        const {sofaData} = this.state

        return (
            <div className={styles.container}>
                {/* <Card image={sofa1} name="Roe Luna"   cost="300 $"  /> 
                <Card image={sofa2} name="Hiltonia"   cost="150 $"  /> 
                <Card image={sofa3} name="Filomena"   cost="320 $"  /> 
                <Card image={sofa4} name="Dames Aqua" cost="100 $"  />  */}
                {sofaData.map(sofa => <Card key={sofa.id} image={sofa.image} name={sofa.name} cost={sofa.cost} />)}
            </div>
        );
    }
}

export default Carsds;