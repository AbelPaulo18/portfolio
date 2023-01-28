import React from "react";
import { motion } from "framer-motion";

type Props = {};

export const WorkExperience = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="portfolioSections"
    >
      <h1 className="titles">Experience</h1>
    </motion.div>
  );
};
