import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Please provide the course code"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please provide a title!"],
  },
  description: {
    type: String,
    default: "No description available",
  },
  profileImage: String,
  faculty: String,
  schedule: [
    {
      day: String,
      time: String,
    }
  ],
  enrolledUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Course =
  mongoose.models.courses || mongoose.model("courses", courseSchema);
export default Course;
