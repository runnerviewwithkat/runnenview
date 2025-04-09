import React, { FC } from "react";

import styles from "./PageTitle.module.scss";
import { IPageTitleProps } from "./PageTitle.props";
import { Button, Input } from "../_ui";
export const PageTitle: FC<IPageTitleProps> = ({
  value,
  setValue,
  children,
  withFilters = false,
  withSearch = false,
}) => (
  <div className={styles.page_header}>
    <div className={styles.page_name}>
      <div className={styles.title}>{children}</div>
    </div>
    <div className={styles.filter_wrapper}>
      {withSearch && (
        <div className={styles.input_wrapper}>
          <div className={styles.search_icon_wrapper}>
            <i className="icon-magnifier" />
          </div>
          <Input
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e) => {
              if (setValue) {
                setValue(e.target.value);
              }
            }}
          />
        </div>
      )}
      {withFilters && (
        <Button>
          <i className="icon-equalizer" />
        </Button>
      )}
    </div>
  </div>
);
