import React, { FC } from "react";

import styles from "./textarea.module.scss";
import { ITextareaProps } from "./textarea.props";

export const Textarea: FC<ITextareaProps> = ({ ...props }) => (
  <textarea className={styles.contacts_form_input} {...props} />
);
