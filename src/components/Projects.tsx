import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sign Language Recognition System',
      description: 'AI-powered system for real-time sign language detection and translation',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
      github: 'https://github.com/santoish/sign-language-system',
      live: 'https://github.com/santoish/sign-language-system',
      gradient: 'from-indigo-500 to-purple-600',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Web Scraper',
      description: 'Automated data extraction tool with scheduling and export features',
      tech: ['Python', 'BeautifulSoup', 'Requests', 'Pandas'],
      github: 'https://github.com/santoish/Web-Scraper-py',
      live: 'https://github.com/santoish/Web-Scraper-py',
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio with 3D animations and glassmorphism',
      tech: ['React', 'Tailwind', 'Framer Motion', 'Spline'],
      github: 'https://github.com/santoish/Personal-Portfolio',
      live: 'https://santhosh-portfolio-nu.vercel.app/',
      gradient: 'from-cyan-500 to-blue-600',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Job Portal Website',
      description: 'Complete job portal with search, filters, and application system',
      tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/santoish/Job-Portal-NN',
      live: 'https://novanectar-s.netlify.app/',
      gradient: 'from-blue-500 to-teal-600',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Resume Builder Website',
      description: 'Interactive resume builder with templates and export to PDF',
      tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/santoish/Resume-Genius',
      live: 'https://resume-genius-s.netlify.app/',
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Children Care Hospital Website',
      description: 'A clean, responsive Children Care Hospital website built with Tailwind & JS.',
      tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/santoish/Children-Care-Page',
      live: 'https://github.com/santoish/Children-Care-Page',
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://img.freepik.com/free-photo/portrait-woman-working-healthcare-system-as-pediatrician_23-2151686819.jpg?t=st=1760442032~exp=1760445632~hmac=1fc7bdcd8506e51fdb3cf00a13c11c168b955a90562bc68f728eeb50b87c08ce&w=800',
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                  <div className="relative h-full">
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-transparent to-transparent"></div>
                    </div>

                    <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                      >
                        <Github size={18} />
                        GitHub
                      </motion.a>

                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all`}
                      >
                        <ExternalLink size={18} />
                        Live
                      </motion.a>
                    </div>
                  </div>
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

export default Projects;
