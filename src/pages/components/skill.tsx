import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  bootstrap,
  css,
  git,
  html,
  jest,
  js,
  npm,
  react,
  redux,
  tailwind,
  ts,
  vite,
  vscode,
  babel,
  materialUI,
  nextjs,
  jira,
  yarn,
  sass,
} from "../../components/ui/svg";
import { Formik, ReactQuery, ReactTestingLib } from "../../constants/image";
import SkillCard from "./skill-card";

const skillsData = {
  tech: [
    { icon: html, name: "HTML", description: "Markup Language" },
    { icon: css, name: "CSS", description: "Stylesheet Language" },
    { icon: sass, name: "SASS/SCSS", description: "CSS Preprocessor" },
    { icon: js, name: "JavaScript", description: "Programming Language" },
    { icon: ts, name: "TypeScript", description: "Programming Language" },
    { icon: react, name: "React", description: "JS Library for UI" },
    { icon: tailwind, name: "Tailwind CSS", description: "CSS Framework" },
    { icon: bootstrap, name: "Bootstrap", description: "CSS Framework" },
    // { icon: materialUI, name: "Material UI", description: "UI Component Library" },
    { icon: redux, name: "Redux", description: "State Management Library" },
    {
      icon: <img src={ReactQuery} alt="React Query" />,
      name: "React Query",
      description: "Data Fetching Library",
    },
    {
      icon: <img src={Formik} alt="Formik" />,
      name: "Formik",
      description: "Form Management Library",
    },
    { icon: nextjs, name: "Next.js", description: "JS Framework" },
    { icon: jest, name: "Jest", description: "Testing Framework" },
    {
      icon: <img src={ReactTestingLib} alt="React Testing Library" />,
      name: "React Testing Library",
      description: "Testing Library",
    },
  ],
  tools: [
    { icon: git, name: "Git", description: "Version Control" },
    { icon: npm, name: "NPM", description: "Package Manager" },
    { icon: yarn, name: "Yarn", description: "Package Manager" },
    { icon: vite, name: "Vite", description: "Build Tool" },
    { icon: babel, name: "Babel", description: "JS Compiler" },
    { icon: jira, name: "Jira", description: "Project Management" },
    { icon: vscode, name: "VS Code", description: "Code Editor" },
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
              <SkillCard
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                description={skill.description}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
