import express from 'express';
import agentController from '../controllers/agentController.js';

const router = express.Router();

router
   .get('/agents', agentController.getAgents)
   .get('/agents/:id', agentController.getAgentById)
   .post('/agents', agentController.registerAgent)
   .put('/agents/:id', agentController.updateAgent)
   .delete('/agents/:id', agentController.getAgentByIdAndDelete);

export default router;
