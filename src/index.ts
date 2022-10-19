import express, { Express, Request, Response } from 'express';
var mongoose = require('mongoose');

mongoose
  .connect('mongodb://mongodb:27017/mydb', { useNewUrlParser: true }).then(() => console.log('MongoDB Connected')).catch((err: Error) => console.error(err));

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});