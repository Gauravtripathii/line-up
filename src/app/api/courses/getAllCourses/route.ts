import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Course from "@/models/courseModel";

connect();

export async function GET() {
  try {
    const courses = await Course.find();
    return NextResponse.json({
      message: "Fetched all the courses successfully!",
      success: true,
      courses,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
