import boilerplate from "../boilerplate.js";
import config from "../config.json";

const createLayout = async () => {
  return boilerplate(config);
};

export default createLayout;
