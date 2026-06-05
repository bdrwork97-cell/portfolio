import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { availabilityContent, personalInfo, sectionContent } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';
import TiltCard from './TiltCard';
import { ContactMessageMascot } from './ContactMessageMascot';
import {
  ContactDirectHeaderMascot,
  ContactEmailMascot,
  ContactGmailGuideMascot,
  ContactLocationMascot,
  ContactNameMascot,
  ContactPhoneMascot,
  ContactSendMascot,
  ContactSmsMascot,
} from './ContactMascot';
import { ContactSubjectMascot } from './ContactSubjectMascot';
import SectionHeader from './SectionHeader';

const RECIPIENT_EMAIL = 'Bdrwork97@gmail.com';
const PHONE_TEL = 'tel:+19453234349';
const PHONE_SMS = 'sms:+19453234349';
const PHONE_DISPLAY = '+1 945 323 4349';

function buildGmailComposeUrl(subject: string, body: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const { ref, isInView } = useInView();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [activeField, setActiveField] = useState<'name' | 'subject' | 'message' | null>(null);
  const [error, setError] = useState('');
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');
  const [isOpeningSms, setIsOpeningSms] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedSubject || !trimmedMessage) {
      setError('Please fill in all fields before sending your message.');
      return;
    }

    setError('');
    setIsSendingEmail(true);
    setEmailStatus('Opening Gmail with your message pre-filled…');

    const body = `Name: ${trimmedName}\n\nMessage:\n${trimmedMessage}`;
    const gmailUrl = buildGmailComposeUrl(trimmedSubject, body);

    setTimeout(() => {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      setIsSendingEmail(false);
      setEmailStatus('Gmail opened — review the draft and click Send in Gmail to deliver it.');
    }, 700);

    setTimeout(() => setEmailStatus(''), 8000);
  };

  const handleSms = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpeningSms(true);
    setTimeout(() => { window.location.href = PHONE_SMS; }, 500);
    setTimeout(() => setIsOpeningSms(false), 1000);
  };

  const handleCall = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCalling(true);
    setTimeout(() => { window.location.href = PHONE_TEL; }, 400);
    setTimeout(() => setIsCalling(false), 1000);
  };

  return (
    <section id="contact" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<span className="gradient-text-dark">{sectionContent.contact.heading}</span>}
          subtitle={availabilityContent.opportunities}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <TiltCard
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            tilt={8}
            depth={12}
            className="contact-premium-card group relative p-8"
          >
            <div className="contact-premium-border" aria-hidden="true" />
            <div className="mb-4 flex items-start gap-3">
              <ContactDirectHeaderMascot />
              <div>
                <h3 className="text-lg font-semibold text-ms-text">Message Me Directly</h3>
                <p className="mt-1 text-sm leading-relaxed text-ms-text-secondary">
                  Prefer a quick text or call? Reach out directly.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center gap-3 rounded-xl border border-azure-200/50 bg-azure-50/50 p-4 transition-all hover:border-azure-300/50 hover:bg-azure-50/80"
              >
                <ContactEmailMascot />
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-ms-text-secondary">Email</p>
                  <p className="font-medium text-ms-text">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.div whileHover={{ x: 4, scale: 1.01 }} className="flex items-center gap-3 rounded-xl border border-azure-200/50 bg-azure-50/50 p-4 transition-all hover:border-azure-300/50 hover:bg-azure-50/80">
                <ContactPhoneMascot ringing={isCalling} />
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-ms-text-secondary">Phone</p>
                  <p className="font-medium text-ms-text">{PHONE_DISPLAY}</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 4, scale: 1.01 }} className="flex items-center gap-3 rounded-xl border border-azure-200/50 bg-azure-50/50 p-4 transition-all hover:border-azure-300/50 hover:bg-azure-50/80">
                <ContactLocationMascot />
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-ms-text-secondary">Location</p>
                  <p className="font-medium text-ms-text">{personalInfo.location}</p>
                  <p className="mt-1 text-xs text-ms-text-secondary">Open to relocation</p>
                  <p className="font-medium text-ms-text">{personalInfo.relocation}</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="button"
                onClick={handleSms}
                disabled={isOpeningSms}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                animate={isOpeningSms ? { boxShadow: '0 0 20px rgba(0, 120, 212, 0.35)' } : {}}
                className="btn-secondary flex flex-1 items-center justify-center gap-2 !py-2.5 disabled:opacity-80"
              >
                <ContactSmsMascot active={isOpeningSms} />
                {isOpeningSms ? 'Opening Messages...' : 'Send SMS'}
              </motion.button>

              <motion.button
                type="button"
                onClick={handleCall}
                disabled={isCalling}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                animate={isCalling ? { boxShadow: '0 0 20px rgba(0, 120, 212, 0.35)' } : {}}
                className="btn-primary flex flex-1 items-center justify-center gap-2 !py-2.5 disabled:opacity-80"
              >
                <ContactPhoneMascot ringing={isCalling} />
                {isCalling ? 'Starting Call...' : 'Call Me'}
              </motion.button>
            </div>

            <div className="mt-6">
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
          </TiltCard>

          <TiltCard
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            tilt={8}
            depth={12}
            className="contact-premium-card group relative p-8"
          >
            <div className="contact-premium-border" aria-hidden="true" />
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-ms-text">Send a Message</h3>
              <p className="mt-1 text-sm text-ms-text-secondary">
                Fill in the form below, then click the button — Gmail opens with everything pre-filled to{' '}
                <span className="font-medium text-ms-text">{RECIPIENT_EMAIL}</span>.
              </p>
            </div>

            <div className="mb-5 rounded-xl border border-azure-200/50 bg-azure-50/50 p-4">
              <div className="mb-3 flex items-center gap-3">
                <ContactGmailGuideMascot />
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300/80">How it works — Gmail only</p>
              </div>
              <ol className="space-y-2 text-xs text-ms-text-secondary">
                <li className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-azure-500 text-[10px] font-bold text-white">1</span>
                  <span>Enter your <strong className="text-ms-text">name</strong>, <strong className="text-ms-text">subject</strong>, and <strong className="text-ms-text">message</strong> here.</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-azure-500 text-[10px] font-bold text-white">2</span>
                  <span>Click <strong className="text-ms-text">Open in Gmail &amp; Send</strong> below.</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-azure-500 text-[10px] font-bold text-white">3</span>
                  <span>Gmail opens in a new tab — review the draft, then hit <strong className="text-ms-text">Send</strong> inside Gmail.</span>
                </li>
              </ol>
              <p className="mt-3 rounded-lg border border-azure-200/50 bg-azure-50/50 px-2.5 py-1.5 text-[11px] text-ms-text-secondary">
                Nothing is emailed until you click Send inside Gmail.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-ms-text-secondary">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  required
                  disabled={isSendingEmail}
                  className="form-input-focus w-full rounded-xl px-4 py-3 text-sm outline-none disabled:opacity-60"
                  placeholder="Your name"
                />
                {activeField === 'name' && <ContactNameMascot name={name} />}
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-ms-text-secondary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onFocus={() => setActiveField('subject')}
                  onBlur={() => setActiveField(null)}
                  required
                  disabled={isSendingEmail}
                  className="form-input-focus w-full rounded-xl px-4 py-3 text-sm outline-none disabled:opacity-60"
                  placeholder="e.g. Interview — share time slots"
                />
                {activeField === 'subject' && <ContactSubjectMascot subject={subject} />}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-ms-text-secondary">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  required
                  rows={5}
                  disabled={isSendingEmail}
                  className="form-input-focus w-full resize-none rounded-xl px-4 py-3 text-sm outline-none disabled:opacity-60"
                  placeholder="Tell me about the role, or share your available time slots…"
                />
                {activeField === 'message' && <ContactMessageMascot message={message} />}
              </div>

              <motion.button
                type="submit"
                disabled={isSendingEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                animate={isSendingEmail ? { boxShadow: '0 0 28px rgba(80, 230, 255, 0.35)' } : {}}
                className="btn-primary flex w-full items-center justify-center gap-2 disabled:opacity-90"
              >
                <ContactSendMascot active={isSendingEmail} />
                {isSendingEmail ? 'Opening Gmail…' : 'Open in Gmail & Send'}
              </motion.button>

              {emailStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-azure-200/60 bg-azure-50/80 px-3 py-2"
                  role="status"
                >
                  <ContactSendMascot active />
                  <p className="text-xs leading-relaxed text-azure-700">{emailStatus}</p>
                </motion.div>
              )}
              {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
              <p className="text-center text-[11px] leading-relaxed text-ms-text-secondary">
                Sends to <span className="font-medium text-ms-text">{RECIPIENT_EMAIL}</span> via Gmail.
                {' '}Or email directly:{' '}
                <a href={`mailto:${RECIPIENT_EMAIL}`} className="font-medium text-cyan-400 hover:underline">
                  {RECIPIENT_EMAIL}
                </a>
              </p>
            </form>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
