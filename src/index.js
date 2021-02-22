import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import SmartDelivery from "./service/smart_delivery";

const smartDelivery = new SmartDelivery(process.env.REACT_APP_DELIVERY_API_KEY);

ReactDOM.render(
    <React.StrictMode>
        <App smartDelivery={smartDelivery} />
    </React.StrictMode>,
    document.getElementById("root")
);
