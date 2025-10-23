"use client";

import Emoji from "../Emoji";
import { CardWrapperItem } from "./CardWrapperItem";

const DefaultEmojiComponent = () => (
  <CardWrapperItem>
    <div
      style={{
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Object.entries(Emoji).map(([fieldName, Component]) => (
          <div
            key={fieldName}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {fieldName}: <Component key={fieldName} />
          </div>
        ))}
      </div>
    </div>
  </CardWrapperItem>
);

export const EmojiStory = () => <DefaultEmojiComponent />;

const meta = {
  title: "Emoji",
  component: Emoji,
};

export default meta;
