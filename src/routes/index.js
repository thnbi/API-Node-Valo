import express from 'express';
import agentsRoutes from './agentsRoutes.js';

const routes = (app) => {
   app.route('/').get((req, res) => {
      res.status(200).send('Api is running!');
   })

   app.use(
      express.json(), 
      agentsRoutes
   );
}

export default routes;
