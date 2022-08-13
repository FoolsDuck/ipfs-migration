import { NFTStorage } from "nft.storage";
import { filesFromPath } from "files-from-path";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.NFT_STORAGE_KEY;

export default async function uploadWebsite(directoryPath) {
  const files = filesFromPath(directoryPath, {
    pathPrefix: path.resolve(directoryPath),
    hidden: true,
  });

  const storage = new NFTStorage({ token });

  console.log(`storing file(s) from ${path}`);
  const cid = await storage.storeDirectory(files);
  console.log({ cid });

  const status = await storage.status(cid);
  console.log(status);
  console.log(
    `Paste this url in the "content" input of your ENS name: ipfs://${cid}`
  );
  return `ipfs://${cid}`;
}
