/**
 * Contact.jsx - Contact Section & Footer
 * 
 * The final section of the portfolio featuring:
 * - Call-to-action for PM opportunities
 * - Contact card with availability status
 * - Social media links (LinkedIn, GitHub, Twitter, Email)
 * - Location and remote work availability
 * - Footer with credits
 * 
 * @component
 */

import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  Sparkles,
  Heart,
  ArrowUpRight
} from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  // Social media links configuration
  // Each link has name, icon, URL, and background color
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/devansh-sri/',
      color: '#E8E5FF'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/devansh-srivastava',
      color: '#E5F5F0'
    },
    { 
      name: 'Phone', 
      icon: Phone, 
      url: 'tel:+917838006151',
      color: '#FFE5E5'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=devansh.srivastava2@gmail.com',
      color: '#FFF9E6'
    },
  ];

  // Staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item slide-up animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className={styles.contact}>
      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.bgShape1} />
        <div className={styles.bgShape2} />
        <div className={styles.bgShape3} />
      </div>

      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className={styles.header}>
          <div className={styles.sectionTag}>
            <Sparkles size={16} />
            <span>Let's Connect</span>
          </div>
          
          <h2 className={styles.title}>
            Ready to Build
            <br />
            <span className={styles.highlight}>Something Great?</span>
          </h2>
          
          <p className={styles.subtitle}>
            I'm actively looking for Product Management opportunities where I can 
            combine my technical background with product thinking. Let's chat!
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div variants={itemVariants} className={styles.contactCard}>
          <div className={styles.cardContent}>
            <div className={styles.cardLeft}>
              <div className={styles.availabilityBadge}>
                <span className={styles.pulsingDot} />
                <span>Available for PM Roles</span>
              </div>
              
              <h3 className={styles.cardTitle}>Devansh Srivastava</h3>
              <p className={styles.cardRole}>Frontend Developer → Product Manager</p>
              
              <p className={styles.cardDescription}>
                2+ years in frontend development, building products for healthcare 
                and insurance. Currently exploring AI agents and product thinking.
              </p>

              <motion.a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=devansh.srivastava2@gmail.com"
                className={styles.emailButton}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                <span>Drop me an email</span>
                <ArrowUpRight size={16} />
              </motion.a>
            </div>

            <div className={styles.cardRight}>
              <h4 className={styles.socialTitle}>Find me on</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      style={{ backgroundColor: link.color }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={22} />
                    </motion.a>
                  );
                })}
              </div>

              <div className={styles.locationInfo}>
                <p>📍 Delhi, India</p>
                <p>🕐 Open to Remote</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className={styles.footer}>
          <p className={styles.footerText}>
            Built with <Heart size={14} className={styles.heartIcon} /> using React + Framer Motion
          </p>
          <p className={styles.copyright}>
            © 2026 Devansh Srivastava. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
