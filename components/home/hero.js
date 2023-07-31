import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/gc3.jpg"
          alt="An Image showing Ghufran"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ghufran Ullah</h1>
      <p>
        I blog about web development- especially front-end frameworks like React
        and it's framework Next.
      </p>
    </section>
  );
};

export default Hero;
