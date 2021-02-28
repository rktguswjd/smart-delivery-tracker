import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import DeliveryAddForm from "./components/deliveryAddForm";
import DeliveryList from "./components/deliveryList";
import { message } from "antd";

function App({ smartDelivery }) {
    // const INFO = "info";
    const [companies, setCompanies] = useState([]);
    const [deliveryInfo, setDeliveryInfo] = useState(
        () => JSON.parse(window.localStorage.getItem("info")) || []
    );

    const saveStorage = () => {
        window.localStorage.setItem("info", JSON.stringify(deliveryInfo));
    };

    const onAdd = (values) => {
        const companyCode = values.택배사;
        const waybillNumber = values.운송장번호;

        const exists = deliveryInfo.find(
            (p) => p.result.invoiceNo === waybillNumber
        );
        if (exists) {
            message.warning("이미 등록된 운송장 번호가 있습니다.");
            return;
        }

        smartDelivery.tracking(companyCode, waybillNumber).then((result) => {
            if (!result.invoiceNo) {
                return message.warning(`${result.msg}`);
            }
            setDeliveryInfo((info) => [...info, { companyCode, result }]);
        });
    };

    const onDelete = (infomation) => {
        setDeliveryInfo((info) =>
            info.filter(
                (item) => item.result.invoiceNo !== infomation.result.invoiceNo
            )
        );
    };

    useEffect(() => {
        smartDelivery.company().then((result) => setCompanies(result));
        saveStorage();
    }, [deliveryInfo]);
    console.log(deliveryInfo);

    return (
        <div className={styles.app}>
            <title>DeliveryTracker</title>
            <header className={styles.header}>
                <p className={styles.title}>smart :D</p>
            </header>

            <div className={styles.container}>
                <p className={styles.p}>모든 배송을 한눈에 확인해 보세요.</p>
            </div>

            <DeliveryAddForm company={companies} onAdd={onAdd} />

            {deliveryInfo.length === 0 ? null : (
                <DeliveryList infomation={deliveryInfo} onDelete={onDelete} />
            )}

            <footer />
        </div>
    );
}

export default App;
