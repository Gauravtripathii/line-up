import { connect } from "@/dbConfig/dbConfig";
import Course from "@/models/courseModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, code } = reqBody;

    const user = await User.findOne({ email }).select("_id");
    if (!user)
      return NextResponse.json(
        { message: "User does not exist!" },
        { status: 400 }
      );

    const course = await Course.findOne({ code });
    if (!course)
      return NextResponse.json(
        { error: "This course does not exist!" },
        { status: 400 }
      );

    course.enrolledUsers = [...course.enrolledUsers, user._id];
    await course.save();

    return NextResponse.json({ message: "Course Added!", success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
