import express  from 'express';
import React    from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import App      from 'components/App';

const app = express();

app.use((req, res) => {

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) { // Если необходимо сделать redirect
      return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }

    if (error) { // Произошла ошибка любого рода
      return res.status(500).send(error.message);
    }

    if (!renderProps) { // мы не определили путь, который бы подошел для URL
      return res.status(404).send('Not found');
    }

    const componentHTML = ReactDOMServer.renderToString(
        <RouterContext {...renderProps} />
    );

    return res.end(renderHTML(componentHTML));
  });
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : 'http://localhost:3001';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>

        <div id="react-view">${componentHTML}</div>
        <script async ype="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
        <script type="application/javascript" src="${assetUrl}/public/assets/device.js"></script>
        <script type="application/javascript" src="${assetUrl}/public/assets/loader.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
