import { query } from "convex-dev/server";
import { Nav } from "../src/contexts/model";

// List all posts in sorted order.
export default query(async ({ db }): Promise<Nav[]> => {
  console.log("Nav");
  const nav: Nav[] = await db.table("nav").collect();
  return nav;
});