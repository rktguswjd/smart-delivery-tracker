import React from "react";
import DeliveryItem from "./deliveryItem";

const DeliveryList = ({ infomation }) => {
    return infomation.map((info) => {
        return <DeliveryItem key={info.result.invoiceNo} infomation={info} />;
    });
};

export default DeliveryList;
