import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  bootstrap,
  css,
  git,
  html,
  jest,
  js,
  node,
  npm,
  react,
  redux,
  tailwind,
  ts,
  vite,
  vscode,
  babel,
} from "../../components/ui/svg";
import { ReactTestingLib } from "../../constants/image";

const skillsData = {
  tech: [
    { icon: html, name: "HTML", level: "Expert" },
    { icon: css, name: "CSS", level: "Stylesheet Language" },
    { icon: js, name: "JavaScript", level: "" },
    { icon: ts, name: "TypeScript", level: "" },
    { icon: react, name: "React", level: "JS Library for UI" },
    { icon: tailwind, name: "Tailwind CSS", level: "" },
    { icon: bootstrap, name: "Bootstrap", level: "Advanced" },
    { icon: node, name: "Node.js", level: "JS Runtime" },
    { icon: redux, name: "Redux", level: "State Management" },
    { icon: jest, name: "Jest", level: "Test Framework" },
    {
      icon: <img src={ReactTestingLib} alt="React Testing Library" />,
      name: "React Testing Library",
      level: "Intermediate",
    },
  ],
  tools: [
    { icon: git, name: "Git", level: "Version Control" },
    { icon: npm, name: "NPM", level: "Package Manager" },
    { icon: vite, name: "Vite", level: "Build Tool" },
    { icon: babel, name: "Babel", level: "JS Compiler" },
    { icon: vscode, name: "VS Code", level: "Code Editor" },
  ],
};

const Skills = () => {
  const [activeSkillTab, setActiveSkillTab] = useState("tech");
  const [list, setList] = useState(skillsData.tech);

  const handleTabClick = (tab: string) => {
    setActiveSkillTab(tab);
    if (tab === "tech") {
      setList(skillsData.tech);
    } else if (tab === "tools") {
      setList(skillsData.tools);
    }
  };

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

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-[9%] py-24 bg-gray-50 dark:bg-slate-800"
    >
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="text-cyan-500 dark:text-cyan-400">Skills</span>
      </motion.h2>

      <div className="w-full max-w-7xl">
        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { id: "tech", label: "Tech Stack" },
            { id: "tools", label: "Tools" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSkillTab === tab.id
                  ? "bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 shadow-lg"
                  : "bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkillTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {list.map((skill, index) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} delay={index * 0.1} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
