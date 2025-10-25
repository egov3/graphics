import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [react()],
      css: {
        postcss: "./postcss.config.js",
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/styles/variables" as *;`,
          },
        },
      },
      resolve: {
        alias: {
          "@": new URL("../src", import.meta.url).pathname,
        },
      },
    });
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
