import React, { useEffect, useState } from "react";
import "./app.css";
import DeliveryAddForm from "./components/deliveryAddForm";

function App({ smartDelivery }) {
    const [companies, setCompanies] = useState([]);
    const [deliveryInfo, setDeliveryInfo] = useState([]);
    const onAdd = (values) => {
        const companyCode = values.택배사;
        const waybillumber = values.운송장번호;
        setDeliveryInfo((info) => [...info, { companyCode, waybillumber }]);
    };

    useEffect(() => {
        smartDelivery.company().then((result) => setCompanies(result));

        // smartDelivery
        //     .tracking()
        //     .then((result) => console.log(result))
        //     .catch((error) => console.log("error", error));
    }, []);
    console.log(deliveryInfo);

    return (
        <div className="app">
            <title>DeliveryTracker</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.3/antd.css"
            />
            <div className="add">
                <DeliveryAddForm company={companies} onAdd={onAdd} />
            </div>
        </div>
    );
}

export default App;
