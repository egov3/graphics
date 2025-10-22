"use client";

import NavigationBar from "../NavigationBar";
import { CardWrapperItem } from "./CardWrapperItem";

const DefaultNavigationBarComponent = () => (
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
        {Object.entries(NavigationBar).map(([fieldName, Component]) => (
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

export const NavigationBarStory = () => <DefaultNavigationBarComponent />;

const meta = {
  title: "NavigationBar",
  component: NavigationBar,
};

export default meta;
