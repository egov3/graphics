"use client";

import { Wallet } from "../Wallet";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultWalletComponent = () => (
  <CardWrapperItem>
    {Object.entries(Wallet).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        {fieldName}: <Component key={fieldName} width="72px" height="72px" />
      </div>
    ))}
  </CardWrapperItem>
);

export const WalletStory = () => <DefaultWalletComponent />;

const meta = {
  title: "Wallet",
  component: Wallet,
};

export default meta;
