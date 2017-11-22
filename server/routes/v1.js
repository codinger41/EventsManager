import express from 'express';

import * as Events from '../controllers/eventController';

const event = new Events.default();

const apiV1 = express.Router();


// API routes for GETing and POSTing events
apiV1
  .get('/events', event.getAllEvents)
  .post('/events', event.createEvent);

// API routes for PUTing and DELETEing a particular event by its ID
apiV1.get('/events/:eventId', event.getEventById);
apiV1.put('/events/:eventId', event.editEventById);
apiV1.delete('/events/:eventId', event.deleteEventById);

export default apiV1;
