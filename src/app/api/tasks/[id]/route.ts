import { connect } from "@/config/db";
import Task from "@/models/taskModel";
import { NextRequest,NextResponse } from "next/server";



connect()
// export async function GET(request:NextRequest,{params}:any){
//     const {id} = params;
//     const singleTask = await Task.findById(id)
//     return NextResponse.json({
//         singleTask
//     },
//     {
//         status:200
//     })
// }


export async function PUT(request:NextRequest,{params}:any) {
    const {id} = params;
    const {title,note}=await request.json();
    await Task.findByIdAndUpdate(id,{title,note})
    return NextResponse.json({
        message:"task updated!"
    },
    {
        status:200
    })

}