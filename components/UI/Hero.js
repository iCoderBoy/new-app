import Image from "next/image";
import {
  AddAPhoto,
  Analytics,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useEffect } from "react";

import styles from "../../styles/hero.module.css";

const cardAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custon) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custon * 0.2 },
  }),
};

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={styles.hero}
    >
      <div className={styles.heroBox}>
        
        <div className={styles.content}>
          <motion.h1 variants={textAnimation}>
            Hi. I am{" "}
            <span>
              <Typewriter
                words={["<Salikh/>", "<Coder/>", "<Manager/>"]}
                loop={Infinity}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          <motion.p custom={1} variants={textAnimation}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            voluptas dolore quos molestiae at sequi dicta quia hic reprehenderit
            sapiente quo debitis, asperiores delectus eaque!
          </motion.p>
          <motion.a custom={2} href="#" variants={textAnimation}>
            Download CV
          </motion.a>
          <motion.a custom={3} href="#" variants={textAnimation}>
            Contact Me
          </motion.a>
        </div>
        <motion.div className={styles.imageSide}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className={styles.toogleOne}>
            <span>
              <Analytics fontSize="large" />
            </span>
            <h3>FullStack</h3>
          </div>
          <div className={styles.toogleTwo}>
            <span>
              <DesktopMacIcon fontSize="large" />
            </span>
            <h3>UI/UX</h3>
          </div>
        </motion.div>
      </div>
      <KeyboardDoubleArrowDown className={styles.scrollDown} />
    </motion.section>
  );
}
