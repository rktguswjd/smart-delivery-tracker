import React from "react";
import { Timeline, Space, Divider } from "antd";
import styles from "./timeLine.module.css";

const TimeLine = ({ timeLine }) => {
    return (
        <div>
            <Timeline>
                {timeLine.map((item) => {
                    if (item === timeLine[timeLine.length - 1]) {
                        return (
                            <Timeline.Item key={item.time}>
                                <Space split={<Divider type="vertical" />}>
                                    <span>{item.where}</span>
                                    <span className={styles.kind}>
                                        {" "}
                                        {item.kind}
                                    </span>
                                </Space>
                                <br />
                                <span className={styles.time}>
                                    {item.timeString}
                                </span>
                            </Timeline.Item>
                        );
                    }
                    return (
                        <Timeline.Item key={item.time} color="gray">
                            <Space split={<Divider type="vertical" />}>
                                <span>{item.where}</span>
                                <span>{item.kind}</span>
                            </Space>
                            <br />
                            <span className={styles.time}>
                                {item.timeString}
                            </span>
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </div>
    );
};

export default TimeLine;
