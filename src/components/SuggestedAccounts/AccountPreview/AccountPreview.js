import React from "react";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://images.pexels.com/photos/14577737/pexels-photo-14577737.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
        <Button className={cx("follow-btn")} small primary>
          {" "}
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <h4 className={cx("nickname")}>
          <strong>Nickname</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <p className={cx("name")}>Name</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}> 8.2M </strong>
          <span className={cx("label")}> Followers </span>
          <strong className={cx("value")}> 8.2M </strong>
          <span className={cx("label")}> Likes </span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
