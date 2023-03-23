import React, { useState, useEffect } from "react";
import Form from "./components/form";
import Header from "./components/header";
import Footer from "./components/footer";
import ButtonInfo from "./components/buttonInfo";
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [
                { name: "USD", rate: 1 },
                { name: "EUR", rate: 0.85 },
                { name: "UAH", rate: 111.09 },
                { name: "GBP", rate: 0.78 }
            ],
            fromCurrency: 'USD',
            toCurrency: 'EUR',
            amount: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }


    async getButtonRate() {
        const api_url_usd = await
            fetch(`https://v6.exchangerate-api.com/v6/63e7dbef3ef404f802db14f5/pair/USD/UAH`);
        const api_url_eur = await
            fetch(`https://v6.exchangerate-api.com/v6/63e7dbef3ef404f802db14f5/pair/EUR/UAH`);

        let data_usd = await api_url_usd.json();
        let data_eur = await api_url_eur.json();

        const result = document.getElementById("USA_EUR");
        result.textContent = data_usd.conversion_rate + " USD / " + data_eur.conversion_rate + " EUR";
    }


    handleChange(event) {
        this.setState({ amount: event.target.value });
    }

    handleSelectChange(event) {
        if (event.target.name === "fromCurrency") {
            this.setState({ fromCurrency: event.target.value });
        } else if (event.target.name === "toCurrency") {
            this.setState({ toCurrency: event.target.value });
        }
    }

    render() {
        const { currencies, fromCurrency, toCurrency, amount } = this.state;
        const fromRate = currencies.find(currency => currency.name === fromCurrency).rate;

        console.log(fromRate);
        const toRate = currencies.find(currency => currency.name === toCurrency).rate;
        console.log(toRate);
        const convertedAmount = (amount * toRate / fromRate).toFixed(2);

        return (
            <div>
                <Header getButtonRate={this.getButtonRate} />


                <div className="d-flex">
                    <form className="border p-5">
                        <div className="d-flex gap-3">
                            <div className=" d-flex gap-3">
                                <select name="fromCurrency" value={fromCurrency} onChange={this.handleSelectChange}>
                                    {currencies.map(currency =>
                                        <option key={currency.name} value={currency.name}>{currency.name}</option>)}
                                </select>
                                <input type="" placeholder="1" value={amount} onChange={this.handleChange} className="border-bottom" />
                            </div>
                        </div>

                        <div className="d-flex gap-5 justify-content-end mb-5 mt-5">
                            {/*<button className="btn m-3 border-50"><img width="30px" height="30px"*/}
                            {/*                                           src="img/cash-back.png"/></button>*/}
                            <div className="d-flex">
                                <p className="align-self-end" id="rates">1 $ = 40.03425 uah</p>
                            </div>
                        </div>

                        <div className=" mb-5">
                            <div className="d-flex gap-3">
                                <select name="toCurrency" value={toCurrency} onChange={this.handleSelectChange}>
                                    {currencies.map(currency => <option key={currency.name} value={currency.name}>{currency.name}</option>)}
                                </select>
                                <input type="text" placeholder="200.0" value={convertedAmount} readOnly className="border-bottom" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning">Exchange rate</button>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

//function App() {
//
//
//
//     const [currencyOptions, setCurrencyOption] = useState([])
//     console.log(currencyOptions);
//
//     useEffect(() => {
//         fetch(BASE_URL)
//             .then(res => res.json())
//             .then(data => {
//                 setCurrencyOption([data.base_code, data.conversion_rate])
//             })
//     }, [])
//
//
//     return (
//     <div>
//         <Header currencyOption={currencyOptions}/>
//         <div className="d-flex">
//             <form className="border p-5">
//                 <Form />
//                 <ButtonInfo />
//                 <Form />
//                 <button type="submit" className="btn btn-warning mt-5">Exchange rate</button>
//             </form>
//         </div>
//         <Footer />
//     </div>
// );
// }*/

export default App;