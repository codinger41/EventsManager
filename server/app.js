// import requied libraries to setup the server
import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/api';

const app = express();


// for parsing request body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('eventsmanager!')
});
// eventsmanager api routes
app.use('/api', apiRouter);

// don't go to a page that does not exist, user.
app.get('*', (req, res) => {
  res.status(404).send('404: Not Found');
});


// server initialization
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running. listening on port:  ${port}`);
});

export default app;