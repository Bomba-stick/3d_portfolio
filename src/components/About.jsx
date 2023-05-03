import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Qui suis-je ?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      > Bienvenue sur mon Portfolio ! <br />
      <br/>
      Passionné par le monde de l'informatique et plus spécialement du développement web depuis toujours, j'ai récemment décidé de me lancer dans cette passion dévorante. <br /> <br/>En Janvier 2023, j'ai démmaré mon aventure chez La Capsule, un BootCamp de 10 semaines avec pour objectif d'enfin devenir développeur web full stack, j'ai beaucoup appris lors de cette formation et j'ai pu grâce à mes apprentissages et mon travail décrocher mon titre RNCP de niveau 6 et me voici prêt à passer à l'étape suivante... <br/><br/>Il est maintenant temps de trouver un stage ou un poste en entreprise afin de rejoindre une équipe de développeur et de me mettre travail afin de capitaliser mes apprentissages et développer encore plus mes skills ! 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");