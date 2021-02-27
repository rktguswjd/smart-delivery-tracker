import React from "react";
import { Collapse, Card, Popconfirm, Space, Divider } from "antd";
import styles from "./deliveryItem.module.css";
import styled from "styled-components";
import TimeLine from "./timeLine";
const { Panel } = Collapse;
const StyledCard = styled(Card)`
    justify-content: center;
    align-items: center;
    cusor: none;
`;

const DeliveryItem = ({ infomation, onDelete }) => {
    const onConfirm = (e) => {
        onDelete(infomation);
    };

    const onCancel = (e) => {};

    return (
        <div className={styles.container}>
            <StyledCard hoverable>
                <div className={styles.info}>
                    <Popconfirm
                        placement="right"
                        title="배송 내역을 삭제하시겠습니까?"
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href="#">삭제</a>
                    </Popconfirm>
                    <div className={styles.space_align_container}>
                        <div className={styles.space_align_block}>
                            <Space split={<Divider type="vertical" />}>
                                <span className={styles.step_block}>
                                    <img src="https://img.icons8.com/fluent/48/000000/box.png" />
                                    <h5>상품인수</h5>
                                </span>
                                <span className={styles.step_block}>
                                    <img src="https://img.icons8.com/fluent/48/000000/truck.png" />
                                    <h5>상품이동중</h5>
                                </span>
                                <span className={styles.step_block}>
                                    <img src="https://img.icons8.com/fluent/48/000000/garage-closed.png" />
                                    <h5>배송지도착</h5>
                                </span>
                                <span className={styles.step_block}>
                                    <img src="https://img.icons8.com/fluent/48/000000/in-transit.png" />
                                    <h5>배송출발</h5>
                                </span>
                                <span className={styles.step_block}>
                                    <img src="https://img.icons8.com/fluent/48/000000/delivered-box.png" />
                                    <h5>배송완료</h5>
                                </span>
                            </Space>
                        </div>
                    </div>

                    <Collapse ghost>
                        <Panel header="상세 보기">
                            <TimeLine
                                timeLine={infomation.result.trackingDetails}
                            />
                        </Panel>
                    </Collapse>
                </div>
            </StyledCard>
            <div className={styles.arrow_box}>
                <h1 className={styles.state}>배송출발</h1>
            </div>
        </div>
    );
};

export default DeliveryItem;
