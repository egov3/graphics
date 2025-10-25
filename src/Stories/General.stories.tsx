"use client";

import General from "../General";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultGeneralComponent = () => (
  <CardWrapperItem>
    {Object.entries(General).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        {fieldName}: <Component key={fieldName} />
      </div>
    ))}
  </CardWrapperItem>
);

export const GeneralStory = () => <DefaultGeneralComponent />;

const meta = {
  title: "General",
  component: General,
};

export default meta;
