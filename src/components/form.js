import React from "react";

class Form extends React.Component {

    render() {
        return (

            <div className="d-flex gap-3">
                <div className=" d-flex gap-3">
                    <select name="fromCurrency" value={this.fromCurrency} onChange={this.handleSelectChange}>
                        {/*<option value="USD">USD &#36;</option>*/}
                        {/*<option value="EUR">EUR &#8364;</option>*/}
                        {/*<option value="GBP">GBP &#163;</option>*/}
                        {/*<option value="UAH">UAH &#8372;</option>*/}
                        {this.currencies.map(currency =>
                            <option key={currency.name} value={currency.name}>{currency.name}</option>)}
                    </select>
                    <input type="number" value={this.amount} onChange={this.handleChange} className="border-bottom" />
                </div>
            </div>


               /* </div>*/


                /*<div className=" mb-5">
                    <div className="d-flex gap-3">
                        <select name="currency_2" id="currency-select">
                            <option value="usa">USD &#36;</option>
                            <option value="eur">EUR &#8364;</option>
                            <option value="dbp">GBP &#163;</option>
                            <option value="uah">UAH &#8372;</option>
                        </select>
                        <input type="money" placeholder="200.00" name="money_2" className="border-bottom" />
                    </div>
                </div>*/

    );
    }
}

export default Form;
