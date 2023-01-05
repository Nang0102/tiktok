import React from "react";

import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function HeaderMenu({ title, onBack }) {
  return (
    <div className={cx("header_menu")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>
      <h4 className={cx("header_title")}>{title}</h4>
    </div>
  );
}

export default HeaderMenu;
