import { Tilt } from "react-tilt";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { services } from "../../constants/constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

export const ServiceCard = ({ index, title, icon, university, date }) => {
  return (
    <Tilt className=" w-full" options={{ scale: 1.02, max: 10 }}>
      <div>
        <img src={icon} alt={title} className="w-16 h-16 object-contain scale-150" />

        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient  p-[1px] rounded-[20px] shadow-card"
          whileHover={{ scale: 1.01, x: -2, y: -2 }}
          whileTap={{ scale: 0.99 }}
        >
          <div
            options={{ max: 45, scale: 0.99, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px]"
          >
            <h3 className="text-white text-[20px] font-bold text-center ">
              {title}
            </h3>
            <p className="text-white text-[14px] text-center mt-2">
              {university}
            </p>
            <p className="text-white text-[14px] text-center mt-1">{date}</p>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

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

      <div className="mt-20 flex flex-col gap-10">
        {services.map((service, index) => (
          <ServiceCard key={`service-${service.title}`} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
