/* eslint-disable jsx-a11y/alt-text */
import { React, useState, forwardRef } from "react";
import images from "~/assets/image";
import classNames from "classnames/bind";
import styles from "./image.module.scss";

const Image = forwardRef(
  (
    {
      src,
      alt,
      fallback: customFallback = images.noImage,
      className,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };
    return (
      <div>
        <img
          className={classNames(styles.wrapper, className)}
          ref={ref}
          src={fallback || src}
          alt={alt}
          {...props}
          onError={handleError}
        />
      </div>
    );
  }
);

export default Image;
