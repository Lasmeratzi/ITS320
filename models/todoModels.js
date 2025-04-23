import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
}, { timestamps: true }); // optional: adds createdAt and updatedAt

export default mongoose.model('Todo', TodoSchema);
