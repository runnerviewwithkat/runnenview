import cn from "classnames";
import React, { FC } from "react";

import styles from "./button.module.scss";
import { IButtonProps } from "./button.props";

export const Button: FC<IButtonProps> = ({ counter, variant, children, percentageFilled = 0, ...props }) => (
  <button
    className={cn(styles.button, {
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
      [styles.outline]: variant === "outline",
    })}
    style={{
      background: percentageFilled ? `linear-gradient(to right, #F15A29 ${percentageFilled}%, #d6d6d6 ${percentageFilled}%)` : '',
      transition: percentageFilled ?  "background 0.3s ease" : '',
    }}
    {...props}>
    {!!counter && <div className={styles.counter}>{counter}</div>}
    {children}
  </button>
);

Button.defaultProps = {
  variant: "primary",
};
