import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/Owner.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burger King</h4>
          <p>
            We are Burger King. The place for tastiest burgers on the entire planet.
          </p>

          <p>
            Explore the various types of burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Owner</h2>
          <article>
            <div>
              <img src={me} alt="Owner" />
              <h3>Varun Sharma</h3>
            </div>

            <p>
              I am Varun Sharma, the Owner of Burger King. Affiliated to Good Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;