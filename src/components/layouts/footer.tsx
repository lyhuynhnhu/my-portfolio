import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-800 px-[9%] py-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700">
      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Copyright &copy; 2024 by Nhu Ly | All Rights Reserved.
      </motion.p>
      <motion.button
        onClick={() => scrollToSection("home")}
        className="bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 p-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
