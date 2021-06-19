import Image from "next/image";

import amicoImage from "@/public/images/amico.png";
import styles from "./styles.module.scss";

export const Background = () => {
  return (
    <div className={styles.container}>
      <Image
        src={amicoImage}
        width={538.5}
        height={467.37}
        alt="Pessoas com animais"
      />

      <p className={styles.text}>compartilhe sua casa com um amigo canino</p>
    </div>
  );
};
