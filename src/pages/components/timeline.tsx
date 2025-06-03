import { motion } from "framer-motion";
import { Award, Briefcase, CheckCircle, ChevronRight, Code } from "lucide-react";

const TimelineItem = ({
  position,
  company,
  location,
  period,
  responsibilities,
  technologies,
  achievements,
  isLast = false,
  delay = 0,
}: {
  position: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  isLast?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      className="relative pl-8 pb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-[30px] bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-cyan-400/30 dark:from-cyan-400 dark:to-cyan-500/30"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 flex items-center justify-center shadow-lg">
        <Briefcase className="w-4 h-4 text-white" />
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{position}</h3>
            <p className="text-cyan-600 dark:text-cyan-400 font-medium">
              {company}, {location}
            </p>
          </div>
          <div className="inline-block px-4 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium whitespace-nowrap">
            {period}
          </div>
        </div>

        <div className="space-y-4">
          {/* Responsibilities */}
          <div>
            <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              <span className="w-5 h-5 mr-2 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              </span>
              Responsibilities
            </h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-cyan-500 dark:text-cyan-400 mt-0.5 mr-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              <span className="w-5 h-5 mr-2 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center">
                <Code className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              </span>
              Key Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              <span className="w-5 h-5 mr-2 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center">
                <Award className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              </span>
              Key Achievements
            </h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-cyan-500 dark:text-cyan-400 mt-0.5 mr-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
