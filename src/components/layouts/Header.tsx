import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "../../constants/nav";
import { scrollToSection } from "../../utils/scroll";
import ThemeToggle from "../ui/theme-toggle";

const Header = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderSticky(scrollY > 100);

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // Close mobile menu on scroll
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full px-[9%] py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex justify-between items-center z-50 transition-all duration-300 ${
        isHeaderSticky ? "border-b border-gray-200 dark:border-gray-800 shadow-lg" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href="#"
        className="text-2xl font-semibold cursor-default"
        whileHover={{ scale: 1.05 }}
      >
        NHU<span className="text-cyan-500 dark:text-cyan-400">Dev.</span>
      </motion.a>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button
          className="text-2xl md:hidden text-gray-900 dark:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className="hidden md:flex items-center gap-14">
        {NAV_ITEMS.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => handleScroll(item.href)}
            className={`text-lg capitalize transition-colors duration-300 ${
              activeSection === item.href
                ? "text-cyan-500 dark:text-cyan-400"
                : "text-gray-900 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="absolute top-20 right-0 w-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm shadow-lg md:hidden border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 p-12 text-center">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-xl capitalize transition-colors duration-300 ${
                    activeSection === item.href
                      ? "text-cyan-500 dark:text-cyan-400"
                      : "text-gray-900 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
