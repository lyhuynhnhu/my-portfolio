import { useState } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon, name, delay = 0 }: { icon: any; name: string; delay?: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group border-2 border-gray-300 dark:border-slate-600 rounded-xl p-6 bg-white dark:bg-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="relative z-10 flex items-center gap-4">
        <div className="text-4xl w-9">{icon}</div>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
