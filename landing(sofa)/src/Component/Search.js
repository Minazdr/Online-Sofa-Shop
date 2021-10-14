import React, { Component } from 'react';
import styles from "./Css/Search.module.css";

class Search extends Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
    }

    inputHandler = event => {
        this.setState({
            text: event.target.value,
        })

    }

    render() {
        const {text} = this.state;

        return (
            <div className={styles.container}>
                <p>Search What You Want?</p>
                <div>
                    <input type="text" value={text} onChange={this.inputHandler} placeholder="Search..." />
                    <br />
                    <br />
                    <span>{this.state.text}</span>
                </div>
            </div>
        );
    }
}

export default Search;