import React from "react";

const DeliveryItem = ({ infomation }) => {
    return (
        <h1>
            {infomation.companyCode}
            {infomation.waybillNumber}
        </h1>
    );
};

export default DeliveryItem;
