import express from 'express';
import eventController from '../controllers/eventController';
const apiV1 = express.Router();


// API routes for GETing and POSTing events
apiV1
  .get('/events', eventController.getAllEvents)
  .post('/events', eventController.createEvent)


// API end point for updating and deleting a single event
 apiV1
   .put('/events/:id', eventController.updateEvent)
   .get('/events/:id', eventController.getEventById);
  //.delete('/events/:id', eventController.deleteevent)


export default apiV1;