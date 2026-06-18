/// <reference types="node" />
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "tsup";

const collectSourceFiles = (dirPath: string): string[] =>
  readdirSync(dirPath).flatMap((entryName) => {
    const entryPath = path.join(dirPath, entryName);
    const stats = statSync(entryPath);

    if (stats.isDirectory()) {
      return collectSourceFiles(entryPath);
    }

    return /\.(ts|tsx)$/.test(entryPath) ? [entryPath] : [];
  });

const entries = Object.fromEntries(
  collectSourceFiles("src").flatMap((filePath) => {
    if (
      filePath.endsWith(".d.ts") ||
      filePath.includes(`${path.sep}Stories${path.sep}`) ||
      filePath.endsWith(".stories.tsx")
    ) {
      return [];
    }

    const normalizedPath = filePath.split(path.sep).join("/");
    const entryName = normalizedPath
      .replace(/^src\//, "")
      .replace(/\.(ts|tsx)$/, "");

    return [[entryName, normalizedPath]];
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
