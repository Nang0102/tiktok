import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Tippy from "@tippyjs/react/headless";
import { PopperWrapper } from "~/components/Popper";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div>
        <Link className={cx("item")} target="_blank">
          Giới thiệu
        </Link>
        <Link className={cx("item")} target="_blank">
          Bảng tin
        </Link>
        <Link className={cx("item")} target="_blank">
          Liên hệ
        </Link>
        <Link className={cx("item")} target="_blank">
          An toàn
        </Link>
        <Link className={cx("item")} target="_blank">
          TikTok for Good
        </Link>
        <Link className={cx("item")} target="_blank">
          Quyền riêng tư
        </Link>
        <Link className={cx("item")} target="_blank">
          Hướng dẫn cộng đồng
        </Link>
        <Link className={cx("item")} target="_blank">
          An toàn
        </Link>
        <Link className={cx("item")} target="_blank">
          Giới thiệu
        </Link>
        <Link className={cx("item")} target="_blank">
          Quyền riêng tư
        </Link>
        <Link className={cx("item")} target="_blank">
          Hướng dẫn cộng đồng
        </Link>
        <Link className={cx("item")} target="_blank">
          An toàn
        </Link>
        <Link className={cx("item")} target="_blank">
          Giới thiệu
        </Link>
      </div>
      <Tippy
        interactive
        placement="top"
        // delay={[500, 0]}
        offset={[-75, 0]}
        render={() => {
          return (
            <PopperWrapper className={cx("tippy-btn")}>
              <Link className={cx("tippy-text")}>
                NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
              </Link>
            </PopperWrapper>
          );
        }}
      >
        <p className={cx("more-btn")}> Thêm</p>
      </Tippy>
      <p className={cx("text-final")}> © 2023 TikTok</p>
    </div>
  );
}

export default Footer;
