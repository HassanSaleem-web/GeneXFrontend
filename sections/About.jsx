'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About GeneX"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
       
  <span className="font-extrabold">GeneX</span> is more than a platform — it's a catalyst for innovation. 
  Designed to bridge the gap between <span className="font-extrabold">brilliant inventors</span> and forward-thinking <span className="font-extrabold">investors</span>, 
  we are building a collaborative ecosystem where ideas are nurtured, funded, and transformed into reality. 
  Whether you're sketching your first concept or looking to scale a groundbreaking solution, GeneX empowers your vision with 
  strategic connections, review panels, and the tools to grow. Powered by <span className="font-extrabold">blockchain</span> to ensure transparency and security, and guided by an intelligent <span className="font-extrabold">AI Mentor</span> to help shape and refine your journey — this is where innovation meets opportunity. 
  Let’s <span className="font-extrabold">ignite invention</span> together — scroll down and start your journey with us.
</motion.p>


      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
