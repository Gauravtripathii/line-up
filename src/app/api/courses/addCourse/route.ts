import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Course from "@/models/courseModel";
import User from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { code, name, description, faculty, schedule, email } = reqBody;

    // find the user
    const user = await User.findOne({ email }).select("_id email");

    if (!user)
      return NextResponse.json({ error: "User not found!" }, { status: 400 });

    const newCourse = new Course({
      code,
      name,
      description,
      faculty,
      schedule,
      enrolledUsers: [user._id],
    });

    const savedCourse = await newCourse.save();

    return NextResponse.json({
      message: "Course added",
      success: true,
      savedCourse,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
