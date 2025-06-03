import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import projects from "../../constants/project";

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-[9%] py-20 bg-gray-50 dark:bg-slate-800"
    >
      <motion.div
        className="w-full max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Projects Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-cyan-500 dark:text-cyan-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the projects I've worked on so far
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Project;
