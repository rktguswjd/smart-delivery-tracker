import React from "react";
import { Collapse, Card, Popconfirm, Space, Divider } from "antd";
import styles from "./deliveryItem.module.css";
const { Panel } = Collapse;

const DeliveryItem = ({ infomation }) => {
    return (
        <div className={styles.info}>
            <Popconfirm
                placement="right"
                title="배송 내역을 삭제하시겠습니까?"
                okText="Yes"
                cancelText="No"
            >
                <a href="#">삭제</a>
            </Popconfirm>
            <div className={styles.space_align_container}>
                <div className={styles.space_align_block}>
                    <Space split={<Divider type="vertical" />}>
                        <span className={styles.step_block}>
                            <img src="https://img.icons8.com/fluent/50/000000/box.png" />
                            <h5>상품인수</h5>
                        </span>
                        <span className={styles.step_block}>
                            <img src="https://img.icons8.com/fluent/50/000000/truck.png" />
                            <h5>상품이동중</h5>
                        </span>
                        <span className={styles.step_block}>
                            <img src="https://img.icons8.com/fluent/50/000000/garage-closed.png" />
                            <h5>배송지도착</h5>
                        </span>
                        <span className={styles.step_block}>
                            <img src="https://img.icons8.com/fluent/50/000000/in-transit.png" />
                            <h5>배송출발</h5>
                        </span>
                        <span className={styles.step_block}>
                            <img src="https://img.icons8.com/fluent/50/000000/delivered-box.png" />
                            <h5>배송완료</h5>
                        </span>
                    </Space>
                </div>
            </div>

            <Collapse ghost>
                <Panel header="상세 보기">
                    <p>{infomation.result.invoiceNo}</p>
                </Panel>
            </Collapse>
        </div>
    );
};

export default DeliveryItem;
