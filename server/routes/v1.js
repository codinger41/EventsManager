import express from 'express';

import * as Events from '../controllers/eventController';

const event = new Events.default();

const apiV1 = express.Router();


// API routes for GETing and POSTing events
apiV1
  .get('/events', event.getAllEvents)
  .post('/events', event.createEvent);


export default apiV1;
