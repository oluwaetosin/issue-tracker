import { link } from 'fs';
import Link from 'next/link'
import React from 'react';
import { AiOutlineBug } from "react-icons/ai";

const NavBar = () => {
    const navItems = [
        {
            link: '/',
            text: 'Dashboard'
        },
        {
            link: '/issues',
            text: 'Issues'
        }
    ]
    return (
        <nav className='flex space-x-6 border-b px-5 h-20 mb-5 items-center text-2xl'>
            <Link href="/"><AiOutlineBug /></Link>
            <ul className='flex space-x-6'>
                {
                    navItems.map(item =>
                        <li className='text-zinc-500 hover:text-zinc-800 transition-colors'>
                            <Link key={item.text} href={item.link}>{item.text}</Link>
                        </li>
                    )

                }

            </ul>
        </nav>
    )
}

export default NavBar