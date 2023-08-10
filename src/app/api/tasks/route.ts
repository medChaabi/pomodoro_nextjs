import { connect } from "@/config/db"
import Task from "@/models/taskModel"
import { NextRequest, NextResponse } from "next/server"
import { cookies } from 'next/headers';

connect()
export async function POST(request:NextRequest){
    // console.log(cookies().get("token"))
    const user_id = cookies().get("token")
    const reqBody = await request.json()
    const {title, note} = reqBody
    const newTask = new Task({ 
        title,
        note
        // user_id
    })
    const saveTask = await newTask.save()
    return NextResponse.json({
        message:"Topic created!",
        saveTask
    },
    {
        status:201
    })
    
}

export async function GET(){
    const Tasks = await Task.find()
    return NextResponse.json({
        Tasks
    },
    {
        status:200
    })

}

export async function DELETE(request:NextRequest){
    const id = request.nextUrl.searchParams.get("id");
    await Task.findByIdAndDelete(id);
    return NextResponse.json({
         message:"topic deleted!"
    },
    {
        status:200
    })
}
