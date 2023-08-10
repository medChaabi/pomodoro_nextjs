'use client'
import { logOut } from '@/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const NavBar = () => {
  const router = useRouter();
  function onLogout(): void {
    logOut()
    router.push("/login")
  }

  return (
    <>
    <div className="navbar bg-base-300">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">Pomodoro</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 btn text-white">
            <li><Link href='/login'>Login</Link></li>
            <li><Link href='/signup'>Signup</Link></li>
            <li><Link href='#' onClick={onLogout}>Logout</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar