import React, { FC } from "react";

import styles from "./socials.module.scss";
import { ISocialsProps } from "./socials.props";
import { LinkIcon } from "../_ui";

export const Socials: FC<ISocialsProps> = ({ ...props }) => (
  <div className={styles.socials} {...props}>
    <LinkIcon to="https://www.instagram.com/runnerview_with_kat/" target="_blank">
      <i className="icon-social-instagram"></i>
    </LinkIcon>
    <LinkIcon to="https://www.youtube.com/@RunnerviewWithKat" target="_blank">
      <i className="icon-social-youtube"></i>
    </LinkIcon>
    <LinkIcon to="https://open.spotify.com/show/6TRR1IVOe4VpjaDZH2M9LD?si=XK3cNdXMQna3POOZEg_opw" target="_blank">
      <i className="icon-social-spotify"></i>
    </LinkIcon>
  </div>
);
