// ./src/components/Projects.jsx

import React from "react";
import { ArrowUpRight } from "lucide-react";

const GlassProjectCard = ({ title, description, link, technologies }) => {
  return (
    <div className="relative max-w-2xl">
      <a
        href={link}
        className="group relative block overflow-hidden rounded-xl border border-gray-700/30 bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-6 
        backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600/50 hover:shadow-xl"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Header */}
        <div className="relative flex justify-between items-start">
          <h3 className="text-xl font-medium text-gray-100">{title}</h3>
          <span className="p-1 rounded-full text-gray-400 transition-all duration-200 group-hover:text-white group-hover:bg-white/10">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>

        {/* Description */}
        <p className="relative mt-4 text-base leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Technology List */}
        <div className="relative mt-4 flex flex-wrap items-center gap-3">
          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="text-sm text-blue-400/90">{tech}</span>
              {index < technologies.length - 1 && (
                <span className="text-gray-600">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </a>
    </div>
  );
};

export default GlassProjectCard;
