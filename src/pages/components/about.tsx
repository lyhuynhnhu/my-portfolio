import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const AboutSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "District 6, Ho Chi Minh City",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+84 859 181 879",
    },
    {
      icon: Mail,
      title: "Email",
      content: "lyhuynhnhu200699@gmail.com",
    },
  ];

  const ContactInfoCard = ({
    icon: Icon,
    title,
    content,
    delay = 0,
  }: {
    icon: any;
    title: string;
    content: string;
    delay?: number;
  }) => {
    return (
      <motion.div
        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-600"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 dark:bg-cyan-400 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white dark:text-slate-900" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{content}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-[9%] py-24 bg-gray-50 dark:bg-slate-800"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-8">
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <img
            src="/images/about1.png"
            alt="About Revangga"
            className="w-80 md:w-96 lg:w-[400px] object-contain"
          /> */}
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={info.title}
              icon={info.icon}
              title={info.title}
              content={info.content}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
            About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Highly motivated front-end developer with 3+ years of experience building responsive and
            user-friendly websites.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Proven expertise in ReactJS, HTML, CSS, and TypeScript to create interactive web
            applications. Strong problem-solving skills and a collaborative team player.
          </p>
          <p className="text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
            Eager to contribute to innovative projects and continue developing expertise to become a
            leading programmer.
          </p>
          {/* <button className="bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-500 px-8 py-3 text-lg font-semibold rounded-full">
            <a href="#" className="text-white dark:text-slate-900">
              Read More
            </a>
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
