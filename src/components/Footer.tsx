import Link from 'next/link';
import { Home, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.footerCol}>
                    <Link href="/" className={styles.logo}>
                        <Home size={24} className={styles.logoIcon} />
                        <span className="logo-text">KitchenExperts</span>
                    </Link>
                    <p className={styles.footerDesc}>
                        Transforming houses into dream homes with premium kitchen modeling services.
                    </p>
                </div>

                <div className={styles.footerCol}>
                    <h3>Quick Links</h3>
                    <div className={styles.footerLinks}>
                        <Link href="/services">Services</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/process">Process</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <div className={styles.footerCol}>
                    <h3>Contact</h3>
                    <div className={styles.footerLinks}>
                        <a href="tel:5551234567">(555) 123-4567</a>
                        <a href="mailto:hello@example.com">hello@example.com</a>
                        <span>123 Design District<br />City, ST 12345</span>
                    </div>
                </div>

                <div className={styles.footerCol}>
                    <h3>Follow Us</h3>
                    <div className={styles.footerLinks}>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className="container">
                    <p>&copy; {currentYear} KitchenExperts. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
