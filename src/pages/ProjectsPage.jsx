// ./src/pages/ProjectsPage.jsx

import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Navbar from "../components/NavBar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import templateData from "../../portfolio-template.json";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#111418] text-[#9ab3ec] flex flex-col items-center font-poppins text-lg">
      <Navbar />
      <FadeInSection>
        {/* Content container with flex-grow to push footer down */}
        <div className="w-full max-w-2xl mt-20 pt-20 px-4 flex-grow pb-8 space-y-8">
          {/* Render Projects */}
          {templateData.projects.map((project, index) => (
            <Projects key={index} {...project} />
          ))}
        </div>
      </FadeInSection>

      {/* Sticky Footer */}
      <div className="w-full bg-[#111418] mt-auto">
        <SectionDivider />
        <Footer />
        <EndDivider />
      </div>
    </div>
  );
};

const SectionDivider = () => (
  <hr className="border-t border-gray-600 mt-12 mb-8 opacity-50 w-full max-w-2xl mx-auto" />
);

const EndDivider = () => (
  <hr className="border-t border-gray-900 mb-8 opacity-50 w-full" />
);

// Fade in, Fade out Effect.
const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProjectsPage;