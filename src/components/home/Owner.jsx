import React from "react";
import me from "../../assets/Owner.jpg";
import { motion } from "framer-motion";
const Owner = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 1,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="Owner">
      <motion.div {...options}>
        <img src={me} alt="Owner" height={200} width={200} />
        <h3>Varun Sharma</h3>
        <p>
          Hey Everyone, I am the owner of this Burger Fast Food chain.
          <br /> Our Mission is to make and deliver the tastiest Burger while
          maintaining the best quality possible.
        </p>
      </motion.div>
    </section>
  );
};

export default Owner;
