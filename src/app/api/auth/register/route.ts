import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // check if user already existe
    const userEmail = await User.findOne({ email });
    const userUsername = await User.findOne({ username });
    if (userEmail || userUsername)
      return NextResponse.json(
        { error: "username or email already in use!" },
        { status: 400 }
      );

    // hashing password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // save user
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();

    // success!
    return NextResponse.json({
      message: "Signup Successfull!",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
