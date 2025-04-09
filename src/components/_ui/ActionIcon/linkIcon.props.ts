import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface ILinkIconProps extends LinkProps {
  children: ReactNode;
}
