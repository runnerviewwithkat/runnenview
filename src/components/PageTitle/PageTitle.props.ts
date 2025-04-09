import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPageTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  withSearch?: boolean;
  withFilters?: boolean;
  value?: string
  setValue?: (value: string) => void
}
