import React from "react";
import { BackTop } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

const style = {
    width: 50,
    height: 50,
    borderRadius: 25,
    lineHeight: "50px",
    backgroundColor: "#6E40C9",
    color: "#ffff00",
    fontSize: 30,
    textAlign: "center",
};

const BackTopBtn = () => {
    return (
        <BackTop>
            <div style={style}>
                <VerticalAlignTopOutlined />
            </div>
        </BackTop>
    );
};

export default BackTopBtn;
