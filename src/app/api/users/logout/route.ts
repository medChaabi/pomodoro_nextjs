import { NextResponse } from 'next/server';


export async function GET() {
    const  response = NextResponse.json({
        message:"login successful",
        success: true
    })

    response.cookies.set("token", "", {httpOnly:true,expires:new Date})
    return response
}
