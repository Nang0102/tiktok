import { React, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import Image from "~/components/Image";
import Button from "~/components/Button";
import Video from "~/components/Videos/Video";

const cx = classNames.bind(styles);

const Info = ({ nickname, name }) => {
  return (
    <div className={cx("info")}>
      <p className={cx("nickname")}> {nickname}</p>
      <p className={cx("name")}>{name}</p>
    </div>
  );
};
function Home() {
  return (
    <div className={cx("wrapper-home")}>
      <div className={cx("wrapper")}>
        <Image
          className={cx("avatar")}
          src="https://images.pexels.com/photos/13232543/pexels-photo-13232543.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        />
        <Info nickname="hoangu468 " name="Hoa Ngữ" />

        <Button small outline className={cx("follow-btn")}>
          Follow
        </Button>
      </div>

      <div className={cx("video")}>
        <Video
          title="Bộ phim có kỹ xảo đỉnh nhất mà bạn từng xem"
          tag=" #xuhuong #phimhay #hoangu468 #hoangu2005 #hoangu29825 #mephim29825
        #thuthuy29825 #cool😎🎃 #hastag🌸nhomtamsu #rys_🕊️ #per🍓 #zin♡🌟
        #xiao🌼 #nb🍭 #flynn🍁 #thiencoquyettran #huakhai #chaudongvu"
          titleMusic="Quả Phụ Tướng Remix-Hoa Ngữ"
          urlVideo="https://www.youtube.com/watch?v=oUFJJNQGwhk"
        />
      </div>
      <div className={cx("video-border")}></div>
      <br />

      <div className={cx("wrapper")}>
        <Image
          className={cx("avatar")}
          src="https://images.pexels.com/photos/14708721/pexels-photo-14708721.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        />
        <Info nickname="eatwpeach" name="Pit Ham An " />

        <Button small outline className={cx("follow-btn")}>
          Follow
        </Button>
      </div>

      <div className={cx("video")}>
        <Video
          title="Bộ phim có kỹ xảo đỉnh nhất mà bạn từng xem"
          tag="  #siamcenter #siamparagon #siamdiscovery #goldendisc #tiktokgiaitri
          Mình về bên nhau dựt - Phước Tài Mai
          🍁 #thiencoquyettran #huakhai #chaudongvu"
          titleMusic="Mình về bên nhau dựt - Phước Tài Mai"
          urlVideo="https://youtu.be/38y_1EWIE9I"
        />
      </div>
      <div className={cx("video-border")}></div>
    </div>
  );
}

export default Home;
