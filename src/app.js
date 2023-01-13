import express from "express";

const app = express();

app.use(express.json());

const agents = [
   { id: 0, agentName: "Jett", agentRole: "Duelist" },
   { id: 1, agentName: "Killjoy", agentRole: "Sentinel" },
   { id: 2, agentName: "Reyna", agentRole: "Duelist" },
]

app.get('/', (req, res) => {
   res.status(200).send('Api is running!');
})

app.get('/agents', (req, res) => {
   res.status(200).json(agents);
})

app.post('/agents', (req, res) => {
   if(!req.body.agentName || !req.body.agentRole) {
      return res.status(400).send('Agent name and role are required');
   }
   
   const newAgent = {
      id: agents.length,
      agentName: req.body.agentName,
      agentRole: req.body.agentRole
   }

   agents.push(newAgent);
   res.status(201).send('Agent added successfully');
})

app.put('/agents/:id', (req, res) => {
   let {id} = req.params;
   const agent = findAgentById(id);
   const updatedAgent = updateAgent(agent, req);
   res.json(updatedAgent);
})

app.get('/agents/:id', (req, res) => {
   let {id} = req.params;
   const agent = findAgentById(id);
   res.json(agent);
})

app.delete('/agents/:id', (req, res) => {
   let {id} = req.params;
   const index = findAgentIndexById(id);
   agents.splice(index, 1);
   res.send('Agent deleted successfully');
})

function findAgentById(id){
   let index = findAgentIndexById(id);
   const agent = agents[index];

   return agent;
}

function findAgentIndexById(id) {
   return agents.findIndex((agent) => agent.id == id);
}

function updateAgent(agentToUpdate, req) {
   if(!req.body.agentName || !req.body.agentRole) {
      return res.status(400).send('Agent name and role are required');
   }

   agentToUpdate.agentName = req.body.agentName;
   agentToUpdate.agentRole = req.body.agentRole;

   const updatedAgent = agentToUpdate;
   return updatedAgent;
}

export default app
