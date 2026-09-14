"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { IllustrationImg } from "../IllustrationImg";
import { CardWrapperItem } from "./CardWrapperItem";

import styles from "./common.module.css";

const IllustrationImgGallery = () => (
  <CardWrapperItem>
    {Object.entries(IllustrationImg).map(([name, src]) => {
      const Component = src;

      return (
        <div
          key={name}
          className={`${styles.basicItem} ${styles.illustrationImgItem}`}
        >
          <div>{name}</div>
          <Component alt={name} className={styles.illustrationImgImage} />
        </div>
      );
    })}
  </CardWrapperItem>
);

const meta: Meta<typeof IllustrationImgGallery> = {
  title: "IllustrationImg",
  component: IllustrationImgGallery,
};

export default meta;

type Story = StoryObj<typeof IllustrationImgGallery>;

export const Default: Story = {};
