import React, { useState, useEffect } from "react";
import Form from "./components/form";
import Header from "./components/header";
import Footer from "./components/footer";
import ButtonInfo from "./components/buttonInfo";
import axios from 'axios';

const CURRENCY_CODE = {
    USD: 'USD',
    EUR: 'EUR',
    UAH: 'UAH',
    GBP: 'GBP',
}
/*const renderContent = (response) => {
    const { data } = response;
    let content = document.getElementById('data').innerHTML;
    console.log(data);
    Object
        .keys(data.conversion_rate)
        .map((currencyCode) => {
        content += `${data.base_code}`
/!*
        ${data.conversion_rate[currencyCode]}`;
*!/
    });
    document.getElementById('data').innerHTML = content;
};*/

/*
const BASE_URL = `https://v6.exchangerate-api.com/v6/63e7dbef3ef404f802db14f5/pair/${CURRENCY_CODE.USD}/${CURRENCY_CODE.UAH}`;
*/



/*axios
    .get(BASE_URL)
    .then(renderContent);
    */

class App extends React.Component {


    getUSD = async () => {
        const api_url = await
            fetch(`https://v6.exchangerate-api.com/v6/63e7dbef3ef404f802db14f5/pair/${CURRENCY_CODE.USD}/${CURRENCY_CODE.UAH}`);
        const data = await api_url.json();
        console.log(data.conversion_rate);
        // return this.data.conversion_rate;
    }

    render() {
        return (
            <div>
                <Header getUSD={this.getUSD} price = "{this.getUSD}"/>
                <div className="d-flex">
                    <form className="border p-5">
                        <Form />
                        <ButtonInfo />
                        <Form />
                        <button type="submit" className="btn btn-warning mt-5">Exchange rate</button>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

/*function App() {



    const [currencyOptions, setCurrencyOption] = useState([])
    console.log(currencyOptions);

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                setCurrencyOption([data.base_code, data.conversion_rate])
            })
    }, [])


    return (
    <div>
        <Header currencyOption={currencyOptions}/>
        <div className="d-flex">
            <form className="border p-5">
                <Form />
                <ButtonInfo />
                <Form />
                <button type="submit" className="btn btn-warning mt-5">Exchange rate</button>
            </form>
        </div>
        <Footer />
    </div>
);
}*/

export default App;