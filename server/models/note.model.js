import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      enum: ["personal", "work", "ideas", "projects"],
      default: [],
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", NoteSchema);

export default Note;
