type AccentColor = "blue" | "purple" | "orange" | "green" | "red" | "pink";

const iconColor: Record<AccentColor, string> = {
  blue: "bg-accent-blue",
  purple: "bg-accent-purple",
  orange: "bg-accent-orange",
  green: "bg-accent-green",
  red: "bg-accent-red",
  pink: "bg-accent-pink"
}

const lineColor: Record<AccentColor, string> = {
  blue: "border-l-accent-blue",
  purple: "border-l-accent-purple",
  orange: "border-l-accent-orange",
  green: "border-l-accent-green",
  red: "border-l-accent-red",
  pink: "border-l-accent-pink"
}

export {
  iconColor,
  lineColor
};
export type { AccentColor };
