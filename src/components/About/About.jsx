import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/herroImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>About me</h3>
              <p>
            My name is Kevin Ogunlowo, and I’m a passionate software engineer
            .I specialize in creating responsive and user-friendly
            applications with a focus on clean, modern design and robust
            functionality. I’m always eager to learn new technologies and
            improve my skills to deliver high-quality work.
              </p>
              {/* Link to document */}
              <p>
                You can view my detailed resume or portfolio by 
                <a href={getImageUrl("hero/Resume.pdf")} target="_blank" rel="noopener noreferrer">
                  clicking here
                </a>.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

// import React from "react";
// import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About Me</h2>
//       <div className={styles.content}>
//         {/* Updated image to a professional headshot */}
//         <img
//           src={getImageUrl("hero/herroImage.png")}
//           alt="Headshot of [Your Legal Name]"
//           className={styles.aboutImage}
//         />
//         <div className={styles.aboutText}>
//           {/* Short and clean introduction paragraph */}
//           <p>
//             Hello! My name is Kevin Ogunlowo, and I’m a passionate developer
//             and designer. I specialize in creating responsive and user-friendly
//             applications with a focus on clean, modern design and robust
//             functionality. I’m always eager to learn new technologies and
//             improve my skills to deliver high-quality work.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };
