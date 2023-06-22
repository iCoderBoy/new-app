import React, { useRef, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {AutoAwesome } from "@mui/icons-material";
import VanillaTilt from "vanilla-tilt";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Autoplay]);
import styles from "../../styles/about.module.css";

// import required modules
import { EffectCreative } from "swiper";

export default function AboutUs() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.contentSide}>
          <h1>About Me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={styles.swiperSide}>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            autoplay={{ delay: 3000 }}
            className="mySwiper"
          >
            <SwiperSlide className={styles.itemSwiper}>
              <img src="/Images/man1.jpg" />{" "}
            </SwiperSlide>
            <SwiperSlide className={styles.itemSwiper}>
              <img src="/Images/man2.jpg" />{" "}
            </SwiperSlide>
            <SwiperSlide className={styles.itemSwiper}>
              <img src="/Images/man3.jpg" />{" "}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.skilsSide}>
        <div className={styles.card}>
          <h1>01</h1>
          <span></span>
          <h2>Design</h2>
          <p>
            With a solid track record in designing websites and apps, I deliver
            strong and user-friendly digital designs. Solid company branding is
            the foundation of any succesful website.
          </p>
        </div>
        <div className={styles.card}>
          <h1>02</h1>
          <span></span>
          <h2>Development</h2>
          <p>
            I build scalable websites from scratch that fit seamlessly with
            design. My focus is on micro animations, transitions and
            interaction. For content management I use Kirby CMS.
          </p>
        </div>
        <div className={styles.card}>
          <h1>03</h1>
          <span></span>
         
          <h2> <AutoAwesome/>  Full Package</h2>
          <p>
            A complete website from concept to implementation, that's what makes
            me stand out. My great sense for design and my development skills
            enable me to create .
          </p>
        </div>
      </div>
    </section>
  );
}
