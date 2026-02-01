import { Graphics } from "..";

console.log(Graphics.Backgrounds["Auth-bg"]);
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

export default {
  title: "Backgrounds",
  component: BackgroundsGallery,
};

export const Backgrounds = () => <BackgroundsGallery />;
