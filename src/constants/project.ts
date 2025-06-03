import { BWE, Perfetto, Porfolio, SagriDashboard, WifCalc } from "./image";

const projects = [
  {
    title: "Personal Website",
    description:
      "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    technologies: "ReactJs, Tailwind, Radix UI",
    image: Porfolio,
    githubUrl: "https://github.com/lyhuynhnhu/my-portfolio",
    liveUrl: "#",
  },
  {
    title: "WiF Calculator",
    description:
      "A dedicated calculator app for the World in Flames boardgame",
    technologies: "React Native",
    image: WifCalc,
    githubUrl: "https://github.com/lyhuynhnhu/WiF_Calculator_App",
    liveUrl: "https://drive.google.com/file/d/1yYcZKoyHIMloZsYmwVSxEC-XDkPylSOk/view",
  },
  {
    title: "BIWASE CRM",
    description:
      "A CRM software system to manage BIWASE company’s customers.",
    technologies: "ReactJs, Tailwind, DaisyUI",
    image: BWE,
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Sagri Product Traceability",
    description:
      "The traceability system for exclusive products of Sagri.",
    technologies: "ReactJs, Reactstrap",
    image: SagriDashboard,
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Perfetto E-Commerce",
    description:
      "A E-commerce system includes Perfetto eStore and Perfetto Content Management System.",
    technologies: "ReactJs, Reactstrap, NextJs",
    image: Perfetto,
    githubUrl: "",
    liveUrl: "",
  },
];

export default projects;
