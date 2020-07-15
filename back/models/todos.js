const { Schema, model } = require("mongoose");
const { ObjectId } = require("mongoose").Schema.Types;

const todoSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  author: {
      type: ObjectId,
      ref: "User",
    },
    done:{
      type: Boolean,
      default: false
    },
    important:{
      type: Boolean,
      default: false
    }
});

const Todo = model("Todo", todoSchema);

module.exports = Todo;

