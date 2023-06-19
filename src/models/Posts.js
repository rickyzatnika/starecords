import mongoose from "mongoose";

const { Schema } = mongoose;


const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
  }
);


let Posts;
try {
  Posts = mongoose.model("Posts");
} catch {
  Posts = mongoose.model("Posts", postSchema);
}

export default Posts;

