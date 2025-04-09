import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./linkIcon.module.scss";
import { ILinkIconProps } from "./linkIcon.props";

export const LinkIcon: FC<ILinkIconProps> = ({ children, ...props }) => (
  <Link className={styles.socials_link} {...props}>
    {children}
  </Link>
);
