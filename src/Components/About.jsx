import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-12 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        Beebox Studios is an AR/VR/Web3D solutions provider located at IIT Madras Research Park in Chennai, India. Founded in 2017, it is incubated by IIT Madras Incubation Cell, one of the most reputed technology incubators in India.We are known for delivering cutting-edge technology solutions globally and has a team of highly skilled and experienced professionals who design and develop innovative AR and VR solutions.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
