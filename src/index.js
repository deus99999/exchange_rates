import React from 'react';
import App from './App';
import './style.css'
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/*function ButtonUahUsd(props) {
    return(<button type="button" id="UAH_buy_cell" className="btn btn-warning">
        &#8372;
        {" " + props.price_cell + " "}
         /
        {" " + props.price_buy}
    </button>)
}*/
/*
root.render(<ButtonUahUsd price_cell="36.5686" price_buy="40"/>);
*/


/*function Clock(props) {
    return (
        <div>
            <h2>It's {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
function tick() {
    root.render(<Clock date={new Date()} />);
}*/

/*
tick setInterval(tick, 1000);
*/

/*class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick,
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}*/

/*root.render(<Clock />);*/


