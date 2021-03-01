import React, { useEffect, useState, useCallback } from "react";
import { message } from "antd";
import Home from "./routes/Home";
import styles from "./app.module.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function App({ smartDelivery }) {
    const [companies, setCompanies] = useState([]);
    const [deliveryInfo, setDeliveryInfo] = useState(
        () => JSON.parse(window.localStorage.getItem("info")) || []
    );

    const saveStorage = useCallback(() => {
        window.localStorage.setItem("info", JSON.stringify(deliveryInfo));
    }, [deliveryInfo]);

    const onAdd = useCallback(
        (values) => {
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

            smartDelivery
                .tracking(companyCode, waybillNumber)
                .then((result) => {
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
        },
        [deliveryInfo, smartDelivery]
    );

    const onDelete = useCallback((infomation) => {
        setDeliveryInfo((info) =>
            info.filter(
                (item) => item.result.invoiceNo !== infomation.result.invoiceNo
            )
        );
    }, []);

    useEffect(() => {
        smartDelivery.company().then((result) => setCompanies(result));
        saveStorage();
    }, [deliveryInfo, saveStorage, smartDelivery]);

    return (
        <Router>
            <div className={styles.app}>
                <title>DeliveryTracker</title>

                <header className={styles.header}>
                    <Link to="/">
                        <div className={styles.title}>smart :D</div>
                    </Link>
                </header>

                <main>
                    <Route exact path="/">
                        <Home
                            companies={companies}
                            deliveryInfo={deliveryInfo}
                            onAdd={onAdd}
                            onDelete={onDelete}
                        />
                    </Route>
                </main>
            </div>
        </Router>
    );
}

export default App;
