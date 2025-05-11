// ./src/components/Hero.jsx

import templateData from "../../portfolio-template.json";

const Hero = () => {
  const { personalInfo } = templateData;

  return (
    <section className="flex flex-col items-start max-w-2xl mx-auto px-4 pt-8 sm:pt-16 font-roboto">
      <header className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden">
          <img
            src={personalInfo.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="flex items-center gap-2 text-sm sm:text-base text-white font-poppins">
            {personalInfo.name}
            <img
              src={personalInfo.verifiedBadge}
              alt="Verified"
              className="w-5 sm:w-8 h-5 sm:h-8"
            />
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            {personalInfo.title}
          </p>
        </div>
      </header>

      {/* Bio Section */}
      <p className="text-[#7e89a2] leading-relaxed text-sm sm:text-base">
        {personalInfo.bio}
      </p>
    </section>
  );
};

export default Hero;