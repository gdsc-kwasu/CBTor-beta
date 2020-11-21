import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>Hello react!</h1>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
