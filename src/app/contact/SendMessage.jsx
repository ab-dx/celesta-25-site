"use client";

import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import toast from "react-hot-toast";

const ContactSection = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("message", data.message);
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();
            if (result.success) {
                toast.success("Thank you! Your message has been sent, and we will get back to you shortly.");
                setData({ name: "", email: "", message: "" });
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("Server error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div>
            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 w-full  border-2 border-white p-6 md:h-[60vh] lg:h-[75vh] rounded-lg lg:w-[30vw]  h-full"
            >
                <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        className="p-2 border-2 rounded-lg text-white bg-transparent focus:outline-none focus:border-teal-600"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className="p-2 border-2 rounded-lg text-white bg-transparent focus:outline-none focus:border-teal-600"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Enter your message"
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        className="p-2 border-2 rounded-lg text-white bg-transparent focus:outline-none focus:border-teal-600"
                        required
                    />
                </div>
                <div className="flex justify-center items-center mt-4" >
                    <button
                        type="submit"
                        className={`${styles["btn"]} ${isSubmitting ? "opacity-50" : ""} `}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </motion.form>
        </div>
    )
}

export default ContactSection
