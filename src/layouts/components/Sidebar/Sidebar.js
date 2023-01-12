import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routesConfig.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routesConfig.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Live"
          to={config.routesConfig.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestedAccounts label="Suggested accounts" />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
