import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Button from "../ui/button";
import TypedText from "../ui/typed-text";

const Banner = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-[9%] pt-28 pb-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl">
        <motion.div
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello, It's Me
          </motion.h3>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-cyan-500 dark:text-cyan-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Nhu Ly
          </motion.h1>
          <motion.h3
            className="text-2xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            And I'm a <TypedText strings={["Frontend Developer"]} />
          </motion.h3>

          <motion.div
            className="flex justify-center md:justify-start gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[Mail, Linkedin, Github].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-14 h-14 border-2 border-cyan-500 dark:border-cyan-400 rounded-full flex items-center justify-center text-cyan-500 dark:text-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-slate-800 transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              className="bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-500 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25"
              asChild
            >
              <a href="#">Download CV</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="/images/home1.png"
            // src={NHU}
            alt="Revangga"
            className="size-60 md:size-80 lg:size-[500px] object-cover border-2 border-cyan-500 dark:border-cyan-400 rounded-full"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
