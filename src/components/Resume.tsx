import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, education, and skills
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-8"
          >
            <motion.a
              href="https://drive.google.com/file/d/1WOolBTyWfQMdFqsynRetV-IGMYaFVsl3/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full text-white font-bold text-xl shadow-2xl shadow-indigo-500/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <FileDown size={28} className="relative z-10" />
              <span className="relative z-10">Download My Resume</span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
