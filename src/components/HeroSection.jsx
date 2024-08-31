import React from 'react';
import desktopBackground from '../assets/bg.png';


const HeroSection = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            { }
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${desktopBackground})`,
                    filter: 'blur(3px)',
                    zIndex: -1,
                    height: 'calc(100vh - 70px)',
                }}
            />

            <div className='flex justify-center items-center h-full relative z-10'>
                <div className="text-center px-64">
                    <h1 className="text-6xl lg:text-6xl font-bold mb-4 text-white whitespace-nowrap">
                        Making AI work for you
                    </h1>

                    <p className="text-lg lg:text-2xl mb-8 text-white">
                        Unlock the power of AI to enhance your life. From automating tasks to gaining valuable insights, discover how to harness AI technology to achieve your goals.
                    </p>
                    <button className="rounded-2xl py-2.5 px-7 bg-white text-black hover:bg-gray-100 text-base">
                    Explore Cisco AI
</button>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
