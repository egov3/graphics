/// <reference types="node" />
import { globSync } from "node:fs";
import { defineConfig } from "tsup";

const entries = Object.fromEntries(
  globSync("src/**/*.{ts,tsx}").flatMap((filePath: string) => {
    if (
      filePath.endsWith(".d.ts") ||
      filePath.includes("/Stories/") ||
      filePath.endsWith(".stories.tsx")
    ) {
      return [];
    }

    const entryName = filePath.replace(/^src\//, "").replace(/\.(ts|tsx)$/, "");

    return [[entryName, filePath]];
  }),
);

export default defineConfig({
  entry: entries,
  format: ["cjs", "esm"], // Поддерживаемые форматы
  dts: true, // Генерация .d.ts файлов
  splitting: false, // Отключаем код-сплиттинг
  sourcemap: true, // Включаем sourcemap
  clean: true, // Очищаем dist перед сборкой
  minify: true, // Минификация
  external: ["react", "react-dom"], // Указываем peerDependencies как external
  loader: {
    ".webp": "copy",
  },
});
