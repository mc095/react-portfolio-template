// ./src/pages/ExperiencePage.jsx

import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Navbar from "../components/NavBar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import templateData from "../../portfolio-template.json";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-[#111418] text-[#9ab3ec] flex flex-col items-center font-poppins text-lg">
      <Navbar />
      <div className="w-full max-w-2xl mt-20 pt-20 px-4 pb-24"> {/* Added pb-24 to prevent content from being hidden behind the fixed footer */}
        <FadeInSection>          {/* Render Experiences */}
          {templateData.experiences.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
        </FadeInSection>
      </div>
      
      {/* Fixed Footer and SectionDivider at the bottom */}
      <div className="fixed bottom-0 w-full bg-[#111418]">
        <div className="max-w-2xl mx-auto px-4"> {/* Match the width of the experience section */}
          <SectionDivider />
        </div>
        <Footer />
      </div>
      
      <EndDivider />
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

export default ExperiencePage;
