"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSideBar = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
   <section className='left_sidebar'>
    <nav className='flex flex-col gap-6'>
        <Link href="/" className='flex cursor-pointer items-center 
        pb-10 gap-1 max-lg:justify-center'>
        <Image src="/icons/logo.svg" alt='logo' width={23} height={23} />
        <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podcastr</h1>
        </Link>

        {
         sidebarLinks.map(({route,label,imgURL})=>{
            const isActive = pathname === route || pathname.startsWith(`${route}/`)
            return (
                <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-start",{
                    'bg-nav-focus border-r-4 border-orange-1':isActive
                })}>
                <Image src={imgURL} alt='label' width={24} height={24} />
                <p className='text-18'>{label}</p>
                </Link>
             )
         })
        }
    </nav>
   </section>
  )
}

export default LeftSideBar
