import { Id } from "convex-dev/values";

export type Nav = {
  _id: Id;
  navUse: boolean;
};

export const Menu = (
  id: number,
  display: string,
  url: string,
  picurl: string
) => {
  return { id: id, display: display, url: url, picurl: picurl };
};
