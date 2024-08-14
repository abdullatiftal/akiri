'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const company = {
        title: 'Emaar Builders',
        type: 'Real Estate'
    }
    const path = usePathname()
    const routes = [
        '/',
        '/new-request',
        '/request',
        '/reports',
        '/notifications',
        '/settings',
        '/contact'
    ]
    const routeNameMapping: { [k: string]: string } = {
        '/': 'dashboard',
        '/new-request': 'new request',
        '/request': 'request',
        '/reports': 'reports',
        '/notifications': 'notifications',
        '/settings': 'settings',
        '/contact': 'contact akiri'
    }
    const isRouteActive = (route: string, path: string): boolean => {
        if (path === '/' && route === '/') return true
        if (route !== '/' && path.includes(route)) return true
        if (route === '/projects/ready' && path.includes('project')) return true
        return false
    }
    return (
        <Fragment>
            <div className='flex flex-col gap-[6px] px-[11px] pt-[17px] pb-[19px] border-b-[0.5px] border-solid border-custom'>
                <h4 className='font-bold text-lg leading-5'>{company.title}</h4>
                <p className=''>{company.type}</p>
            </div>
            <div className='flex flex-col w-full gap-[22px] mt-[22px] sidebar-menu'>
                {routes.map((route) => (
                    <Link key={route} href={route + '/'} className=''>
                        <div
                            className={`${
                                isRouteActive(route, path) ? 'is-active' : ''
                            }  px-2 pt-[0px] flex flex-row gap-[14px] items-center justify-start sidebar-menu_item`}
                        >
                            <div className='w-[24px] h-[24px] relative flex flex-row gap-[14px]'>
                                <Image
                                    src={`/icons/${routeNameMapping[route]}.svg`}
                                    width={0}
                                    height={0}
                                    alt='Dashboard'
                                    fill={true}
                                />
                            </div>
                            <p className='font-medium capitalize'>
                                {routeNameMapping[route]}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </Fragment>
    )
}

export default Sidebar
