import { React, useState } from "react";
import { PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import HeaderMenu from "./headerMenu";

import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = { defaultFn },
}) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; //convert boolean cua item.children
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      {" "}
      <PopperWrapper className={cx("menu-popper")}>
        {history.length > 1 && (
          <HeaderMenu title={current.title} onBack={handleBackMenu} />
        )}
        <div className={cx("menu-scrollable")}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  const handleResetToFirstPage = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      delay={[0, 700]}
      offset={[16, 8]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      render={renderResult}
      onHide={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
