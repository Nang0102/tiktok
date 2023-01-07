import classNames from "classnames/bind";
import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudArrowUp,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faSignOut,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/image/index";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);
const currentUser = true;

const Menu_Items = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Vietnames",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback & help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const handleMenuChange = (menuItem) => {
    switch (menuItem) {
      case "language":
        break;

      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...Menu_Items,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              {" "}
              <PopperWrapper>
                <h4 className={cx("search-title")}> Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("actions")}>
          {currentUser ? (
            <div className={cx("current-user")}>
              <Tippy delay={200} content="Upload video" placement="bottom">
                <button>
                  <FontAwesomeIcon
                    className={cx("action-btn")}
                    icon={faCloudArrowUp}
                  />
                </button>
              </Tippy>
            </div>
          ) : (
            <div>
              <Button text> Upload</Button>
              <Button primary>Log in</Button>
            </div>
          )}

          <Menu
            items={currentUser ? userMenu : Menu_Items}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                src="https://images.pexels.com/photos/14589051/pexels-photo-14589051.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                className={cx("user-avatar")}
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon
                  className={cx("action-btn")}
                  icon={faEllipsisVertical}
                />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
