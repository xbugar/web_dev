import { AccentColor } from "@/components/cards/cardColors";

export type TagType = {
  id: string;
  name: string;
  color: string;
};

export type CreateTag = {
  name: string;
  color: string;
};

export type TagProps = {
  name: string;
  color: AccentColor;
  x?: boolean;
};
