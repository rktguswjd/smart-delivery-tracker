import React from "react";
import DeliveryItem from "./deliveryItem";

const DeliveryList = ({ infomation }) => {
    return infomation.map((info) => {
        return <DeliveryItem key={info.waybillNumber} infomation={info} />;
    });
};

export default DeliveryList;
