import { React, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import ReactPlayer from "react-player";
import {
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  DiscoverMusicIcon,
  FacebookIcon,
  LetterIcon,
  LinkIcon,
  TagIcon,
  WhatsAppIcon,
} from "~/components/Icons";
import Menu from "~/components/Popper/Menu/index";

const cx = classNames.bind(styles);
function Video({ title, tag, titleMusic, urlVideo }) {
  const [playTime, setPlayTime] = useState(0);

  const handleProgress = (state) => {
    setPlayTime(state.playSeconds());
  };

  const shareMenu = [
    {
      icon: <TagIcon />,
      title: "Nhúng",
      to: "/",
    },
    {
      icon: <LetterIcon />,
      title: "Gửi đến bạn bè",
      to: "/",
    },
    {
      icon: <FacebookIcon />,
      title: "Chia sẻ với Facebook",
      to: "/",
    },
    {
      icon: <WhatsAppIcon />,
      title: "Chia sẻ với WhatsApp",
      to: "/",
    },
    {
      icon: <LinkIcon />,
      title: "Sao chép liên kết",
      to: "/",
    },
  ];

  const handleMenuChange = () => {
    return "hello";
  };

  return (
    <div>
      <div className={cx("container")}>
        <p className={cx("title")}>{title}</p>
        <p className={cx("tag")}>{tag}</p>
      </div>
      <h4 className={cx("trend")}>
        <DiscoverMusicIcon className={cx("icon")} />
        <span className={cx("title-music")}> {titleMusic}</span>
      </h4>

      <div className={cx("wrapper-video-match")}>
        <div className={cx("video")}>
          <ReactPlayer
            url={urlVideo}
            width="35rem"
            height="55rem"
            playing={true}
            controls
            onProgress={handleProgress}
          />
        </div>
        <div className={cx("match")}>
          <div className={cx("match-icon")}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <p className={cx("match-statistic")}>322.4K</p>

          <div className={cx("match-icon")}>
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <p className={cx("match-statistic")}>2122</p>

          <div className={cx("popup")}>
            <Menu items={shareMenu} onChange={handleMenuChange}>
              <div>
                <div className={cx("match-icon")}>
                  <FontAwesomeIcon icon={faShare} />
                </div>
                <p className={cx("match-statistic")}>1222</p>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
