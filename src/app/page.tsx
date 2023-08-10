"use client"
import React from 'react'

import {  ManageTask, Timer } from "@/components";

export default function Home(){
  return (
    <div className="flex max-w-4xl flex-col items-center justify-between m-auto mx-auto">
      <Timer/>
      <ManageTask/>
    </div>
  )
}
