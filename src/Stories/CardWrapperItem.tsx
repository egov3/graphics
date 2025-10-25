// src/Stories/CardWrapperItem.tsx
import type React from "react";

import styles from "./common.module.css";

export const CardWrapperItem = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className={styles.cardWrapperItemWrapper}>
    <div className={styles.cardWrapperItem}>{children}</div>
  </div>
);
