import React, { FC, FunctionComponent } from "react";

import styles from "./layout.module.scss";
import { ILayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import { MainContextProvider } from "../context";

export const Layout: FC<ILayoutProps> = ({ children, ...props }) => {

  return (
    <div {...props}>
      <Sidebar />
      <main className={styles.main}>
        {/*<Languages />*/}
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) =>
    (
      <MainContextProvider basket={{}}>
        <Layout>
          <Component {...props} />
        </Layout>
      </MainContextProvider>
    );
