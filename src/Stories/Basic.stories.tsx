// src/Stories/Basic.stories.tsx
"use client";

import Basic from "../Basic";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultBasicComponent = () => (
  <CardWrapperItem>
    {Object.entries(Basic).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        <span>{fieldName}:</span>
        <Component />
      </div>
    ))}
  </CardWrapperItem>
);

export const BasicStory = () => <DefaultBasicComponent />;

const meta = {
  title: "Basic",
  component: Basic,
};

export default meta;
