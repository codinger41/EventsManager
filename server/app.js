// import requied libraries to setup the server
import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';

// import apiRouter from './routes/api';

import { sequelize } from './models/index';

const app = express();

// to parse req body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   console.log('eventsmanager!');
// });
// eventsmanager api routes
// app.use('/api', apiRouter);

// if a user goes to a non existent page
app.get('*', (req, res) => {
  res.status(404).send('404: Not Found');
});

// Test elephantSQl Connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// server start
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running. listening on port:  ${port}`);
});

export default app;
