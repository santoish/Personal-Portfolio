import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Code2, Server, Wrench } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 size={40} />,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: <Server size={40} />,
      title: 'Backend',
      skills: ['Python', 'SQL'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Tools',
      skills: ['GitHub', 'VS Code', 'Photoshop'],
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a BCA student passionate about frontend and backend development.
            I build responsive, functional, and visually appealing web apps using
            HTML, CSS, JavaScript, Python.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all`}>
                      <div className="text-white">{card.icon}</div>
                    </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>

                  <div className="space-y-2">
                    {card.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient}`}></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>

                    <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-all`}></div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
