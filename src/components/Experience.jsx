'use client'
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { experiences } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full'
    >
      <div className='bg-tertiary bg-opacity-70 p-5 rounded-2xl'>
        <div className='flex items-center gap-4 mb-4'>
          <div
            className='w-16 h-16 rounded-full flex items-center justify-center'
            style={{ backgroundColor: experience.iconBg }}
          >
            <Image
              src={experience.icon}
              alt={experience.company_name}
              className='w-12 h-12 object-contain'
            />
          </div>
          <div>
            <h3 className='text-white font-bold text-[24px]'>
              {experience.title}
            </h3>
            <p className='text-secondary text-[16px] font-semibold'>
              {experience.company_name}
            </p>
            <p className='text-secondary text-[14px]'>
              {experience.date}
            </p>
          </div>
        </div>
        <ul className='list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`point-${index}`}
              className='text-gray-300 text-[14px] pl-1'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <div className='relative'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What I have done so far</p>
          <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
        </motion.div>
        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
      </div>

      <div className='mt-20 flex flex-col gap-7'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

