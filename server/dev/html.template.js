export default ({title, ogTitle, description, image, url, html}) => (
`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="chrome=1">
  <meta property="og:title" content="${ogTitle}" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:description" content="${description}" />
  <meta name="description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${url}" />
  <title>${title}</title>
  <link href="/styles/semantic.css" type="text/css" rel="stylesheet"></link>
</head>
<body>
  <div id="side_bar" class="ui inverted vertical menu sidebar"></div>
  <div id="content" class="pusher">${html}</div>
  <div id="nation_modal" class="ui dimmer modals page"></div>
  <script type="text/javascript" src="/scripts/vendor.bundle.js"></script>
  <script type="text/javascript" src="/scripts/bundle.js"></script>
</body>
</html>`
);
