import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[150px] w-full green-pink-gradient p-[1px] rounded-[40px] shadow-card'>

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[40px] py-5 px-4 min-h-[100px] flex items-center flex-col'
      >
        <img
          src={icon}
          alt=''
          className='w-40 h-32 object-contain'
        />

      </div>
  </Tilt>
);

const Client = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Clients</h2>
      </motion.div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Client, "client");
