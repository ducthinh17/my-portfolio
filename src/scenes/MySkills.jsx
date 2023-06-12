import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)", "height:1000px");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-red">ME: </span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            My name is Thinh, I am currently a third-year student majoring in
            Data Science at the International University of the National
            University in Ho Chi Minh City. My ambition is to become a Data
            Analyst, driven by a fervent passion for researching healthcare and
            analyzing financial markets. I am dedicated to continuously seeking
            new knowledge and learning opportunities to refine my personal
            development and enhance my skills on a daily basis. I firmly believe
            that no task is insurmountable. So, I am committed to accomplishing
            my work with unwavering determination.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1] before:rounded-[15px]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.gif"
                style={{ borderRadius: "15px" }}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.gif" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            In my limited yet valuable experience in the field of Data Science,
            I have actively participated in diverse projects, assuming various
            roles as both a team member and a leader. Among the projects I have
            successfully completed are notable games including BattleShip,
            SpaceInvader, Flappy Bird, CAUSEOFDEATH and BetterDay.{" "}
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">Skill</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I possess a strong skill set that includes proficiency in Python, R,
            MySQL, Java,JavaScript, HTML, CSS, and the ability to leverage
            Tableau for data visualization. With these skills, I am equipped to
            analyze and extract valuable insights from complex datasets{" "}
          </p>
        </motion.div>
        {/* Skills */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">Hobby</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I am a passionate individual who enjoys reading books during my
            leisure time. It is a hobby that allows me to immerse myself in
            different worlds and gain knowledge across various subjects. In
            addition to reading, playing musical instruments and engaging in
            sports are essential aspects of my life. These activities provide me
            with a sense of fulfillment, creativity, and physical well-being.{" "}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
