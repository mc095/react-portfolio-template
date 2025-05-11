// ./src/components/Footer.jsx

import templateData from "../../portfolio-template.json";

const Footer = () => {
  const { socialLinks } = templateData;

  return (
    <footer className="w-full py-8 mt-1">
      <div className="container mx-auto flex justify-center items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-400 hover:text-gray-300 transition-colors text-sm sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
