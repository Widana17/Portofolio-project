"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading >About me</SectionHeading>
      <p className="mb-3">
      I am a student from SMK Ti Bali Global Denpasar majoring in{" "}
        <span className="font-medium">RPL</span>, I am a web developer with 
        1 year experience.the languages ​​I'm currently learning are :
        <span className="font-medium">
         C++, HTML, CSS, JavaScript, Bootstraps, Next JS, TypeScript, React, and Tailwind CSS.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
         video games, and playing football.
      </p>
    </motion.section>
  );
}