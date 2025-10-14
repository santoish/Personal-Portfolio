import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', percentage: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', percentage: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', percentage: 85, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', percentage: 90, color: 'from-blue-400 to-yellow-400' },
        { name: 'SQL', percentage: 55, color: 'from-green-500 to-emerald-600' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'GitHub', percentage: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'VS Code', percentage: 95, color: 'from-blue-500 to-indigo-600' },
        { name: 'Photoshop', percentage: 70, color: 'from-purple-500 to-pink-500' },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-white mb-6">{group.title}</h3>

              <div className="space-y-6">
                {group.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.percentage}%</span>
                    </div>

                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative group-hover:shadow-lg transition-all`}
                      >
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
