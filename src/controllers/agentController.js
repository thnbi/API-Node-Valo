import agents from "../models/Agent.js";

class agentController {

   static getAgents = (req, res) => {
      agents.find((err, agents) => {
         if(err) {
            return res.status(500).send(err)
         }
         return res.status(200).json(agents);
      })
   }

   static getAgentById = (req, res) => {
      const {id} = req.params;
      agents.findById(id, (err, agent) => {
         if(err) {
            return res.status(400).send({message: `${err} - Invalid agent id`})
         }
         return res.status(200).send(agent);
      })
   }

   static registerAgent = (req, res) => {
      let newAgent = new agents(req.body);

      newAgent.save((err) => {
         if(err) {
            return res.status(500).send({message: `${err} - Error registering new agent`})
         }
         return res.status(201).send(newAgent.toJSON());
      })
   }

   static updateAgent = (req, res) => {
      const {id} = req.params;
      agents.findByIdAndUpdate(id, { $set: req.body }, (err) => {
         if(err) {
            return res.status(500).send({message: `${err} - Error updating agent`})
         }
         return res.status(200).send({message: "Agent updated successfully"});
      })
   }

   static getAgentByIdAndDelete = (req, res) => {
      const {id} = req.params;
      agents.findByIdAndDelete(id, (err) => {
         if(err) {
            return res.status(500).send({message: `${err} - Error deleting agent`})
         }
         return res.status(200).send({message: "Agent deleted successfully"});
      })
   }
}
export default agentController;
