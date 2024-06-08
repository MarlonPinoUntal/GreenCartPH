import React from 'react'
import Image from 'next/image'

export default function Widget() {
  return (
    <div className="flex flex-col items-center p-4 font-Outfit">
      <h1 className="text-[30px] font-black  text-green-600 mb-10">Real-Time Price List</h1>
      <div className="flex flex-wrap justify-center gap-[2rem]">
        
        <div className="bg-white shadow-xl shadow-green-900 rounded-lg p-4 w-[25rem]">
          <div className=''>
          <h2 className="text-xl font-semibold text-green-600 mb-4 text-center">Fruits</h2>
          <ul>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Apple
              </span>
              <span>₱10 per pcs./₱250 per kilo</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Apple
              </span>
              <span>₱10 per pcs./₱250 per kilo</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Apple
              </span>
              <span>₱10 per pcs./₱250 per kilo</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Apple
              </span>
              <span>₱10 per pcs./₱250 per kilo</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Apple
              </span>
              <span>₱10 per pcs./₱250 per kilo</span>
            </li>
            </ul>
            </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-4 w-80 relative">
          <div className="grid grid-cols-3 gap-4 mt-[3rem]">
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Apple" />
              <p>Apple</p>
              <p>₱250 per kilo</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Apple" />
              <p>Apple</p>
              <p>₱250 per kilo</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Apple" />
              <p>Apple</p>
              <p>₱250 per kilo</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Eggplant" />
              <p>Eggplant</p>
              <p>₱250 per kilo</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Eggplant" />
              <p>Eggplant</p>
              <p>₱250 per kilo</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Eggplant" />
              <p>Eggplant</p>
              <p>₱250 per kilo</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Cabbage" />
              <p>Cabbage</p>
              <p>₱250 per kilo</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Cabbage" />
              <p>Cabbage</p>
              <p>₱250 per kilo</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Cabbage" />
              <p>Cabbage</p>
              <p>₱250 per kilo</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 rounded-bl-lg">
            Most Popular
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-4 w-72">
          <h2 className="text-xl font-semibold text-green-600 mb-4">Vegetables</h2>
          <ul>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Eggplant
              </span>
              <span>₱250 per kilo</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Eggplant
              </span>
              <span>₱250 per kilo</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Eggplant
              </span>
              <span>₱250 per kilo</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Eggplant
              </span>
              <span>₱250 per kilo</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <span className="bg-green-600 rounded-full w-3 h-3 mr-2"></span> Eggplant
              </span>
              <span>₱250 per kilo</span>
            </li>
          </ul>
        </div>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded-full mt-4 flex items-center">
        <img src="https://placehold.co/20x20" alt="Cart" className="mr-2" /> BUY NOW
      </button>
    </div>
  )
}

