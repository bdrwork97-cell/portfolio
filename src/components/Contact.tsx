import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="section-alt relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text-dark">Touch</span>
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
            <p className="mb-8 leading-relaxed text-ms-text-secondary">
              I am open to Cloud Engineer, DevOps Engineer, AWS Engineer, Azure Engineer, and Platform Engineering opportunities.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 rounded-xl border border-[#edebe9] bg-ms-gray p-4 transition-all hover:border-azure-500/30 hover:bg-ms-gray-dark"
              >
                <div className="rounded-lg bg-azure-50 p-2">
                  <Mail className="h-5 w-5 text-azure-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-ms-text-secondary">Email</p>
                  <p className="font-medium text-ms-text">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 rounded-xl border border-[#edebe9] bg-ms-gray p-4 transition-all hover:border-azure-500/30 hover:bg-ms-gray-dark"
              >
                <div className="rounded-lg bg-azure-50 p-2">
                  <Phone className="h-5 w-5 text-azure-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-ms-text-secondary">Phone</p>
                  <p className="font-medium text-ms-text">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-[#edebe9] bg-ms-gray p-4">
                <div className="rounded-lg bg-azure-50 p-2">
                  <MapPin className="h-5 w-5 text-azure-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-ms-text-secondary">Location</p>
                  <p className="font-medium text-ms-text">{personalInfo.location}</p>
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
            <h3 className="mb-6 text-lg font-semibold text-ms-text">Send a Message</h3>
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
                <label htmlFor="name" className="mb-1.5 block text-sm text-ms-text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-[#edebe9] bg-ms-gray px-4 py-3 text-sm text-ms-text placeholder:text-ms-text-secondary/50 outline-none transition-colors focus:border-azure-500/50 focus:ring-1 focus:ring-azure-500/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-ms-text-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-xl border border-[#edebe9] bg-ms-gray px-4 py-3 text-sm text-ms-text placeholder:text-ms-text-secondary/50 outline-none transition-colors focus:border-azure-500/50 focus:ring-1 focus:ring-azure-500/30"
                  placeholder="Cloud Engineer Opportunity"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-ms-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-[#edebe9] bg-ms-gray px-4 py-3 text-sm text-ms-text placeholder:text-ms-text-secondary/50 outline-none transition-colors focus:border-azure-500/50 focus:ring-1 focus:ring-azure-500/30"
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
