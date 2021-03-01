import React, { useEffect, useState } from "react";
import { message } from "antd";
import styles from "./app.module.css";
import DeliveryAddForm from "./components/deliveryAddForm/deliveryAddForm";
import DeliveryList from "./components/hooks/deliveryList";
import BackTopBtn from "./components/hooks/backTopBtn";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App({ smartDelivery }) {
    const [companies, setCompanies] = useState([]);
    const [deliveryInfo, setDeliveryInfo] = useState(
        () => JSON.parse(window.localStorage.getItem("info")) || []
    );

    const saveStorage = () => {
        window.localStorage.setItem("info", JSON.stringify(deliveryInfo));
    };

    const onAdd = (values) => {
        const companyName = values.택배사;
        const companyCode = values.택배사코드;
        const waybillNumber = values.운송장번호;

        const exists = deliveryInfo.find(
            (p) => p.result.invoiceNo === waybillNumber
        );
        if (exists) {
            message.warning("이미 등록된 운송장 번호가 있습니다.");
            return;
        }

        smartDelivery.tracking(companyCode, waybillNumber).then((result) => {
            if (result.status === false || result.result === "N") {
                return message.warning(
                    "유효하지 않은 운송장번호 이거나 택배사 코드 입니다."
                );
            }
            setDeliveryInfo((info) => [
                ...info,
                { companyCode, companyName, result },
            ]);
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
            <Header />

            <div className={styles.container}>
                <p className={styles.p}>모든 배송을 한눈에 확인해 보세요.</p>
            </div>

            <DeliveryAddForm company={companies} onAdd={onAdd} />

            {deliveryInfo.length === 0 ? null : (
                <DeliveryList infomation={deliveryInfo} onDelete={onDelete} />
            )}
            <Footer />
            <BackTopBtn />
        </div>
    );
}

export default App;
