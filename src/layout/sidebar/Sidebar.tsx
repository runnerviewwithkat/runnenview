import { ActionIcon } from "@mantine/core";
import cn from "classnames";
import React, { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./sidebar.module.scss";
import { ISidebarProps } from "./sidebar.props";
import Logo from "../../assets/logo.png";

export const Sidebar: FC<ISidebarProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const active = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#F15A29" : "#FFF",
  });
  return (
    <>
      <aside
        className={cn(styles.aside, {
          [styles.aside_mobile_open]: openMenu,
        })}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="logo" />
        </Link>

        <nav className={styles.nav}>
          <div className={styles.nav_menu}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                <NavLink to="/" className={styles.nav_link} style={active}>
                  <i className="icon-home"></i>
                </NavLink>
              </li>

              <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                <NavLink to="/episodes" className={styles.nav_link} style={active}>
                  <i className="icon-social-youtube"></i>
                </NavLink>
              </li>

              <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                <NavLink to="/about" className={styles.nav_link} style={active}>
                  <i className="icon-notebook"></i>
                </NavLink>
              </li>

              <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                <NavLink to="/nominate" className={styles.nav_link} style={active}>
                  <i className="icon-people"></i>
                </NavLink>
              </li>

              <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                <NavLink to="/contact" className={styles.nav_link} style={active}>
                  <i className="icon-envelope"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.nav_footer}>
          <span className={styles.copyright}>&copy; 2025-2026.</span>
        </div>
      </aside>
      <ActionIcon
        className={cn(styles.nav_toggle, {
          [styles.nav_toggle_open]: openMenu,
        })}
        onClick={() => setOpenMenu((prev) => !prev)}>
        <i color="#F15A29" className={openMenu ? "icon-close" : "icon-menu"} />
      </ActionIcon>
    </>
  );
};
