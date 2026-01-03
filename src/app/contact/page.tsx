import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Contact Us - Kitchen Experts',
    description: 'Schedule your free kitchen consultation today.',
};

export default function ContactPage() {
    return (
        <main className="page-wrapper">
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Ready to build your dream kitchen? Let&apos;s talk.</p>
                </div>
            </section>

            <section className={styles.contactContent}>
                <div className={`container ${styles.contactGrid}`}>
                    <div className={styles.infoCol}>
                        <h2>Get In Touch</h2>
                        <p className={styles.introText}>Fill out the form to schedule your free in-home consultation. We&apos;ll discuss your goals, budget, and timeline to see if we&apos;re a good fit.</p>

                        <div className={styles.contactDetails}>
                            <div className={styles.detailItem}>
                                <div className={styles.icon}><Phone size={24} /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>(555) 123-4567</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.icon}><Mail size={24} /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>hello@kitchenexperts.com</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.icon}><MapPin size={24} /></div>
                                <div>
                                    <h3>Location</h3>
                                    <p>123 Design District<br />City, ST 12345</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.icon}><Clock size={24} /></div>
                                <div>
                                    <h3>Hours</h3>
                                    <p>Mon-Fri: 8am - 6pm<br />Sat: 10am - 4pm</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mapPlaceholder}>
                            <p>Map Placeholder</p>
                        </div>
                    </div>

                    <div className={styles.formCol}>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
