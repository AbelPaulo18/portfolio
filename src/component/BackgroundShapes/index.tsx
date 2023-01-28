import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundShapes = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2 }}
      className="relative flex items-center justify-center "
    >
      <div className="absolute border rounded-sm border-[#333333] h-[100px] w-[100px] mt-52 animate-ping rotate-45" />
      <div className="absolute border rounded-sm border-[#49B61B] h-[250px] w-[250px] mt-52 opacity-10 rotate-45" />
      <div className="absolute border rounded-sm border-[#333333] h-[310px] w-[310px] mt-52 rotate-45 animate-pulse opacity-20" />
      <div className="absolute border rounded-sm border-[#49B61B] h-[450px] w-[450px] mt-52 animate-pulse opacity-20 rotate-45" />
      <div className="absolute border rounded-full border-[#333333] h-[600px] w-[600px] mt-52  rotate-45 opacity-10" />
    </motion.div>
  );
};
export default BackgroundShapes;
