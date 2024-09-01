import React from 'react'
import desktopBackground from '../assets/bg2.png';

const CalltoActionSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${desktopBackground})`,
          minHeight: '350px',
        }}
      />
      <div className='flex justify-center items-center relative z-10 py-20'>
        <div className="text-center px-4 sm:px-8 lg:px-64">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold mb-4 text-white">
            Connect with us
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-light text-white">
            We are here to help you. Contact us to learn more about our AI solutions and how they can help you achieve your goals.
          </p>
          <button className="rounded-2xl py-2.5 px-7 bg-white text-black hover:bg-gray-100 text-base">
            Visit our Contact Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalltoActionSection
