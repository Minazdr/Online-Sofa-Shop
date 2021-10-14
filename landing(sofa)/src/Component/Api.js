import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import styles from "./Css/api.module.css";
import spiner from "../images/1494.gif"

export default class  Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((response) => this.setState({
            products: response.data,
        }))
    }

    render() {

        const {products} = this.state
        return (
            <div className={styles.container}>
                {
                    products.length ?
                    products.map(product => <Card key={product.id} image={product.image} name={product.title} cost={`${product.price}`} $ />) :
                    <img src={spiner} alt="spiner" className={styles.spiner}></img>
                    // <h1>Loading</h1>
                }
            </div>
        )
    }
}
