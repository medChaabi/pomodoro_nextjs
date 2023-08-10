import {connect} from '@/config/db';
import User from '@/models/userModel';
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken";

connect() 

export async function POST(request:NextRequest){
    const reqBody = await request.json()
    const {email,password}=reqBody
    const user = await User.findOne({email})
    if(!user){
        return NextResponse.json({
            message:"user not exist!"
        })
    }
    const validPassword = bcryptjs.compare(password,user.password)
    if(!validPassword){
        return NextResponse.json({
            message:"Password incorect Try again!!"
        })
    }
    // create token data
    const tokenData={
        id:user._id,
        username:user.username,
        email:user.email
    }
    // create token
    const token = await jwt.sign(tokenData,"nextjsframework",{expiresIn:"1d"})
    const  response = NextResponse.json({
        message:"login successful",
        success: true
    })
    response.cookies.set("token", token, {httpOnly:true})

    return response

}