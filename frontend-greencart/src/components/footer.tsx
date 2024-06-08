import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Facebook, LinkedIn, QRCode, AppGallery, AppStore, GooglePlay, LogoOnly, Twitter } from '../../public'


const Footer = () => {
    return (
      <footer className="bg-[#DCE0DF] text-zinc-700 p-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
          <div>
            <div className='flex flex-row'>
              <Image
                src={LogoOnly}
                alt="QR Code"
                width={100}
                height={100}
                className='object-cover'
              />
              <p className="mb-4 mt-[20px] text-[#336841]"><span className='text-[#846D1A]'>Where Quality Meets Clarity </span><br /> Download the App</p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg">
              <div className="mr-4">
                <Image
                  src={QRCode}
                  width={200}
                  height={200}
                  alt="qrcode"
                  className='object-cover rounded-lg'
                />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <a href="/aboutus"><Image
                    src={GooglePlay}
                    width={192}
                    height={190}
                    alt="Googleplay"
                    className='object-cover'
                  /></a>
                </div>
                <div className="flex items-center mb-2">
                  <a href="/"><Image
                    src={AppStore}
                    width={195}
                    height={200}
                    alt="app store"
                    className='object-cover'
                  /></a>
                </div>
                <div className="flex items-center">
                  <a href="/"><Image
                    src={AppGallery}
                    width={195}
                    height={200}
                    alt="appgallery"
                    className='object-cover'
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">Customer Service</h3>
            <ul className="space-y-2 text-[#336841]">
              <li><Link href="/">Help Center</Link></li>
              <li><Link href="/">Shipping and Delivery</Link></li>
              <li><Link href="/">Question?</Link></li>
              <li><Link href="/">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">GreenCartPH</h3>
            <ul className="space-y-2 text-[#336841]">
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link href="/">GreenCartPH Blog</Link></li>
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Media Contract</Link></li>
              <li><Link href="/">Intellectual Property Protection</Link></li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-blue-500"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-light-blue-400"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        {/* Copyright text with background color */}
        <div className="absolute inset-x-0 mt-[1rem] bg-white py-4">
          <div className="text-center text-[#336841] md:justify-start">
            &copy; 2024 All rights Reserved by GreenCartPH
            <div className='flex flex-row justify-end mt-[-30px]'>
              <a href="/"><Image
                src={Facebook}
                width={30}
                height={30}
                alt="appgallery"
                className='object-cover'
              /></a>
              <a href="/"><Image
                src={LinkedIn}
                width={30}
                height={30}
                alt="appgallery"
                className='object-cover'
              /></a>
              <a href="/"><Image
                src={Twitter}
                width={30}
                height={30}
                alt="appgallery"
                className='object-cover'
              /></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }

export default Footer
