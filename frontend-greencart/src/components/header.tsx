"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { QRGetApp, Logo, LogoOnly, QRCode } from '../../public'

const Navbar = () => {

    const [isClick, setisClick] = useState<boolean | null>(null);

    const toggleNavbar = () => {
        setisClick(prev => !prev)
    }
   
    return (
        <>
            <nav>
                <div className='bg-[#23483B] h-[5rem]'>
                    <div className='max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <Link href="/">
                                        <Image src={Logo}
                                            width={180}
                                            height={80}
                                            alt='logo'
                                            className='text-white mt-[1rem] object-cover ml-16'
                                            />
                                    </Link>
                                </div>
                            </div>
                            <div className='hidden md:block '>
                                <div className='ml-4 flex items-center space-x-4 p-2'>
                                    <Link href="/" className='text-white hover:text-[#95c4a1] font-semibold p-5'>
                                        Home
                                    </Link>
                                    <Link href="/aboutus" className='text-white hover:text-[#95c4a1] p-2'>
                                        About us
                                    </Link>
                                    <Link href="/contact" className='text-white hover:text-[#95c4a1] p-5'>
                                        Contact
                                    </Link>
                                    <button>
                                    <Link href="/pricing" className='text-white hover:text-[#95c4a1] p-5'>
                                        Pricing
                                    </Link>
                                    </button>
                                    <Link href="/getapp" className='text-white hover:text-[#95c4a1] bg-[#336841] hover:bg-[#2D5944] rounded-[560px] p-2 w-[7rem] text-center flex flex-row'>
                                        <Image
                                            src={QRGetApp}
                                            width={17}
                                            height={8}
                                            alt="qrcode"
                                        />&nbsp;
                                        Get App
                                    </Link>
                                    <Link href="/login" className='text-white hover:text-[#95c4a1] hover:bg-[#336841] outline outline-offset-0 rounded-[60px] p-2 w-[6rem] text-center'>
                                       Login
                                    </Link>
                                </div>
                            </div>
                            <div className="md:hidden flex items-center ">
                                <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'  onClick={toggleNavbar}>
                                    {isClick ? (
                                        <svg
                                            className='h-6 w-6'
                                            xmlns='http://www.w3.org/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className='h-6 w-6'
                                            xmlns='http://www.w3.org/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M4 6h16M4 12h16m-7 6h7'
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className='px-2 pt-3 pb-5 space-y-1 sm:px-3 bg-[#23483B]  lg:hidden'>
                        <Link href="/" className='text-white block hover:text-[#95c4a1] font-semibold p-2'>
                            Home
                        </Link>
                        <Link href="/" className='text-white block hover:text-[#95c4a1] p-2'>
                            About us
                        </Link>
                        <Link href="/" className='text-white block hover:text-[#95c4a1] p-2'>
                            Contact
                        </Link>
                        <Link href="/" className='text-white block hover:text-[#95c4a1] p-2'>
                            Pricing
                        </Link><br />
                        <Link href="/" className='text-white hover:text-[#95c4a1] bg-[#336841] hover:bg-[#2D5944] rounded-[50px] p-2 w-[7rem] text-center flex flex-row'>
                            <Image
                                src={QRCode}
                                width={17}
                                height={8}
                                alt="qrcode"
                            />&nbsp;
                            Get App
                        </Link>
                        <Link href="/" className='text-white block hover:text-[#95c4a1] hover:bg-[#2D5944] rounded-[50px] p-2 w-[6rem] text-center outline'>
                            Login
                        </Link>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
