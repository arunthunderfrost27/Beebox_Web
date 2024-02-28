import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ModelsCanvas } from "./canvas";



const Web3d = () => {
  return (
    <>
    <div className="">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Web3D</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='xl:flex-3 6xl:h-auto md:h-[250px] h-[250px]'
      >
        <ModelsCanvas/>
      </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Web3d, "web");
