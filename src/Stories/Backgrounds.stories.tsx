import type { Meta, StoryObj } from "@storybook/react";
import { Graphics } from "..";

const BackgroundsGallery = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    {Object.entries(Graphics.Backgrounds).map(([name, src]) => (
      <div key={name} style={{ margin: "10px", textAlign: "center" }}>
        <img
          src={src}
          alt={name}
          style={{ width: 547, height: "auto", display: "block" }}
        />
        <div>{name}</div>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof BackgroundsGallery> = {
  title: "Backgrounds",
  component: BackgroundsGallery,
};

export default meta;

type Story = StoryObj<typeof BackgroundsGallery>;

export const Default: Story = {};
