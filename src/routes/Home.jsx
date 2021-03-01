import React from "react";
import styles from "./Home.module.css";
import DeliveryAddForm from "../components/deliveryAddForm/deliveryAddForm";
import DeliveryList from "../components/hooks/deliveryList";
import BackTopBtn from "../components/hooks/backTopBtn";
import Footer from "../components/footer/footer";

const Home = ({ companies, deliveryInfo, onAdd, onDelete }) => {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.p}>모든 배송을 한눈에 확인해 보세요.</p>
            </div>

            <DeliveryAddForm company={companies} onAdd={onAdd} />

            {deliveryInfo.length === 0 ? null : (
                <DeliveryList infomation={deliveryInfo} onDelete={onDelete} />
            )}
            <Footer />
            <BackTopBtn />
        </>
    );
};

export default Home;
