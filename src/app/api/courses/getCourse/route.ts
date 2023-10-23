import { connect } from "@/dbConfig/dbConfig";
import Course from "@/models/courseModel";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { code } = reqBody;

    const course = await Course.findOne({ code });
    if (!course)
      return NextResponse.json({ error: "Course Not Found!" }, { status: 400 });

    return NextResponse.json({
      message: "Course fetched successfully!",
      success: true,
      course,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
