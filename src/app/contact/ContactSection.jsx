"use client";

import React from 'react'
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div className=''>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col justify-center gap-10 text-xl  border-2 border-white rounded-lg p-6 w-full lg:w-[30vw] md:h-[60vh] lg:h-[75vh] h-full"
            >
                <div className="flex items-center gap-4">
                    <FaEnvelope className="tex-white text-2xl" />
                    <p>celesta@iitp.ac.in</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-white text-2xl" />
                    <div>
                        <p>Abhitesh Shukla</p>
                        <p>+91 78977 21774</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-white text-2xl" />
                    <div>
                        <p>Ananta Nanda</p>
                        <p>+91 73258 73426</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                    <div>
                        <p>Celesta Office, IIT Patna</p>
                        <p>Bihta, Patna</p>
                    </div>
                </div>

                <div className="mt-6 ">
                    <h3 className="text-xl font-medium text-white mb-4">Follow Us on social Media</h3>
                    <div className="flex gap-6 text-3xl">
                        <a href="https://www.instagram.com/celestaiitp_official?utm_source=ig_web_button_share_sheet&igsh=MXQ3b3RrdGdteWVkOA==" target="_blank" rel="noreferrer">
                            <FaInstagram className="hover:text-pink-400 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/company/celesta-iit-patna/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="hover:text-blue-400 transition-colors" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactSection
