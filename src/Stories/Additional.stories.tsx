"use client";

import Additional from "../Additional";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultAdditionalComponent = () => (
  <CardWrapperItem>
    {Object.entries(Additional).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        {fieldName}: <Component key={fieldName} />
      </div>
    ))}
  </CardWrapperItem>
);

export const AdditionalStory = () => <DefaultAdditionalComponent />;

const meta = {
  title: "Additional",
  component: Additional,
};

export default meta;
