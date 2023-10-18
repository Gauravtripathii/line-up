import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        // find user
        const user = await User.findOne({email});

        // exception
        if (!user)
            return NextResponse.json({error: "User dose not exist!"}, {status: 400});

        // check password
        const validPassword = await bcryptjs.compare(password, user.password);

        // exception
        if (!validPassword)
            return NextResponse.json({error: "Invalid Password!"}, {status: 400});

        // create token data
        const tokenData = {
            _id: user._id,
            email: user.email,
            username: user.username,
        }

        // create token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});

        const response = NextResponse.json({
            message: "Login Successfull!",
            success: true,
        });

        response.cookies.set("token", token, {httpOnly: true});
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
