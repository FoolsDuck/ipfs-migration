**_IMPORTANT! MAKE SURE YOUR SITE IS NOT BLOCKING IFRAMES OTHERWISE IT WON'T WORK_**

1. start by running "npm install" from root.
2. create a new file called ".env" and place your "nft.storage" API key in the placeholder like in the "env-example" file.
3. fill the config.json file with your configuration (you can add favicon and featured image as well in build/images).
4. run "npm start" to upload the site to IPFS, the console will print your IPFS hash and URL.
5. go to your ENS dashboard, click "add/edit record", place the IPFS URL inside the "content" input and save.
