import { motion } from "framer-motion";
import TimelineItem from "./timeline";
import workExperience from "../../constants/working";

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-[9%] py-28"
    >
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Experience Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Work <span className="text-cyan-500 dark:text-cyan-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and career highlights in the tech industry
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {workExperience.map((job, index) => (
            <TimelineItem
              key={index}
              position={job.position}
              company={job.company}
              location={job.location}
              period={job.period}
              responsibilities={job.responsibilities}
              technologies={job.technologies}
              achievements={job.achievements}
              isLast={index === workExperience.length - 1}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
