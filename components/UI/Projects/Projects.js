import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import styles from "../../../styles/projects.module.css";
import data from "./data";

const cardAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y:0,
    opacity: 1,
    transition: {delay: custom * 0.2},
  }),
}

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  

  const renderCards = () => {
    const endIndex = showAll ? data.length : 3;

    return data.slice(0, endIndex).map((card, index) => (
      <div      
        key={index}
        className={styles.cardBox}
      >
        <h3>
          |
          <span>
            <Typewriter
              words={[card.title]}
              loop={Infinity}
              cursor
              cursorStyle={"_"}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <a href="#">Hover me</a>
          </span>
        </h3>

        <div className={styles.imgBox}>
          <img className={styles.imga} src={card.image} alt={card.title} />
        </div>
        <div className={styles.contetBox}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </div>
    ));
  };
  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
     className={styles.section}
     >
      <h1 onClick={toggleShowAll}>My Works</h1>
      <div className={`${styles.container} ${showAll && styles.container_active}`}>
        {renderCards()}
        
      </div>
      <span className={styles.showToggle} onClick={toggleShowAll}>
        {showAll ? "Hide" : "Show All"}
      </span>
      
    </motion.section>
  );
};

export default Project;
