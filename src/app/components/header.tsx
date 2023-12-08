'use client'

import Link from "next/link"

export default function Header() {
    return (
        <nav className="fixed w-full h-12 shadow-md rounded-b-lg bg-white">
            <div className="flex justify-center items-center h-full w-full">
                <div className="px-12 text-lg font-medium text-zinc-900 hover:text-zinc-400 hover:semi-bold">
                    <Link href='/'>
                        Home
                    </Link>
                </div>
                <div className="px-12 text-lg font-medium text-zinc-900 hover:text-zinc-400 hover:semi-bold">
                    <Link href='/day1'>
                        Day 1
                    </Link>
                </div>
                <div className="px-12 text-lg font-medium text-zinc-900 hover:text-zinc-400 hover:semi-bold">
                    <Link href='/day2'>
                        Day 2
                    </Link>
                </div>
                <div className="px-12 text-lg font-medium text-zinc-900 hover:text-zinc-400 hover:semi-bold">
                    <Link href='/day3'>
                        Day 3
                    </Link>
                </div>
                <div className="px-12 text-lg font-medium text-zinc-900 hover:text-zinc-400 hover:semi-bold">
                    <Link href='/about'>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
} 