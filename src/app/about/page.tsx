import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'About Us - Kitchen Experts',
    description: 'Our story, our team, and our commitment to quality craftsmanship.',
};

export default function AboutPage() {
    return (
        <main className="page-wrapper">
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>About Us</h1>
                    <p>Building trust and beautiful kitchens, one home at a time.</p>
                </div>
            </section>

            <section className={styles.aboutContent}>
                <div className="container">
                    <div className={styles.splitLayout}>
                        <div className={styles.textCol}>
                            <h2>Our Story</h2>
                            <p>Founded in 2010, Kitchen Experts began with a simple mission: to bring transparency and true craftsmanship back to the remodeling industry. We saw too many homeowners frustrated by delays, hidden costs, and subpar work.</p>
                            <p>Over the last 15 years, we’ve specialized exclusively in kitchens. This focus allows us to master every detail of the process, from ergonomic design principles to the installation of high-end appliances.</p>
                            <p>We are a locally owned and operated business, proud to serve our community and build spaces where families gather, cook, and create memories.</p>

                            <h3>Our Values</h3>
                            <ul className={styles.valuesList}>
                                <li><strong>Integrity:</strong> We do what we say we&apos;ll do. No hidden fees.</li>
                                <li><strong>Quality:</strong> We don&apos;t cut corners. Period.</li>
                                <li><strong>Communication:</strong> You&apos;ll know the status of your project every single day.</li>
                                <li><strong>Cleanliness:</strong> We treat your home with respect and maintain a tidy job site.</li>
                            </ul>
                        </div>
                        <div className={styles.imageCol}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/Kitchen2.png"
                                    alt="Our Team at work"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.imageCaption}>
                                <p>Founder John Doe (Left) reviewing plans on site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.teamSection}>
                <div className="container">
                    <h2>Meet The Team</h2>
                    <div className={styles.teamGrid}>
                        {/* Mock Team Members */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={styles.teamCard}>
                                <div className={styles.teamImg}>
                                    {/* Placeholder for team photos */}
                                    <div className={styles.placeholderAvatar}></div>
                                </div>
                                <h3>Team Member {i}</h3>
                                <p className={styles.role}>Senior Designer</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
