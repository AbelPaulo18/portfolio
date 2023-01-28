import React from "react";
import { motion } from "framer-motion";

type Props = {};

export const About = (props: Props) => {
  const date = new Date();
  const totalYearsOfExperience: number = date.getFullYear() - 2020;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="portfolioSections"
    >
      <h3 className="titles">About</h3>

      <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        src="https://avatars.githubusercontent.com/u/85404813?v=4"
        className="-mb-20 md:mb-0 flex-shrink w-48 h-48 object-cover rounded-full md:rounded-md md:w-64 md:h-80 xl:w-[300px] xl:h-[400px] shadow-md shadow-[#1e1e]/10"
      />
      <div className="space-y-5 px-4 md:px-20">
        <h1 className="text-lg font-semibold uppercase text-gray-200">
          Every great design begins with a story
          <span className="text-[#1e1e]">!</span>
        </h1>

        <p className="text-left text-sm text-gray-400">
          Since the beginning of my journey as Software Developer nearly{" "}
          {totalYearsOfExperience} years ago. I've done some remote works as a
          freelancer, and collaborated with talented people to develop awesome
          projects. I'm quietly confident, fun, curious, and always studying to
          improve my Dev. Skills!{" "}
        </p>
      </div>
    </motion.div>
  );
};
