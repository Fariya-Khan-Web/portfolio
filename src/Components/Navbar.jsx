import React from 'react';
import logo from '../assets/icons/bear.png'

const Navbar = () => {

    const links =
        <>
            <li><a>Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Skills</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
        </>
    return (
        <div className='fixed w-full bg-[#335064] bg-opacity-30'>
            <div className="navbar md:max-w-[88%] mx-auto ">
                
                <div className="navbar-start">

                    <div className='flex items-center'>
                        <img className='w-10 h-10' src={logo} alt="" />
                        <a className="font-bold text-2xl md:text-3xl">Sana</a>
                    </div>
                </div>
                
                <div className='navbar-end'>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>

                    </div>

                    <div className="dropdown  align-self-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 -ml-[156px] p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;