import React from "react";
import { Space, Divider, Tag } from "antd";
import styles from "./levelState.module.css";

const LevelState = ({ level }) => {
    const incomplete = "green";
    const complete = "default";
    const progress = "blue";

    return (
        <Space split={<Divider type="vertical" />}>
            <span className={styles.step_block}>
                <img
                    src="https://img.icons8.com/fluent/44/000000/box.png"
                    alt="상품인수"
                    style={{ margin: "5px" }}
                />
                <Tag
                    color={(function () {
                        if (level === 1 || level === 2) {
                            return progress;
                        } else if (level >= 3) {
                            return complete;
                        } else return incomplete;
                    })()}
                >
                    상품인수
                </Tag>
            </span>

            <span className={styles.step_block}>
                <img
                    src="https://img.icons8.com/fluent/44/000000/truck.png"
                    alt="상품이동중"
                    style={{ margin: "5px" }}
                />
                <Tag
                    color={(function () {
                        if (level === 3) {
                            return progress;
                        } else if (level >= 4) {
                            return complete;
                        } else return incomplete;
                    })()}
                >
                    상품이동중
                </Tag>
            </span>

            <span className={styles.step_block}>
                <img
                    src="https://img.icons8.com/fluent/44/000000/garage-closed.png"
                    alt="배송지도착"
                    style={{ margin: "5px" }}
                />
                <Tag
                    color={(function () {
                        if (level === 4) {
                            return progress;
                        } else if (level >= 5) {
                            return complete;
                        } else return incomplete;
                    })()}
                >
                    배송지도착
                </Tag>
            </span>
            <span className={styles.step_block}>
                <img
                    src="https://img.icons8.com/fluent/44/000000/in-transit.png"
                    alt="배송출발"
                    style={{ margin: "5px" }}
                />
                <Tag
                    color={(function () {
                        if (level === 5) {
                            return progress;
                        } else if (level >= 6) {
                            return complete;
                        } else return incomplete;
                    })()}
                >
                    배송출발
                </Tag>
            </span>
            <span className={styles.step_block}>
                <img
                    src="https://img.icons8.com/fluent/44/000000/delivered-box.png"
                    alt="배송완료"
                    style={{ margin: "5px" }}
                />
                <Tag
                    color={(function () {
                        if (level === 6) {
                            return progress;
                        } else return incomplete;
                    })()}
                >
                    배송완료
                </Tag>
            </span>
        </Space>
    );
};

export default LevelState;
