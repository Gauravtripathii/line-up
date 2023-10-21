import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userID = getDataFromToken(request);
    const user = await User.findOne({ _id: userID });

    return NextResponse.json({
      message: "User Found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
