import { createServer } from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const __dirname = path.resolve();

const server = createServer(async (req, res) => {
  switch (req.url) {
    case '/favicon.ico': {
      const data = await readFile(path.join(__dirname, 'public/favicon.ico'));
      res.setHeader('Content-Type', 'image/x-icon');
      res.end(data);
      break;
    }
  
    case '/': {
      const homePage = await readFile(path.join(__dirname, 'pages/index.html'));
      res.end(homePage);
      break;
    }

    case '/about': {
      const aboutPage = await readFile(path.join(__dirname, 'pages/about.html'));
      res.end(aboutPage);
      break;
    }

    default: {
      res.write('404 not found');
      res.end();
      break;
    }
  }
});

server.listen(3000);
