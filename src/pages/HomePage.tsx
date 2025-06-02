import Header from "../components/layouts/header";
import Banner from "../components/layouts/banner";
import Footer from "../components/layouts/footer";
import AboutSection from "./components/about";
import Skills from "./components/skill";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <Header />
      <Banner />
      <AboutSection />
      <Skills />
      <Footer />
    </div>
  );
};

export default HomePage;
