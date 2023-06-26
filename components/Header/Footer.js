import styles from "../../styles/footer.module.css";
import {
  LocationOn,
  Facebook,
  Instagram,
  Telegram,
  Phone,
  Email,
  FacebookOutlined,
} from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <h3>
          Salikh<span>Group</span>
        </h3>

        <p className={styles.footerLinks}>
          <a href="#hero">Home</a>|<a href="#my_work">MyWork</a>|
          <a href="#aboutUs">AboutMe</a>|<a href="#contact">Contact</a>
        </p>

        <p className={styles.footerCompanyName}>
          Copyright © 2023 <strong>SalikhGroup</strong> All rights reserved
        </p>
      </div>

      <div className={styles.footerCenter}>
        <div className={styles.midEle}>
          <LocationOn className={styles.midIco} />
          <p>
            <span>Uzbekistan</span>
            Jizzax
          </p>
        </div>
        <div className={styles.midEle}>
          <Phone className={styles.midIco} />
          <p>+99891564**28</p>
        </div>
        <div className={styles.midEle}>
          <Email className={styles.midIco} />
          <p>
            <a href="mailto:ssalohiddin2002@gmail.com">
              salikhgroupprivate@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className={styles.footerRight}>
        <p className={styles.footerCompanyAbout}>
          <span>About the SalikhGroup</span>
          <strong>Salikh Group</strong> is a full-stack development company that
          specializes in web and mobile app development. We offer a wide range
          of services, including full-stack development, Android development,
          and UI/UX design. Our team of experienced developers and designers can
          help you bring your vision to life. We are passionate about creating
          user-friendly and engaging experiences. We are committed to providing
          our clients with the highest quality of service.
        </p>
        <div className={styles.footerIcons}>
          <a href="#">
            <FacebookOutlined />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Telegram />
          </a>
        </div>
      </div>
    </footer>
  );
}
