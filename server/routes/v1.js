import express from 'express';

import * as Events from '../controllers/eventController';

import * as Centers from '../controllers/centerController';

const event = new Events.default();
const center = new Centers.default();
const apiV1 = express.Router();


// API routes for GETing and POSTing events
apiV1.get('/events', event.getAllEvents);
apiV1.post('/events', event.createEvent);

// API routes for PUTing and DELETEing a particular event by its ID
apiV1.get('/events/:eventId', event.getEventById);
apiV1.put('/events/:eventId', event.editEventById);
apiV1.delete('/events/:eventId', event.deleteEventById);

// API routes for GETing and POSTing centers
apiV1.get('/centers', center.getAllCenters);
apiV1.post('/centers', center.addACenter);

// API routes for PUTing, GETing and DELETing centers
apiV1.get('/centers/:centerId', center.getCenterById);
apiV1.put('/centers/:centerId', center.editCenterById);
apiV1.delete('/centers/:centerId', center.deleteCenterById);

export default apiV1;
