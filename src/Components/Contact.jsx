import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookSquare, FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {

    // service_rgcwznj
    // pub- 4k46wfdxA8KkBe56K
    // temp- template_4d9eagg

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rgcwznj', 'template_4d9eagg', form.current, {
                publicKey: '4k46wfdxA8KkBe56K',
            })
            .then(
                () => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Email sent successfully"
                    });
                },
                (error) => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Something went wrong. Try again later"
                    });
                },
            );
    };


    return (
        <div id='contact' data-aos="fade-up" className='max-w-screen-xl w-[94%] mx-auto my-20 mb:my-36'>
            <div className='grid md:grid-cols-2 gap-5 border border-white rounded-md p-6 about-me '>


                <div className='my-auto'>
                    <h1 className='text-4xl md:text-5xl my-5'>Contact Me</h1>

                    <div className='md:flex gap-2 my-5'>
                        <p className='flex items-center gap-1'><FaPhoneAlt />+8801575377660</p>
                        <p className='flex items-center gap-1'><MdOutlineMail />fariya.webdev@gmail.com</p>
                    </div>

                    <p className='underline mt-8'>My Social Links-</p>

                    <div className='flex gap-3 my-4'>
                        <a href="https://www.facebook.com/fariyakhansana">
                            <FaFacebookSquare className='text-3xl' />
                        </a>
                        <a href="https://www.linkedin.com/in/fariya-khan-sana/">
                        <FaLinkedinIn className='text-3xl' />

                        </a>
                        <a href="https://x.com/Fariya_Khan_">
                        <FaXTwitter className='text-3xl' />

                        </a>
                        <a href="https://github.com/Fariya-Khan-Web">

                        <FaGithub className='text-3xl' />
                        </a>
                    </div>

                </div>

                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label>Your Name</label><br />
                            <input type="text" name="user_name" className='input input-bordered border-[#fdf3dd] bg-transparent w-full' placeholder='Your Name' required /><br />

                        </div>

                        <div className='my-2'>
                            <label>Your Email</label><br />
                            <input type="email" name="user_email" className='input input-bordered border-[#fdf3dd] bg-transparent w-full' placeholder='Your Name' required /><br />

                        </div>

                        <div>
                            <label>Your Message</label><br />
                            <textarea name="message" className='textarea textarea-bordered border-[#fdf3dd] bg-transparent w-full' placeholder='Your Name' required /><br />

                        </div>
                        <input className='btn font-normal border bg-[#fdf3dd] rounded-md  w-full py-1 text-[#3a586d] my-2' type="submit" value="Send Email" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Contact;