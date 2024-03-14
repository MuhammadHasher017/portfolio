import { Tilt } from "react-tilt";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { services } from "../../constants/constants";
import { fadeIn, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}> Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Proficient Software professional with a demonstrated track record in
        building scalable and efficient web applications with versatile
        technologies. With an unwavering passion, I am dedicated to leading
        innovative projects and fostering growth within your organization,
        fueled by a relentless drive for success.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={services.title} index= {index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
