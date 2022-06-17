import { mutation } from "convex-dev/server";

// Add a navstate
export default mutation(({ db }) => {
  console.log("Add Nav State");
  db.insert("navUse", { navUse: true});
});