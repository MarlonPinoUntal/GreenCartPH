/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/header'
import {LandingPicture} from '../../public'

const Home = () => {
  return (
    <div className="relative">
      <Image
                  src={LandingPicture}
                  width={1440}
                  alt="appgallery"
                  className='object-cover w-full h-[60rem]'
                />
      <div className="absolute top-0 left-0 w-full h-[85vh] flex ">
        <div className='px-[10rem] flex items-center'>
        <h1
          className="text-white !text-8xl md:text-2xl font-bold p-4 font-fingerpaint"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          Delve into <br /> our Garden's <br /> Fresh Picks!
        </h1>
        </div>
      </div>
    </div>
  )
}

export default Home
