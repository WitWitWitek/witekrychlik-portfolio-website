import express from 'express';
import next from 'next';

const PORT = 15799;

const nextApp = next({
  dev: false,
  port: PORT,
});

const app = express();
const nextHandler = nextApp.getRequestHandler();

app.use((req, res) => nextHandler(req, res));
nextApp.prepare().then(() => {
  app.listen(PORT, async () => {
    console.log(`Next.js working on port http://localhost:${PORT}`);
  });
});
