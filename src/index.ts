import { Sequelize } from "sequelize";
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";

export const sequelizeClient = new Sequelize('db', 'user-test', 'user-test-password', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

const app = express();

app.use(cors())
      .use(compression())
      .use(cookieParser())
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json({ limit: '15mb' }))
const port = 3000;

app.get('/login', (req, res) => {
    res.send(200);
});

app.get('/basket', (req, res) => {
    res.send(200);
});

app.post('/order', (req, res) => {
    res.send(200);
});

app.put('/basket', (req, res) => {
    res.send(200);
});

app.get('*', (req, res) => {
    console.log('bla');
    res.send(404);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})