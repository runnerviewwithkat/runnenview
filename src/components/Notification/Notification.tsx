import { ActionIcon, Image } from "@mantine/core";
import cn from "classnames";
import React, { FC, useContext } from "react";

import styles from "./notification.module.scss";
import { INotificationProps } from "./notification.props";
import { IMainContext, MainContext } from "../../context";

export const Notification: FC<INotificationProps> = ({
  counter,
  productId,
  onOpenBasketClick,
  img,
  isOpenNotification,
}) => {
  const { basket, setInBasket } = useContext<IMainContext>(MainContext);

  const handleIncreaseClick = () => {
    if (setInBasket && productId) {
      setInBasket((prev) => ({
        ...prev,
        [productId]: {
          ...prev[productId],
          counter: prev[productId].counter + 1,
        },
      }));
    }
  };

  const handleDecreaseClick = () => {
    if (setInBasket && productId) {
      setInBasket((prev) => ({
        ...prev,
        [productId]: {
          ...prev[productId],
          counter: prev[productId].counter - 1,
        },
      }));
    }
  };

  const handleDeleteItemClick = () => {
    if (setInBasket) {
      const newBasket = { ...basket };
      delete newBasket[productId || ""];
      setInBasket(newBasket);
    }
  };

  return (
    <div
      className={cn(styles.detail_notification, {
        [styles.open_notification]: isOpenNotification,
      })}>
      <Image height="3rem" width="3rem" className={styles.detail_notification_img} src={img} />
      <div>
        Товар добавлен в{" "}
        <span onClick={onOpenBasketClick} className={styles.detail_notification_btn}>
          корзину
        </span>
      </div>
      <div className={styles.notification}>
        {counter === 1 ? (
          <ActionIcon onClick={handleDeleteItemClick}>
            <i className="icon-trash" />
          </ActionIcon>
        ) : (
          <ActionIcon onClick={handleDecreaseClick}>
            <i className="icon-minus" />
          </ActionIcon>
        )}
        {counter}
        <ActionIcon onClick={handleIncreaseClick}>
          <i className="icon-plus" />
        </ActionIcon>
      </div>
    </div>
  );
};
