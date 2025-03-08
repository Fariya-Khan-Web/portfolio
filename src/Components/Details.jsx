import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaGithub, FaGithubAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Details = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const foundProject = data.find(p => p.id.toString() === id);
                    setProject(foundProject || null);
                }
            })
            .catch(error => console.error("Error fetching projects:", error))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="text-center min-h-screen flex items-center justify-center">
                <p className="text-2xl font-semibold">Loading project details...</p>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="text-center min-h-screen flex items-center justify-center">
                <p className="text-2xl font-semibold text-red-500">Project not found</p>
            </div>
        );
    }

    return (
        <div className='min-h-screen'>
            <Navbar />

            <div className='max-w-screen-xl mx-auto py-10 w-[94%]'  data-aos="zoom-out">
                <div className='about-me border border-[#9ca4aa] p-5 md:p-8 lg:p-10 rounded-md my-20 text[#3a586d]'>

                    <h1 className='text-4xl font-bold mb-4'>{project.name}</h1>
                    <img className='w-full rounded-lg mb-5' src={project.image} alt={project.name} />
                    <p className='text-lg '>{project.description}</p>

                    <div className='mt-5 flex gap-4'>
                        <a href={project?.liveLink} className='btn  btn-sm px-4 p-2 border bg-[#fdf3dd] text-[#335064] rounded-md'>
                            Live Demo
                        </a>
                        <a href={project?.githubRepo} className='btn  btn-sm font-medium bg-blur bg-transparent text-[#fdf3dd] px-3 p-2 border flex gap-2 items-center rounded-md'>
                            GitHub Repo <FaGithub />
                        </a>
                    </div>

                    <div className='mt-6 flex'>
                        <div className='text-xl md:text-2xl underline min-w-fit'>Tech & Tools-</div>
                        <div className='text-md md:text-lg flex flex-wrap'>{project.techStack.map(tool => <div className='ml-4'>{tool} |</div>)}</div>
                    </div>


                    <h3 className='text-xl md:text-2xl underline mt-6'>Challenges faced</h3>
                    <p className='text-lg '>{project.challenges}</p>
                    <h3 className='text-xl md:text-2xl underline'>Potential improvements</h3>
                    <p className='text-lg '>{project.futurePlans}</p>

                    <Link to={'/'} className='btn  btn-sm font-medium bg-blur bg-transparent text-[#fdf3dd] px-3 p-2 border rounded-md mt-6'>Go Back</Link>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Details;
