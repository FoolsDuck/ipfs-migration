const boilerplate = (config) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <title>${config.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${config.description}" />
    <link rel="canonical" href="${config.url}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${config.title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:url" content="${config.url}" />
    <meta property="og:site_name" content="${config.sitename}" />
    <meta property="article:modified_time" content="${new Date()}" />
    <meta property="og:image" content="${config.image}" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta property="og:image:type" content="image/png" />
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="16 minutes" />
    <link rel="icon" href="${config.favicon}" />
    <link rel="apple-touch-icon" href="${config.favicon}" />
      <style type="text/css">
      body, html
      {
          margin: 0; padding: 0; height: 100%; overflow: hidden;
      }

      #content
      {
          position:absolute; left: 0; right: 0; bottom: 0; top: 0px; 
      }
  </style>
    </head>
    <body>
      <div id="content">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          src="${config.url}"
        ></iframe>
      </div>
    </body>
  </html>`;
};

export default boilerplate;
