import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Let&apos;s build reliable cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <p className="mb-8 leading-relaxed text-slate-400">
              I am open to Cloud Engineer, DevOps Engineer, AWS Engineer, Azure Engineer, and Platform Engineering opportunities.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-cyan-500/30 hover:bg-white/10"
              >
                <div className="rounded-lg bg-cyan-500/10 p-2">
                  <Mail className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="font-medium text-white">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-cyan-500/30 hover:bg-white/10"
              >
                <div className="rounded-lg bg-cyan-500/10 p-2">
                  <Phone className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="font-medium text-white">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4">
                <div className="rounded-lg bg-cyan-500/10 p-2">
                  <MapPin className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="font-medium text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-4 !py-2"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-4 !py-2"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get('name') as string;
                const subject = formData.get('subject') as string;
                const message = formData.get('message') as string;
                window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Portfolio Contact from ${name}`)}&body=${encodeURIComponent(message)}`;
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  placeholder="Cloud Engineer Opportunity"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  placeholder="Tell me about the opportunity..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
