import React from "react";
import { Collapse, Card, Popconfirm } from "antd";
import { CloseCircleTwoTone } from "@ant-design/icons";
import styles from "./deliveryItem.module.css";
import styled from "styled-components";
import TimeLine from "../hooks/timeLine";
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
                        <CloseCircleTwoTone />
                    </Popconfirm>
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
                    <div className={styles.message}>배송출발</div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryItem;
