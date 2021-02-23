import React, { useRef } from "react";
import { Input, Select, Button, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;

const DeliveryAddForm = ({ company, onAdd }) => {
    const formRef = useRef();
    const onFinish = (values) => {
        onAdd(values);
        formRef.current.resetFields();
    };

    return (
        <Form onFinish={onFinish} ref={formRef}>
            <Form.Item>
                <Input.Group compact>
                    <Form.Item
                        name={["택배사"]}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: "택배사를 선택해주세요.",
                            },
                        ]}
                    >
                        <Select
                            size="large"
                            style={{ width: "15%" }}
                            placeholder="택배사 선택"
                        >
                            {company.map((company) => {
                                return (
                                    <Option
                                        key={company.Code}
                                        value={company.Code}
                                    >
                                        {company.Name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={["운송장번호"]}
                        label="number"
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: "운송장 번호를 입력하세요.",
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            style={{ width: "30%" }}
                            placeholder="운송장 번호 - 없이 입력"
                        />
                    </Form.Item>
                    <Button
                        size="large"
                        icon={<SearchOutlined />}
                        htmlType="submit"
                    />
                </Input.Group>
            </Form.Item>
        </Form>
    );
};

export default DeliveryAddForm;
