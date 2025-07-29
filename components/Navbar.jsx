'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  // Redirect to backend Google login route
  const handleGoogleSignUp = () => {
    console.log("🧠 Sign Up button clicked");
    window.location.href = 'https://backendanorok.onrender.com/api/auth/google';
  };
  // const handleGoogleSignUp = () => {
  //   // <--- Debugging line
  //   window.location.href = 'http://localhost:5000/api/auth/google';
  // };




  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
        {/* Left icon */}
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />

        {/* Logo */}
        <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
          GeneX
        </h2>

        {/* Right side: menu icon + signup button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleGoogleSignUp}
            type="button"
            className="flex items-center h-fit py-2 px-5 bg-[#25618B] rounded-[32px] gap-[8px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="font-normal text-[14px] text-white">
              Sign Up
            </span>
          </button>

          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
