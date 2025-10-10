'use client'
import Image from 'next/image'
import './sidebar.sass'
import HomeIco from '../../../../public/icons/home.svg'
import { HomeIcon } from '../icons/HomeIco'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
export default function Sidebar(){
    const pathname = usePathname()
    let links = [
        {
            id: 0,
            ico: 'ico-home',
            name: 'Главная',
            link: '/link'
        },
        {
            id: 1,
            ico: 'ico-discount',
            name: 'Купоны',
            link: '/discount'
        },
        {
            id: 2,
            ico: 'ico-notification',
            name: 'Главная',
            link: '#'
        },
        {
            id: 3,
            ico: 'ico-settings',
            name: 'Главная',
            link: '#'
        },
        {
            id: 4,
            ico: 'ico-dashboard',
            name: 'Главная',
            link: '#'
        },
    ]

    return(
        <aside className="sidebar">
            <ul>
                <li>
                    <div className='item logo'>
                        <div className='icon ico-logo'></div>
                    </div>
                </li>
                {
                    links.map((item)=>(
                        <li key={item.id} className={pathname == item.link ? 'active' : ''}>
                            <Link href={item.link} className={`item ${pathname == item.link ? 'active' : ''}`}>
                                <div className={`icon ${item.ico} ${pathname == item.link ? 'active' : ''}`}></div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='logout'>
                <div className='ico'></div>
            </div>
        </aside>
    )
}