"use client";

import Logo from "../Logo";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultLogoComponent = () => (
  <CardWrapperItem>
    {Object.entries(Logo).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        {fieldName}: <Component key={fieldName} width="72px" height="72px" />
      </div>
    ))}
  </CardWrapperItem>
);

export const LogoStory = () => <DefaultLogoComponent />;

const meta = {
  title: "Logo",
  component: Logo,
};

export default meta;
