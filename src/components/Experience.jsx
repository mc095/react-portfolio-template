// ./src/components/Experience.jsx

import React from "react";
import { CalendarIcon } from "lucide-react";

const Experience = ({ date, role, company, companyLink, description, technologies }) => {
  return (
    <section className="flex flex-col gap-4 sm:gap-6 max-w-2xl w-full p-4">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2 text-[#5c87f6]">
          <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm font-semibold">{date}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-gray-200 text-sm md:text-base">{role}</span>
          <span className="text-gray-400">·</span>
          <a
            href={companyLink}
            className="text-gray-200 hover:underline cursor-pointer text-sm md:text-base transition duration-200 hover:text-[#5c87f6]"
          >
            {company}
          </a>
        </div>
      </header>

      {/* Description */}
      <p className="text-[#7e89a2] leading-relaxed text-sm md:text-base">
        {description}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs sm:text-sm bg-gray-800/30 text-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Experience;
