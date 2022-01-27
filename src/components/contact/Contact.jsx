import { useState } from "react";
//import "./contact.scss";
import styles from "./contact.module.scss";
import Image from "next/image";
import axios from "axios";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [camposIncompletos, setcamposIncompletos] = useState(false);
  const [email, setemail] = useState("");
  const [mensaje, setmensaje] = useState("");

  const clearInputs = () => {
    setcamposIncompletos(false);
    setemail("");
    setmensaje("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && mensaje !== "") {
      setMessage(true);
      clearInputs();

      axios.post("/api/contact", {
        mensaje,
        email,
      });
    } else {
      setcamposIncompletos(true);
    }
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
        <h2>Contacto.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <textarea
            style={{ fontFamily: "arial" }}
            placeholder="Message"
            onChange={(e) => {
              setmensaje(e.target.value);
            }}
          ></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Muchas gracias, te responderé en la brevedad posible :)</span>
          )}
          {camposIncompletos && (
            <span>Error, debe introducir un correo y mensaje valido</span>
          )}
        </form>
      </div>
    </div>
  );
}
