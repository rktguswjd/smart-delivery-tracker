import React from "react";
import DeliveryItem from "../deliveryItem/item/deliveryItem";

const DeliveryList = ({ infomation, onDelete }) => {
    return infomation.map((info) => {
        return (
            <DeliveryItem
                key={info.result.invoiceNo}
                infomation={info}
                onDelete={onDelete}
            />
        );
    });
};

export default DeliveryList;
