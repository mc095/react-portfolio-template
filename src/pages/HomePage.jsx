// ./src/pages/HomePage.jsx

import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import templateData from "../../portfolio-template.json";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#111418] text-[#9ab3ec] flex flex-col items-center font-poppins text-lg">
      <Navbar />
      <div className="max-w-2xl px-3 pt-20">
        <FadeInSection>
          <Hero />
          <SectionDivider />

          {/* Render Experiences */}
          {templateData.experiences.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
          <SectionDivider />

          {/* Render Projects with spacing */}
          <div className="space-y-8">
            {templateData.projects.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
          <SectionDivider />
        </FadeInSection>
        <Footer />
        <EndDivider />
      </div>
    </div>
  );
};

const EndDivider = () => (
  <hr className="border-t border-gray-900 mb-8 opacity-50 w-full" />
);

const SectionDivider = () => (
  <hr className="border-t border-gray-600 mt-12 mb-8 opacity-50 w-full" />
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

export default HomePage;