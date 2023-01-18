import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";
import images from "~/assets/image/index";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { BoxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "~/layouts/components/Search";
import config from "~/config";

const cx = classNames.bind(styles);
const currentUser = true;

const Menu_Items = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language ",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Vietnamese",
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
        <Link to={config.routesConfig.home} className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <div>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <BoxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </div>
          ) : (
            <div className={cx("outside-btn")}>
              <Button text> Upload</Button>

              <Button primary>Log in</Button>
            </div>
          )}

          <Menu
            items={currentUser ? userMenu : Menu_Items}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://images.pexels.com/photos/14918476/pexels-photo-14918476.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
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
