import type { Metadata } from 'next';
import Button from '@/components/Button';
import { MessageSquare, PenTool, Archive, HardHat, CheckSquare } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Our Process - Kitchen Experts',
    description: 'Learn about our simple 5-step kitchen remodeling process.',
};

export default function ProcessPage() {
    const steps = [
        {
            number: 1,
            title: "Initial Consultation",
            desc: "We meet at your home to discuss your vision, budget, and timeline. We measure your space and identify any structural considerations.",
            icon: <MessageSquare size={32} />
        },
        {
            number: 2,
            title: "Design & Planning",
            desc: "Our designers create detailed floor plans and 3D renderings. You select materials, finishes, and fixtures with our guidance.",
            icon: <PenTool size={32} />
        },
        {
            number: 3,
            title: "Material Selection & Ordering",
            desc: "We order all cabinets, appliances, and materials. We verify delivery dates to create a precise construction schedule.",
            icon: <Archive size={32} />
        },
        {
            number: 4,
            title: "Construction",
            desc: "Our licensed crew protects your home and begins work. Demolition, rough-in, installation, and finishing touches are managed daily.",
            icon: <HardHat size={32} />
        },
        {
            number: 5,
            title: "Final Walkthrough",
            desc: "We tour your new kitchen together to ensure every detail meets our high standards. Any final adjustments are made immediately.",
            icon: <CheckSquare size={32} />
        }
    ];

    return (
        <main className="page-wrapper">
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>How It Works</h1>
                    <p>We believe in transparency and communication at every step.</p>
                </div>
            </section>

            <section className={styles.processSection}>
                <div className={`container ${styles.timelineContainer}`}>
                    <div className={styles.timelineLine}></div>
                    {steps.map((step, index) => (
                        <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                            <div className={styles.timelineMarker}>{step.number}</div>
                            <div className={styles.timelineContent}>
                                <div className={styles.iconBox}>
                                    {step.icon}
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Ready to start Step 1?</h2>
                    <Button href="/contact" size="lg">Schedule Consultation</Button>
                </div>
            </section>
        </main>
    );
}
