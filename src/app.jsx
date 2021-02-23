import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import DeliveryAddForm from "./components/deliveryAddForm";
import DeliveryList from "./components/deliveryList";

function App({ smartDelivery }) {
    // const INFO = "info";
    const [companies, setCompanies] = useState([]);
    const [deliveryInfo, setDeliveryInfo] = useState(
        () => JSON.parse(window.localStorage.getItem("info")) || []
    );

    const saveStorage = () => {
        window.localStorage.setItem("info", JSON.stringify(deliveryInfo));
        let log = window.localStorage.getItem("info");
        console.log(log);
    };

    const onAdd = (values) => {
        const companyCode = values.택배사;
        const waybillNumber = values.운송장번호;
        setDeliveryInfo((info) => [...info, { companyCode, waybillNumber }]);
    };

    useEffect(() => {
        smartDelivery.company().then((result) => setCompanies(result));
        saveStorage();

        // smartDelivery
        //     .tracking()
        //     .then((result) => console.log(result))
        //     .catch((error) => console.log("error", error));
    }, []);

    return (
        <div className={styles.app}>
            <title>DeliveryTracker</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.3/antd.css"
            />
            <header />
            <div className={styles.add}>
                <DeliveryAddForm company={companies} onAdd={onAdd} />
            </div>
            {}
            {deliveryInfo.length === 0 ? null : (
                <DeliveryList infomation={deliveryInfo} />
            )}
            <footer />
        </div>
    );
}

export default App;
