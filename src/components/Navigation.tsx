import Link from 'next/link';
import { Home as HomeIcon } from "lucide-react";
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <HomeIcon className={styles.logoIcon} size={32} />
                    <span className="logo-text">KitchenExperts</span>
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/services">Services</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/process">Process</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact" className={styles.btnPrimary}>Get a Quote</Link>
                </div>
            </div>
        </nav>
    );
}
