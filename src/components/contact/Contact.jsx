import { useState } from "react";
//import "./contact.scss";
import styles from "./contact.module.scss";
import Image from "next/image";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.left}>
        {/* <img src="assets/shake.svg" alt="" /> */}
        <Image
          src="/assets/shake.svg"
          alt="Contacto"
          width={620}
          height={810}
        />
      </div>
      <div className={styles.right}>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
