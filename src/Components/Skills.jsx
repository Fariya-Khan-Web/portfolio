import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { RiFirebaseLine, RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiVitess } from 'react-icons/si';
import { RiExchangeLine } from "react-icons/ri"
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
    return (
        <div id='skills' className='pt-32  text-[#3a586d] max-w-screen-xl w-[94%] mx-auto '>
            <h1 className='text-5xl'>What I Bring to the Table</h1>
            <p className='md:w-1/2 mt-4'>In the last 8 months, I have gained a significant amount of knowledge and confidence in these technologies</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-16'>

                <div data-aos="zoom-in-up" className='bg-blur border border-white rounded-md dropdown-content bg-light p-4 py-8'>
                    <h4 className='text-3xl text-center '>Frontend</h4>
                    <div className='grid grid-cols-3 md:grid-cols-5 gap-2 mt-8'>
                        <div className='text-center'>
                            <FaHtml5 className='text-5xl md:text-6xl mx-auto' />
                            <p>HTML</p>
                        </div>
                        <div className='text-center'>
                            <FaCss3Alt className='text-5xl md:text-6xl mx-auto' />
                            <p>CSS</p>
                        </div>
                        <div className='text-center'>
                            <RiTailwindCssFill className='text-5xl md:text-6xl mx-auto' />
                            <p>Tailwind</p>
                        </div>
                        <div className='text-center'>
                            <IoLogoJavascript className='text-5xl md:text-6xl mx-auto' />
                            <p>JS</p>
                        </div>
                        <div className='text-center'>
                            <FaReact className='text-5xl md:text-6xl mx-auto' />
                            <p>ReactJS</p>
                        </div>
                        
                    </div>

                </div>

                <div data-aos="zoom-in-up" className='bg-blur border border-white rounded-md dropdown-content bg-light p-4 py-8'>
                    <h4 className='text-3xl text-center '>Backend</h4>
                    <div className='grid grid-cols-3 md:grid-cols-5 gap-2 mt-8'>
                        <div className='text-center'>
                            <SiExpress className='text-5xl md:text-6xl mx-auto' />
                            <p>ExpressJS</p>
                        </div>
                        <div className='text-center'>
                            <IoLogoNodejs className='text-5xl md:text-6xl mx-auto' />
                            <p>NodeJS</p>
                        </div>
                        <div className='text-center'>
                            <SiMongodb className='text-5xl md:text-6xl mx-auto' />
                            <p>MongoDB</p>
                        </div>
                        <div className='text-center'>
                            <RiFirebaseLine className='text-5xl md:text-6xl mx-auto' />
                            <p>Firebase</p>
                        </div>
                        <div className='text-center'>
                            <RiExchangeLine className='text-5xl md:text-6xl mx-auto' />
                            <p>Rest API</p>
                        </div>
                        
                    </div>

                </div>

                <div data-aos="zoom-in-up" className='bg-blur border border-white rounded-md dropdown-content bg-light p-4 py-8 '>
                    <h4 className='text-3xl text-center '>Tech & Tools</h4>
                    <div className='grid grid-cols-3 md:grid-cols-5 gap-2 mt-8'>
                        <div className='text-center'>
                            <VscVscode className='text-5xl md:text-6xl mx-auto' />
                            <p>VS code</p>
                        </div>
                        <div className='text-center'>
                            <FaGitAlt className='text-5xl md:text-6xl mx-auto' />
                            <p>Git</p>
                        </div>
                        <div className='text-center'>
                            <FaGithub className='text-5xl md:text-6xl mx-auto' />
                            <p>Github</p>
                        </div>
                        <div className='text-center'>
                            <SiVitess className='text-5xl md:text-6xl mx-auto' />
                            <p>Vite</p>
                        </div>
                        
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Skills;