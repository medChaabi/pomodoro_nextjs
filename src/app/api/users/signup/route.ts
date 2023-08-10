import {connect} from '@/config/db';
import User from '@/models/userModel';
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from 'next/server';

connect()       

export async function POST(request:NextRequest){
    const reqBody = await request.json()
    const {username,email,password}=reqBody
    const user = await User.findOne({email})
    if(user){
        return NextResponse.json("User Exists!")
    }
    const salt = await bcryptjs.genSalt(10)
    const hasedPassword = await bcryptjs.hash(password,salt)
    const newUser = new User({
        username,
        email,
        password:hasedPassword
    })
    const savedUser = await newUser.save()
    console.log(savedUser)
    return NextResponse.json({
        message:"user created!",
        savedUser
    })
}