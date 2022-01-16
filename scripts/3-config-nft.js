import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xf54a9FB863d9BC1e080e7A2DFa0AEc4eE3E304f3",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Quasi Africa Dishiki Flag",
        description: "This NFT will give you access to BlackTech DAO!",
        image: readFileSync("scripts/assets/quasi-africa-x.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()