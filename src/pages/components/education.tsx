import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { BookOpen, Globe, GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center px-[9%] py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900"
    >
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Education Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-cyan-500 dark:text-cyan-400">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic background and continuous learning journey in technology and development
          </p>
        </motion.div>

        {/* Education Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Accordion type="multiple" className="w-full space-y-6">
            {/* Graduation */}
            <AccordionItem
              value="graduation"
              className="bg-white dark:bg-slate-800 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 hover:no-underline cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">Graduation</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                      University Degree
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-cyan-500">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-semibold">
                        2017 - 2022
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Information Technology Engineering Degree
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">Sai Gon University</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        Studied Software Engineering principles, cross-platform web application
                        development, and database design and management. Developed programming
                        skills through hands-on practical assignments.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Research & Training */}
            <AccordionItem
              value="research"
              className="bg-white dark:bg-slate-800 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 text-xl cursor-pointer font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">Research & Training</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                      Professional Development
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-emerald-500">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-semibold">
                          2021
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          ReactJS Training Course in PycoGroup Internship Program
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                          Intensive hands-on training program covering modern React development
                          practices, Agile methodologies, and effective cross-team collaboration.
                          Gained practical experience through an internship project and mentorship
                          from senior developers.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                            JavaScript ES6+
                          </span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                            React.js
                          </span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                            Component Design
                          </span>
                          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">
                            State Management
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-amber-500">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-block px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-semibold">
                          2019
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          Javascript Intern at Alax Vietnam
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                          Trained in Node.js, Git, and basics of ReactJS. Built a functional live
                          data widget with ReactJS to monitor the health status of the CoinMarketCap
                          website, integrated into the company's product.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">
                            JavaScript
                          </span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                            Node.js
                          </span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                            Git
                          </span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                            ReactJS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Languages */}
            <AccordionItem
              value="languages"
              className="bg-white dark:bg-slate-800 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 cursor-pointer text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">Languages</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                      Communication Skills
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-violet-500">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-200 dark:hover:border-green-700">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">VI</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                          Vietnamese
                        </h4>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-cyan-200 dark:hover:border-cyan-700">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">EN</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                          English
                        </h4>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-2 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-yellow-200 dark:hover:border-yellow-700">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">中</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                          Chinese
                        </h4>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full w-2/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
