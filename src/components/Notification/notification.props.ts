import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface INotificationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpenNotification: boolean;
  onOpenBasketClick: () => void;
  img?: string;
  counter: number;
  productId: number | string;
}
