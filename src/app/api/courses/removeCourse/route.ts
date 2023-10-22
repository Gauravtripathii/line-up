import { connect } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import Course from "@/models/courseModel";
import mongoose from "mongoose";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { userId, code } = reqBody;

    const course = await Course.findOne({ code });
    if (!course)
      return NextResponse.json({ error: "Course not found!" }, { status: 400 });
    const userIdObject = new mongoose.Types.ObjectId(userId);
    // console.log(typeof(course.enrolledUsers), typeof(userId))
    course.enrolledUsers = course.enrolledUsers.filter((item: any) => !item.equals(userIdObject));
    // console.log(course.enrolledUsers)
    await course.save();

    return NextResponse.json({ message: "Course Removed!", success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
