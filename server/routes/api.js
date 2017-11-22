import express from 'express';
import apiV1 from './v1';

const apiRouter = express.Router();

apiRouter.use(apiV1);
apiRouter.use('/v1', apiV1);

export default apiRouter;
