import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Card({ item }) {
   useEffect(() => {
      AOS.init({ duration: 1000 , once: true });
    }, []);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full md:w-1/3 lg:w-[345px] h-[320px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
      data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-5 rounded-xl bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col items-center text-center text-white">
        {/* Icon */}
        <div className="bg-white/80 p-3 rounded-full shadow-md">
          <img src={item.icon} alt="icon" className="w-10 h-10 object-contain" />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 text-sm"
        >
          {item.des}
        </motion.p>
      </div>
    </motion.div>
  );
}
