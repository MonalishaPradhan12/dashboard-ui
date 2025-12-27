import Image from "next/image";
import { IMAGES } from "@/utils/images";
import styles from "./ArgonImageCard.module.css";

const ArgonImageCard = () => {
  return (
    <div className={styles.argonImageCard}>
      <Image
        src={IMAGES.BALL_TOY}
        alt="Argon"
        fill
        className={styles.argonImage}
      />

      {/* TEXT OVER IMAGE */}
      <div className={styles.argonOverlay}>
        <div className="icon-box">
          <i className="bi bi-camera"></i>
        </div>

        <h5 className={styles.argonTitle}>
          Get started with Argon
        </h5>

        <p className={styles.argonText}>
          There&apos;s nothing I really wanted to do in life that I wasn&apos;t
          able to get good at.
        </p>
      </div>
    </div>
  );
};

export default ArgonImageCard;
