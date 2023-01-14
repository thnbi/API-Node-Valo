import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   role: { 
      type: String,
      required: true
   }
});

const agents = mongoose.model('agents', AgentSchema);

export default agents;
