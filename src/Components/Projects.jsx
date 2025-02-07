import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, []);

    return (
        <div id='project' className='max-w-screen-xl w-[94%] mx-auto pt-20 text-[#3a586d]'>
            <h1 className='text-center text-5xl'>My Projects</h1>
            <p className='text-center md:w-2/3 mx-auto my-4'>
                A collection of projects where creativity meets technology. Each one is built with modern tools and a passion for crafting smooth, responsive, and engaging web experiences.
            </p>

            <div className='grid md:grid-cols-2 gap-6'>
                {projects?.map(project => (
                    <div key={project.id} data-aos={project.id%2===0? "fade-left":  "fade-right"} className='rounded-lg border bg-light border-white p-3 grid grid-cols-2 gap-3'>
                        <img className='rounded-md h-full w-full object-cover border' src={project.image} alt={project.name} />
                        <div>
                            <h3 className='text-3xl font-semibold'>{project.name}</h3>
                            <p className='my-2'>{project.description.substring(0, 80)}...</p>
                            <Link to={`/project/${project.id}`} className='px-3 py-[2px] border border-[#3a586d] rounded hover:bg-[#3a586d] hover:text-white transition'>
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
