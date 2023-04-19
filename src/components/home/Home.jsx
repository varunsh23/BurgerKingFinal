import React from "react";
import { motion } from "framer-motion";
import Owner from "./Owner";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },

    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>BURGER KING</motion.h1>
          <motion.p {...options} transition={{ delay: 0.2 }}>
            What you want is what you get.
          </motion.p>
        </div>
        <motion.a
          href="#menu"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.4 }}
        >
          EXPLORE FULL MENU
        </motion.a>
      </section>
      <Owner />
      <Menu/>
    </>
  );
};

export default Home;
