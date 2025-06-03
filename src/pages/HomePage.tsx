import Header from "../components/layouts/header";
import Banner from "../components/layouts/banner";
import Footer from "../components/layouts/footer";
import AboutSection from "./components/about";
import Skills from "./components/skill";
import ScrollProgress from "../components/ui/scroll-progress";
import EducationSection from "./components/education";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <ScrollProgress />
      <Header />
      <Banner />
      <AboutSection />
      <EducationSection />
      <Skills />
      <Footer />
    </div>
  );
};

export default HomePage;
