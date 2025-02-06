import React from 'react';
import me from '../assets/aboutMe.jpg'

const AboutMe = () => {
    return (
        <div id='about' className='max-w-screen-xl w-[94%] mx-auto pt-20 md:pt-32'>
            <div className='bg-blur about-me md:flex md: gap-4 lg:gap-6  p-5 bg-[#587183]  rounded-lg'>
                
                <div>
                    <img className=' w-full md:h-full rounded-md ' src={me} alt="" />
                </div>
                
                
                <div className='my-auto'>

                    <h1 className='text-2xl md:text-5xl my-2'>About Me</h1>
                    <p className='my-3'>Hi! I'm Sana, a 20 year old frontend developer. I have always been drawn to creativity, whether through art, design, or problem-solving. My passion for aesthetics and functionality naturally led me to web development.</p>
                    
                    <h3 className='text-xl md:text-2xl underline'>My Programming Journey</h3>
                    <p className=' my-3'>I started my coding journey with online courses and YouTube tutorials, exploring the endless possibilities of web development. Over time, I developed a love for crafting artistic, user-friendly websites that blend design with seamless functionality.</p>
                    
                    <h3 className='text-xl md:text-2xl underline'>Things I Do Beside Coading</h3>
                    <p className='my-3'>Beyond coding, I find inspiration in painting, where I can express my creativity in a different form. I’m also a Taekwondo player, which has taught me discipline, patience, and the importance of continuous learning. Additionally, I love reading books, as they open up new perspectives and fuel my creativity in both design and problem-solving.</p>

                </div>

            </div>

        </div>
    );
};

export default AboutMe;