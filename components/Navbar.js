import React from 'react'
import Link from 'next/link'


export default function Navbar() {
    return (
        <div className="bg-blue-500">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <span className="font-bold uppercase text-white tracking-tighter">
                                { process.env.appName }
                            </span>
                        </Link>
                    </div>
                
                    <div className="flex items-center">
                        <a className="text-blue-200 hover:text-white py-5 px-3" href="/about">
                            About
                        </a>
                        <a className="text-blue-200 hover:text-white py-5 px-3" href="/login">
                            Login
                        </a>
                        <a className="text-blue-200 hover:text-white py-5 px-3"href="/register">
                            Register
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}
