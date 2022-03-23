import { Sequelize } from "sequelize";
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import { Product } from './models/Product';
import { User } from './models/User';

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

app.post('/product', async (req, res) => {
    await sequelizeClient.sync();

    const { name } = req.body;
    
    try {
        const product = await Product.create({name});
    } catch (e) {
        res.status(400).send("Error while creating product");
    }
});

app.post('/login', async (req, res) => {

    const {username, password} = req.body;

    if (!username || !password) {
        res.status(400).send("Incorrect credentials")
    }

    let user: User;
    try {
        user = await User.findOne({
            where: {
              username,
              password,
            }
        });
    } catch {
        res.status(404).send("User not found");
    }

    res.status(200).send(user.toJSON().token);
});

app.post('/register', async (req, res) => {

    const {username, password} = req.body;

    if (!username || !password) {
        res.status(400).send("Missing username nor password")
    }

    await sequelizeClient.sync();
    User.create({
        username,
        password,
        token: `${username}:${password}:${Math.random() * 100}`,
    });
});

// (async () => {
//     await sequelize.sync();
//     const jane = await User.create({
//       username: 'janedoe',
//       birthday: new Date(1980, 6, 20)
//     });
//     console.log(jane.toJSON());
//   })();

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