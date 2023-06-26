import { useRef } from "react";
import styles from "../../../styles/contact.module.css";
import RealEarth from "./RealEarth";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qk9pzaf', 'template_k9qceac', form.current, 'BUaj0ClsPRShtt5Cr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.container}>
        <div className={styles.formSec}>
          <form ref={form} onSubmit={sendEmail}>
            <h2>Send message</h2>
            <div className={styles.inbutBox}>
              <input type="text" required="required" name="user_name" />
              <span>Full name</span>
            </div>
            <div className={styles.inbutBox}>
              <input type="text" required="required" name="user_email" />
              <span>Email</span>
            </div>
            <div className={styles.inbutBox}>
              <textarea required="required" name="message"></textarea>
              <span>Type your message</span>
            </div>
            <div className={styles.inbutBox}>
              <input type="submit" value="Send"/>
            </div>
          </form>
        </div>
        <div className={styles.imgSec}>
          <RealEarth/>
      </div>
      </div>
    </section>
  );
};

export default Contact;
