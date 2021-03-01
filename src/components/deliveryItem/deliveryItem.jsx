import React from "react";
import { Collapse, Card, Popconfirm } from "antd";
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

    return (
        <div className={styles.container}>
            <StyledCard hoverable>
                <div className={styles.info}>
                    <Popconfirm
                        placement="right"
                        title="배송 내역을 삭제하시겠습니까?"
                        onConfirm={onConfirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <CloseCircleTwoTone />
                    </Popconfirm>
                    <div className={styles.basic_info}>
                        <div className={styles.basic_info_block}></div>
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
