import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  delay = 0,
}: {
  title: string;
  description: string;
  technologies: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-slate-800 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 dark:border-slate-600 hover:border-cyan-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-slate-700 dark:bg-slate-800">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />

        {/* Overlay with links */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-white mb-3"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm leading-relaxed mb-4"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium"
          whileHover={{ scale: 1.05 }}
        >
          {technologies}
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.1), transparent)",
        }}
        animate={{
          background: isHovered
            ? "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.1), transparent)"
            : "linear-gradient(45deg, transparent, transparent, transparent)",
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;
