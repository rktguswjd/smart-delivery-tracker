import React from "react";
import { Collapse, Card, Popconfirm } from "antd";
const { Panel } = Collapse;

const DeliveryItem = ({ infomation }) => {
    return (
        <div className="info">
            <Card hoverable style={{ width: "50%" }}>
                <Popconfirm
                    placement="right"
                    title="배송 내역을 삭제하시겠습니까?"
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="#">Delete</a>
                </Popconfirm>

                <Collapse ghost>
                    <Panel header="상세 보기">
                        <p>{infomation.result.invoiceNo}</p>
                    </Panel>
                </Collapse>
            </Card>
        </div>
    );
};

export default DeliveryItem;
