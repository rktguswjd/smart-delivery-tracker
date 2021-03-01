import React, { memo } from "react";
import { GithubOutlined } from "@ant-design/icons";
import styles from "./footer.module.css";

const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text_center}>
                Copyright @2020 | Designed With by <a href="/">rktguswjd</a>
            </p>

            <ul className={styles.social_footer_ul}>
                <li>
                    <a href="https://github.com/rktguswjd">
                        <GithubOutlined
                            style={{ fontSize: "30px", color: "white" }}
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
});

export default Footer;
