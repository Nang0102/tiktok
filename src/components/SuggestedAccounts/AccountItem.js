import React from "react";
import classNames from "classnames/bind";
import styles from "./SuggestedAccount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { PopperWrapper } from "../Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <div className={cx("preview")}>
            <AccountPreview />
          </div>
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        placement="bottom"
        delay={[800, 0]}
        offset={[-15, 0]}
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://images.pexels.com/photos/14577737/pexels-photo-14577737.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
          />
          <div className={cx("item-info")}>
            <h4 className={cx("nickname")}>
              <strong>Nickname</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </h4>
            <p className={cx("name")}>Name</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
