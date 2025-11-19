"use client";

import Illustrations from "../Illustrations";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultGeneralComponent = () => (
  <CardWrapperItem>
    {Object.entries(Illustrations).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        {fieldName}: <Component key={fieldName} />
      </div>
    ))}
  </CardWrapperItem>
);

export const IllustrationsStory = () => <DefaultGeneralComponent />;

const meta = {
  title: "Illustrations",
  component: Illustrations,
};

export default meta;
