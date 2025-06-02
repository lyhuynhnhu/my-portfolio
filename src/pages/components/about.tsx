import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-[9%] py-28 bg-gray-50 dark:bg-slate-800"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-8">
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about1.png"
            alt="About Revangga"
            className="w-80 md:w-96 lg:w-[400px] object-contain"
          />
        </motion.div>

        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
            About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
          </h2>
          <p className="text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
            Innovative Freelance Front-End Developer with 3+ Years at Upwork Seeking New Challenges
            | Bachelor of Informatics Grad | Proficient in HTML, CSS, JS, PHP, MongoDB, Express.js,
            React, Node.js | Eager to Bring Problem-Solving and Critical Thinking Skills to Your
            Team.
          </p>
          <button className="bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-500 px-8 py-3 text-lg font-semibold rounded-full">
            <a href="#" className="text-white dark:text-slate-900">
              Read More
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
