'use client';
import classNames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineBug } from "react-icons/ai";

const NavBar = () => {
    const path = usePathname();

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
                        <li className={classNames({
                            'text-zinc-900': path === item.link,
                            'text-zinc-500': path !== item.link,
                            'hover:text-zinc-800': true
                        })}>
                            <Link key={item.text} href={item.link}>{item.text}</Link>
                        </li>
                    )

                }

            </ul>
        </nav>
    )
}

export default NavBar