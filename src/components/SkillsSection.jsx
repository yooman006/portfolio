import React from "react";
import { motion } from "framer-motion";

export const skillsData = {
  cybersecurity: [
    { name: "Communication", percentage: 92 },
    { name: "Time Management", percentage: 82 },
    { name: "Team Work", percentage: 85 },
    { name: "Leadership", percentage: 86 },
  ],
  technicalStack: {
    Programming: ["JavaScript", "Python", "Java", "C"],
    "Frontend": ["HTML","CSS","React.js"],
    "Database": ["MYSQL"],
    "Cybersecurity Skills": ["Vulnerability Assessment", "Penetration Testing"],
    "Additional Skills": ["Digital Marketing"]
  }
};

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20">
      <motion.h2
        className="text-4xl font-bold text-sky-400 mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      {/* Soft Skills */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold mb-8 text-white border-l-4 border-sky-500 pl-4">
          Soft Skills
        </h3>
        <div className="space-y-6">
          {skillsData.cybersecurity.map((skill, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between text-sm text-gray-300 mb-2 px-1">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Stack */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-white border-l-4 border-sky-500 pl-4">
          Technical Stack
        </h3>
        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {Object.entries(skillsData.technicalStack).map(([category, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 sm:p-8 rounded-xl border border-sky-500 shadow-lg hover:shadow-sky-500/40 hover:scale-[1.01] transition-transform duration-300"
            >
              <h4 className="text-xl font-bold text-sky-400 mb-4">{category}</h4>
              <ul className="space-y-2 text-gray-300 text-base">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-[6px] h-[6px] bg-sky-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
