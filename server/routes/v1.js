import express from 'express';

import * as Events from '../controllers/eventController';

import * as Centers from '../controllers/centerController';

const event = new Events.default();
const center = new Centers.default();
const apiRoutes = express.Router();


// API routes for GETing and POSTing events
apiRoutes.get('/events', event.getAllEvents);
apiRoutes.post('/events', event.createEvent);

// API routes for PUTing and DELETEing a particular event by its ID
apiRoutes.get('/events/:eventId', event.getEventById);
apiRoutes.put('/events/:eventId', event.editEventById);
apiRoutes.delete('/events/:eventId', event.deleteEventById);

// API routes for GETing and POSTing centers
apiRoutes.get('/centers', center.getAllCenters);
apiRoutes.post('/centers', center.addACenter);

// API routes for PUTing, GETing and DELETing centers
apiRoutes.get('/centers/:centerId', center.getCenterById);
apiRoutes.put('/centers/:centerId', center.editCenterById);
apiRoutes.delete('/centers/:centerId', center.deleteCenterById);

export default apiRoutes;
