import React, { FC } from "react";

import styles from "./input.module.scss";
import { IInputProps } from "./input.props";

export const Input: FC<IInputProps> = ({ ...props }) => <input className={styles.contacts_form_input} {...props} />;
