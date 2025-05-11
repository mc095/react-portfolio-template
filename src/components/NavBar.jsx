// ./src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { User, Briefcase, Bot, Paperclip } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Me", href: "/", icon: User },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Projects", href: "/projects", icon: Bot },
    { name: "Resume", href:"/resume", icon: Paperclip }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="w-full flex justify-center pt-4 px-2">
        <nav className="flex items-center px-3 sm:px-6 py-1.5 sm:py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-2 sm:px-4 py-1.5 sm:py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
