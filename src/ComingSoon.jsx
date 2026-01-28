import styles from "./ComingSoon.module.css";
import logo from "./assets/chai.jpeg";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ComingSoon() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.logoBox}>
          <img
            src={logo}
            alt="Royal Chai Logo"
            className={styles.logoImg}
          />
        </div>

        <h1 className={styles.title}>Brew the Royal Tradition</h1>
        <p className={styles.subtitle}>Premium Instant Chai Tea</p>

        <p className={styles.description}>
          Inspired by royal Indian households, our premium instant chai tea premix
          delivers rich aroma, authentic spices, and timeless warmth — crafted
          for modern chai lovers.
        </p>

        <div className={styles.launch}>Launching Soon</div>

        <div className={styles.emailBox}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
          />
          <button className={styles.button}>Notify Me</button>
        </div>

        <div className={styles.socials}>
          <a href="#" className={styles.social} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className={styles.social} aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className={styles.social} aria-label="X (Twitter)">
            <FaXTwitter />
          </a>
        </div>

        <footer className={styles.footer}>
          © 2026 Royal Chai. All rights reserved.
        </footer>

      </div>
    </div>
  );
}
