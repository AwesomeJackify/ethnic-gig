import { icons } from "@iconify-json/mdi";

export default (name: string): string => {
  const icon = icons.icons[name === "house" ? "home" : name];

  if (!icon) {
    throw new Error(`Unknown Material Design Icon: ${name}`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${icon.body}</svg>`;
};
