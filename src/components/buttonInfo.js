import React from "react";

class ButtonInfo extends React.Component {
    render() {
        return (
            <div className="d-flex gap-5 align-items-center">
                <button className="btn m-3 border-50"><img width="30px" height="30px" src="../img/cash-back.png" alt="btn" />
                </button>
                <div className="d-flex align-items-center">
                    <p id="rates">1 $ = 40.03425 uah</p>
                </div>
            </div>
        )
    }
}

export default ButtonInfo;