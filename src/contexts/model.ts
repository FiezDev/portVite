import { Id } from "convex-dev/values";

export type Nav = {
  _id: Id;
  navUse: boolean;
};

export const Menu = (
  display: string,
  url: string,
  picurl: string
) => {
  return {display: display, url: url, picurl: picurl };
};
