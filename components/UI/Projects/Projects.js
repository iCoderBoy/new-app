import React, { useState, useEffect, useRef } from "react";
import cards from "./data";
import styles from "../../../styles/projects.module.css";
import { Typewriter } from "react-simple-typewriter";

const cardBoxWidth = 350; // Width of a single cardBox
const cardBoxHeight = 450; // Height of a single cardBox

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [scrollUp, setScrollUp] = useState(0);
  const showAllFunc = () => {
    setShowAll(!showAll);
  };
  return (
    <section className={styles.section}>
      <h1 onClick={showAllFunc}>My Works</h1>
      <div className={showAll ? styles.container_active : styles.container}>
        {cards.slice(0, showAll ? cards.length :3).map((card) => (
            <div className={styles.cardBox}>
            <h3>|<span><Typewriter
                            words={[`${card.title}`]}
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
              <img className={styles.imga} src={card.image} alt={card.title}/>
              </div>      
              <div className={styles.contetBox}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>      
            </div>
        ))}
      </div>

      {showAll && (
        <span className={styles.showHide} onClick={showAllFunc}>
          Hide
        </span>
      )}

      {!showAll && (
        <span className={styles.showHide} onClick={showAllFunc}>
          Show All
        </span>
      )}
    </section>
  );
};

export default Project;
