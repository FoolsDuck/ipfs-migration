import fs from "fs";
import createLayout from "./hooks/createLayout.js";
import writeFile from "./hooks/writeFile.js";
import uploadWebsite from "./hooks/upload.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildPath = `${__dirname}/build`;

const main = async (callback) => {
  const layout = await createLayout();
  if (layout) {
    await writeFile(`${buildPath}/index.html`, layout);
    console.log(`Wrote file to ${buildPath}/index.html`);
    callback();
  } else return;
};

main(async () => {
  const ipfsUrl = await uploadWebsite(buildPath);
});
