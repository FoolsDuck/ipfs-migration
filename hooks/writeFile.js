import fs from "fs";

const writeFile = (path, data) => {
  fs.writeFileSync(path, data, "utf-8", (err) => err);
};

export default writeFile;
