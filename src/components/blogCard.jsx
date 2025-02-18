"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Blog({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-gray-200 rounded-2xl shadow-lg overflow-hidden p-6 max-w-sm mx-auto cursor-pointer transition-all flex flex-col items-center text-center"
      onMouseEnter={() => setIsHovered(true)}  // Start loop on hover
      onMouseLeave={() => setIsHovered(false)} // Stop loop when cursor leaves
    >
      {/* Circular Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
        <motion.img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1, // Only loop when hovered
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,  // Infinite loop when hovered, 0 when not
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Name & Title */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800">{data.name}</h2>
        <p className="text-sm text-gray-500">{data.title}</p>
      </div>

      {/* Description */}
      <motion.p
        className="mt-3 text-gray-600 text-sm leading-relaxed px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {data.des}
      </motion.p>
    </motion.div>
  );
}
