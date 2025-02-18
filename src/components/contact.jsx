import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Contact() {
    const { register, reset, handleSubmit } = useForm();
       useEffect(() => {
              Aos.init({ duration: 1000, once:false });
            }, []);

    const onSubmit = () => {
        reset();
    };

    return (
        <div className="w-full flex flex-col md:flex-row justify-between my-4 px-4 md:px-12">
            {/* Left Section - Contact Info */}
            <div 
                className="flex flex-col w-full md:w-[45%] bg-white shadow-2xl p-6 rounded-2xl"
               
                data-aos="fade-right"

            >
                <h2 className="text-3xl font-semibold text-green-500 mb-4">📍 Location</h2>
                <p className="text-gray-600">MAT JOURNALS PVT. LTD.</p>
                <p className="text-gray-500">Office No-301, 2nd Floor, Plot No: CS-4, Gyan Khand-2</p>
                <p className="text-gray-500">Indirapuram, Ghaziabad, Uttar Pradesh, India</p>
                <p className="text-gray-500">Pin Code: 201014</p>

                <h2 className="text-2xl font-semibold text-green-500 mt-6">📞 Phone Numbers</h2>
                <ul className="space-y-2 text-gray-600">
                    <li>+91-8506060024</li>
                    <li>+91-8506060041</li>
                    <li>0120-4289321</li>
                    <li>0120-4289322</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-500 mt-6">✉️ Email</h2>
                <ul className="space-y-2 text-gray-600">
                    <li>info@matjournals.com</li>
                    <li>matjournals@gmail.com</li>
                </ul>
            </div>

            {/* Right Section - Contact Form */}
            <div 
                className="w-full md:w-[45%] bg-white shadow-2xl p-9 rounded-2xl"
             
                data-aos="fade-left"
            >
                <h2 className="text-3xl font-semibold text-green-500 mb-4 text-center">💬 Connect With Us</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <motion.label 
                        className="flex flex-col text-gray-600"
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="mb-1">Name</p>
                        <input 
                            type="text" 
                            placeholder="Enter your name"
                            {...register("name")}
                            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                        />
                    </motion.label>

                    <motion.label 
                        className="flex flex-col text-gray-600"
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="mb-1">Email</p>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            {...register("email")}
                            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                        />
                    </motion.label>

                    <motion.label 
                        className="flex flex-col text-gray-600"
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="mb-1">Message</p>
                        <textarea 
                            placeholder="Type your message..."
                            {...register("message")}
                            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all resize-none h-24"
                        ></textarea>
                    </motion.label>

                    <button 
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all hover:scale-[1.1]"
                    >
                        🚀 Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
