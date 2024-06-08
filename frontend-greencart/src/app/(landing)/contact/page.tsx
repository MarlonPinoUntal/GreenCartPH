import React from 'react'
import Image from 'next/image';

export default function Widget() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800">
      <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/800x400')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">Get in Touch with Us!</h1>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg -mt-16 mx-4 md:mx-16 lg:mx-32">
        <h2 className="text-center text-green-700 dark:text-green-300 text-xl font-semibold mb-4">Feel free to contact us.</h2>
        <p className="text-center text-zinc-700 dark:text-zinc-300 mb-8">We are here to answer all your questions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex items-center justify-center mb-2">
              <Image src="/logo3.png" alt="phone" width={40} height={40} />
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">Call us</p>
            <p className="text-zinc-900 dark:text-zinc-100 font-semibold">+639363875641</p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <Image src="/logo3.png" alt="address" width={40} height={40} />
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">Address</p>
            <p className="text-zinc-900 dark:text-zinc-100 font-semibold">The Bird Sheet St., Mabolo, Luyor, Pilipinas</p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <Image src="/logo3.png" alt="email" width={40} height={40} />
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">Email</p>
            <p className="text-zinc-900 dark:text-zinc-100 font-semibold">bintoy@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-16 lg:mx-32">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153167!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8d7f4a0e6e5!2sEnvato!5e0!3m2!1sen!2sau!4v1613963621741!5m2!1sen!2sau" className="w-full h-[500px] border-0" loading="lazy"></iframe>
        <p className="text-center text-zinc-700 dark:text-zinc-300 mt-2">Use ctrl + scroll to zoom the map</p>
      </div>
    </div>
  );
}
