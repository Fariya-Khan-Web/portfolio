import React from 'react';
import '../App.css'
import Sana from '../assets/whatspp-image.png'

const Banner = () => {
    return (
        <div className='banner min-h-[100vh]' >
            <div className='max-w-screen-xl w-[94%] mx-auto min-h-screen grid md:grid-cols-2 gap-20 items-center'>
                
                <div className='md:hidden picture rounded-full w-[280px] h-[350px] mx-auto mt-10 bg-[#fdf3dd]/15 p-2 border-2 border-[#fdf3dd]'>
                    <img className='rounded-full w-full h-full border-2 border-[#fdf3dd] ' src={Sana} alt="" />
                </div>

                <div className='pb-14 -mt-40'>
                    <p className='text-xl md:text-2xl'>Hi There</p>
                    <h1 className='heading my-2 text-4xl md:text-6xl'>I'M Fariya Khan Sana</h1>
                    <h3 className='text-2xl md:text-4xl my-2'>A Frontend Developer</h3>
                    <p className='text-sm md:text-base'>I am a passionate web developer dedicated to crafting intuitive, responsive, and visually stunning websites. With a strong focus on clean code, user experience, and modern design, I bring ideas to life through creativity and technology.</p>
                </div>

                {/* picture */}
                <div className='hidden md:block picture rounded-full w-[580px] h-[740px] bg-[#fdf3dd]/15 p-2 border-2 border-[#fdf3dd]'>
                    <img className='rounded-full w-full h-full border-2 border-[#fdf3dd] ' src={Sana} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Banner;