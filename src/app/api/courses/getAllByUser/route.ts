import { connect } from "@/dbConfig/dbConfig";
import Course from "@/models/courseModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const userId = reqBody.id;

    const user = await User.findOne({_id: userId});

    const courses = await Course.find({
        enrolledUsers: {$in: [user._id]}
      });

    return NextResponse.json({
        message: "Courses Sent!",
        success: true,
        courses
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
