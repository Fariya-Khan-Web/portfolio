import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center text-[#3a586d] border-t border-[#bbbfc2]  p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - Website built by SANA</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;