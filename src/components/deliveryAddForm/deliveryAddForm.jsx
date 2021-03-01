import React, { useRef } from "react";
import { message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./deliveryAddForm.module.css";

const DeliveryAddForm = ({ company, onAdd }) => {
    const inputRef = useRef();
    const selectRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        if (
            selectRef.current.value === "def" ||
            inputRef.current.value === ""
        ) {
            return message.warning(
                "택배사와 운송장 번호를 정확히 입력해주세요."
            );
        }
        const getCompany = company.find(
            (p) => p.Code === selectRef.current.value
        );
        const values = {
            택배사: getCompany.Name,
            택배사코드: getCompany.Code,
            운송장번호: inputRef.current.value,
        };
        onAdd(values);
        inputRef.current.value = "";
        selectRef.current.value = "def";
    };

    return (
        <div className={styles.container}>
            <div className={styles.add}>
                <form onSubmit={onSubmit}>
                    <select
                        className={styles.select}
                        defaultValue="def"
                        ref={selectRef}
                    >
                        {" "}
                        <option value="def" disabled>
                            택배사 선택
                        </option>
                        {company.map((company) => {
                            return (
                                <option key={company.Code} value={company.Code}>
                                    {company.Name}
                                </option>
                            );
                        })}
                    </select>
                    <input
                        ref={inputRef}
                        className={styles.input}
                        placeholder="운송장 번호 - 없이 입력"
                    />

                    <button
                        className={styles.button}
                        size="large"
                        type="submit"
                    >
                        <SearchOutlined
                            twoToneColor="black"
                            style={{ fontSize: "1.5em" }}
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DeliveryAddForm;
