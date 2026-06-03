import { motion } from 'framer-motion';
import { Cloud, CloudRain, Code2, Container, Shield, BookOpen } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';

const iconMap = { Cloud, CloudRain, Code2, Container, Shield };

export default function Certifications() {
  const { ref, isInView } = useInView();

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            {certifications.title.split('&')[0]}
            <span className="gradient-text">& Learning</span>
          </h2>
          <p className="section-subheading">{certifications.disclaimer}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || BookOpen;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card-hover flex items-center gap-4 p-5"
              >
                <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-3">
                  <Icon className="h-6 w-6 text-purple-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-500">Continuous learning path</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
