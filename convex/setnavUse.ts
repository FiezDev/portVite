import { mutation } from "convex-dev/server";
import { Id } from "convex-dev/values";
import { Nav } from "../src/model";

// Upvote a post.
export default mutation(async ({ db }, id: Id) => {
  console.log("upvoting", id);
  const nav: Nav | null = await db.get(id);
  if (nav === null) {
    throw new Error(`No data of Navuse`);
  }
  db.update(id, { navUse : nav.navUse ? false : true });
});