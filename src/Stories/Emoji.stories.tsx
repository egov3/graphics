"use client";

import Emoji from "../Emoji";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const DefaultEmojiComponent = () => (
  <CardWrapperItem>
    {Object.entries(Emoji).map(([fieldName, Component]) => (
      <div key={fieldName} className={styles.basicItem}>
        {fieldName}: <Component key={fieldName} />
      </div>
    ))}
  </CardWrapperItem>
);

export const EmojiStory = () => <DefaultEmojiComponent />;

const meta = {
  title: "Emoji",
  component: Emoji,
};

export default meta;
