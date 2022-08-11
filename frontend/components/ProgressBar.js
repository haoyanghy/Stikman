import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <div id={styles.progressBarContainer}>
      <div
        id={styles.progressBar}
        //   style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
        style={{ transform: `scale(${scroll}, 1)`, opacity: "1" }}
      />
    </div>
  );
};

export default ProgressBar;
