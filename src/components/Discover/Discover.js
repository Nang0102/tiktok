import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Discover.module.scss";
import config from "~/config/index";
import { DiscoverIcon, DiscoverMusicIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

const Tag = ({ to, icon, title }) => {
  return (
    <div>
      <NavLink to={to} className={cx("item-tag")}>
        <p className={cx("icon")}>{icon}</p>
        <p className={cx("title")}>{title}</p>
      </NavLink>
    </div>
  );
};

function Discover({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <Tag to={config.routesConfig.tag} icon={<DiscoverIcon />} title="Smile" />
      <Tag
        to={config.routesConfig.music}
        icon={<DiscoverMusicIcon />}
        title="Hay Cuoi Len Ban Nhe "
      />{" "}
      <Tag
        to={config.routesConfig.music}
        icon={<DiscoverMusicIcon />}
        title="Hay Cuoi Len Ban Nhe "
      />{" "}
      <Tag
        to={config.routesConfig.music}
        icon={<DiscoverMusicIcon />}
        title="Hay Cuoi Len Ban Nhe "
      />
      <Tag to={config.routesConfig.tag} icon={<DiscoverIcon />} title="Smile" />
    </div>
  );
}

export default Discover;
