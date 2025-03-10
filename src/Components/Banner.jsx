import React from 'react';
import '../App.css'
import Sana from '../assets/whatspp-image.png'
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Banner = () => {
    return (
        <div id='banner' className='banner  md:pt-16' >
            <div className='max-w-screen-2xl w-[94%] mx-auto lg:min-h-[100vh] py-10 grid md:grid-cols-2 gap-12 items-center'>

                {/* small device picture */}
                <div className='md:hidden picture rounded-full w-[230px] h-[310px] mx-auto mt-10 bg-[#fdf3dd]/15 p-2 border-2 border-[#fdf3dd]'>
                    <img className='rounded-full w-full h-full border-2 border-[#fdf3dd] ' src={Sana} alt="" />
                </div>

                <div className=' -mt-16 md:mt-0 py-10'>
                    <p className='text-xl md:text-2xl'>Hi There</p>
                    <h1 className='heading my-2 text-4xl md:text-6xl'>I'M Fariya Khan Sana</h1>
                    <h3 className='text-2xl md:text-4xl my-2'>A Frontend Developer</h3>
                    <p className='text-sm md:text-base my-4'>I am a passionate web developer dedicated to crafting intuitive, responsive, and visually stunning websites. With a strong focus on clean code, user experience, and modern design, I bring ideas to life through creativity and technology.</p>
                    
                    <div className='flex gap-2 my-t'>
                        <button className='btn px-3 p-2 border bg-[#fdf3dd] text-[#335064] rounded-md'>View Resume</button>
                        <button className='btn bg-blur bg-transparent text-[#fdf3dd] px-3 p-2 border flex gap-2 items-center rounded-md'>Download<FaCloudDownloadAlt /></button>
                    </div>
                </div>

                {/* picture */}
                <div className='hidden md:block picture rounded-full md:w-[360px] md:h-[500px] lg:w-[480px] lg:h-[740px] bg-[#fdf3dd]/15 p-2 border-2 mx-auto border-[#fdf3dd]'>
                    <img className='rounded-full w-full h-full border-2 border-[#fdf3dd] ' src={Sana} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Banner;