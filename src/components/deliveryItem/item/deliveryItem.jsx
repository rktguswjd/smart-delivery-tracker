import React from "react";
import { Collapse, Card, Popconfirm, Divider, Space } from "antd";
import { CloseCircleTwoTone } from "@ant-design/icons";
import styles from "./deliveryItem.module.css";
import styled from "styled-components";
import TimeLine from "../timeLine/timeLine";
import LevelState from "../levelState/levelState";

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
    const level = infomation.result.level;
    let getName = infomation.result.itemName;
    if (getName !== "") {
        if (getName > 30) {
            getName = infomation.result.itemName.substring(0, 31);
            getName += "...";
        }
    } else {
        getName = "상품명 정보가 없어요😭";
    }

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.basic_info}>
                    <div className={styles.item_name}>
                        <span className={styles.name}> {getName}</span>
                    </div>
                </div>

                <StyledCard hoverable>
                    <div className={styles.info}>
                        <div className={styles.item_header}>
                            <Space split={<Divider type="vertical" />}>
                                <div className={styles.company}>
                                    <span className={styles.company_title}>
                                        {" "}
                                        {"company"}
                                    </span>
                                    <span className={styles.company_name}>
                                        {" "}
                                        {infomation.companyName}
                                    </span>
                                </div>

                                <div className={styles.invoice}>
                                    <span className={styles.invoice_title}>
                                        {" "}
                                        {"invoiceNo"}
                                    </span>
                                    <span className={styles.invoice_number}>
                                        {" "}
                                        {infomation.result.invoiceNo}
                                    </span>
                                </div>
                            </Space>
                            <div className={styles.delete}>
                                <Popconfirm
                                    placement="right"
                                    title="배송 내역을 삭제하시겠습니까?"
                                    onConfirm={onConfirm}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <CloseCircleTwoTone />
                                </Popconfirm>
                            </div>
                        </div>

                        <div className={styles.space_align_container}>
                            <div className={styles.space_align_block}>
                                <LevelState level={infomation.result.level} />
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
            </div>

            <div className={styles.conversation}>
                <div className={styles.messages_received}>
                    <div
                        className={
                            level <= 5
                                ? styles.message_blue
                                : styles.message_gray
                        }
                    >
                        {(function () {
                            if (level === 1 || level === 2) return "상품인수";
                            if (level === 3) return "상품이동중";
                            if (level === 4) return "배송지도착";
                            if (level === 5) return "배송출발";
                            if (level === 6) return "배송완료";
                        })()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryItem;
