"use client";

import NavigationBar from "../NavigationBar";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultNavigationBarComponent = () => (
  <CardWrapperItem>
    {Object.entries(NavigationBar).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        {fieldName}: <Component key={fieldName} />
      </div>
    ))}
  </CardWrapperItem>
);

export const NavigationBarStory = () => <DefaultNavigationBarComponent />;

const meta = {
  title: "NavigationBar",
  component: NavigationBar,
};

export default meta;
