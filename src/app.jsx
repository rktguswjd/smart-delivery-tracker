import "./app.css";
import { Input, Select } from "antd";
import React, { useEffect } from "react";
const { Option } = Select;

function App({ smartDelivery }) {
    const onSearch = (value) => {
        console.log(value);
    };

    useEffect(() => {
        smartDelivery
            .company()
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));

        smartDelivery
            .tracking()
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <div className="app">
            <title>DeliveryTracker</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.3/antd.css"
            />

            <Input.Group compact>
                <Select placeholder="택배사 선택">
                    <Option value="우체국">우체국</Option>
                    <Option value="로젠택배">로젠택배</Option>
                </Select>

                <Input.Search
                    allowClear
                    style={{ width: "30%" }}
                    placeholder="운송장 번호 - 없이 입력"
                    onSearch={onSearch}
                />
            </Input.Group>
        </div>
    );
}

export default App;
