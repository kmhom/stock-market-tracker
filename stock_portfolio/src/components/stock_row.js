import React, { Component } from 'react';
import alpaca_info from '../AlpacaAPI/api_key.js';
import axios from 'axios';
import { Row } from 'react-bootstrap';

class StockRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    async fetchstockData(url) {
        console.log(url);
        return axios.get(url)
        .then((response) => {
            console.log(response);
        })
        .then((data) => {
            this.setState ({
                data: {
                    price: data.getstockSymbol()[data.getstockSymbol().length()-1].c
                }
            })
        })
        .catch((error) => {
            console.log(error);
        });
    };

    getstockSymbol() {
        return `${this.props.ticker}`;
    }

    componentDidMount(){
        const client = alpaca_info.data_ws;
        this.fetchstockData("https://data.alpaca.markets/v1/bars/1D?symbols=" + this.getstockSymbol());
    }

    render() {
        return (
            <tr>
                <td> {this.props.ticker} </td>
                <td> {this.state.data.price} </td>
                <td> {this.state.data.date} </td>
                <td> {this.state.data.time} </td>
            </tr>
        )
    }
}

export default StockRow