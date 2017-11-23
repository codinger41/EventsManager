// import requied libraries to setup the server
import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './server/routes/api';


const app = express();


// for parsing request body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('eventsmanager!');
});
// eventsmanager api routes
app.use('/api', apiRouter);

// if a user goes to a non existent page
app.get('*', (req, res) => {
  res.status(404).send('404: Not Found');
});


// server start
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running. listening on port:  ${port}`);
});

export default app;
