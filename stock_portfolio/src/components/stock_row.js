import React, { Component } from 'react';
import alpaca_info from '../AlpacaAPI/api_key.js';
import axios from require('axios');

class StockRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }

        function fetchstockData(url) {
            return axios.get(url)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        };
    }


    componentDidMount(){
        const client = alpaca_info.data_ws;


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