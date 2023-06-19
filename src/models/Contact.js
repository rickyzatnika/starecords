import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
      unique: true,
      required: true,
    },

  },
  { timestamps: true }
);

let Contact;
try {
  Contact = mongoose.model("Contact");
} catch {
  Contact = mongoose.model("Contact", contactSchema);
}

export default Contact;