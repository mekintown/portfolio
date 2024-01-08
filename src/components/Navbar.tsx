import React, { useEffect, useState } from "react";
import { HiCloud } from "react-icons/hi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["portfolio", "skills", "contact"];
      const scrollPosition = window.scrollY;

      let selectedSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            selectedSection = section;
          }
        }
      });

      setActiveSection(selectedSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Portfolio", href: "#portfolio", section: "portfolio" },
    { name: "Skills", href: "#skills", section: "skills" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  return (
    <nav className="bg-gray-50 dark:bg-gray-800 p-4 text-gray-900 dark:text-white sticky  top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <HiCloud className="h-8 w-8 mr-2" />
          <span className="font-semibold text-xl tracking-tight">
            mekintown
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`hover:text-gray-200 ${
                    activeSection === item.section
                      ? "text-gray-700 dark:text-gray-100"
                      : "text-gray-900 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
