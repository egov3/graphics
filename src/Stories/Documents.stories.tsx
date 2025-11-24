"use client";

import { Documents } from "../Documents";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultDocumentsComponent = () => (
  <CardWrapperItem>
    {Object.entries(Documents).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        {fieldName}: <Component key={fieldName} />
      </div>
    ))}
  </CardWrapperItem>
);

export const DocumentsStory = () => <DefaultDocumentsComponent />;

const meta = {
  title: "Documents",
  component: Documents,
};

export default meta;
