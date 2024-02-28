import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ModelsCanvas1 } from "./canvas";



const VR = () => {
  return (
    <>
    <div className="">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>VR</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='xl:flex-3 6xl:h-auto md:h-[250px] h-[250px]' >
        <ModelsCanvas1/>
      </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(VR, "vr");
