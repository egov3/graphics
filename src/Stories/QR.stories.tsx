import type { Meta, StoryObj } from "@storybook/react";
import { Graphics } from "..";

const QRsGallery = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    {Object.entries(Graphics.QRs).map(([name, src]) => (
      <div key={name} style={{ margin: "10px", textAlign: "center" }}>
        <img
          src={src}
          alt={name}
          style={{ width: 100, height: "auto", display: "block" }}
        />
        <div>{name}</div>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof QRsGallery> = {
  title: "QRs",
  component: QRsGallery,
};

export default meta;

type Story = StoryObj<typeof QRsGallery>;

export const Default: Story = {};
