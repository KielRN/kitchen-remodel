import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import { Hammer, PaintBucket, LayoutDashboard, Ruler, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Services - Kitchen Experts',
    description: 'Full kitchen remodeling, cabinet refacing, and custom design services.',
};

export default function ServicesPage() {
    const services = [
        {
            id: "full-remodel",
            title: "Full Kitchen Remodel",
            description: "Our signature service. We strip your kitchen down to the studs and rebuild it to perfection. Ideal for homeowners looking for a completely new layout, updated systems, and a fresh start.",
            features: [
                "Complete demolition & disposal",
                "Plumbing & electrical updates",
                "Custom layout configuration",
                "Flooring installation",
                "Lighting design"
            ],
            icon: <Hammer size={40} className="text-[var(--secondary)]" />
        },
        {
            id: "cabinets",
            title: "Cabinet Refacing & Custom Cabinetry",
            description: "Give your kitchen a facelift without the mess of a full demolition. We offer premium refacing options as well as fully custom cabinetry for new builds.",
            features: [
                "Solid wood doors & drawers",
                "Soft-close hardware upgrades",
                "Wide variety of finishes",
                "Custom storage solutions",
                "Under-cabinet lighting"
            ],
            icon: <PaintBucket size={40} className="text-[var(--secondary)]" />
        },
        {
            id: "design",
            title: "Design & Planning",
            description: "Not ready to build? Let's plan. Our professional designers work with you to create strict blueprints and 3D renderings of your future space.",
            features: [
                "3D Realistic Renderings",
                "Material selection boards",
                "Detailed floor plans",
                "Budget analysis",
                "Permit-ready drawings"
            ],
            icon: <Ruler size={40} className="text-[var(--secondary)]" />
        }
    ];

    return (
        <main className="page-wrapper">
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Our Services</h1>
                    <p>From simple updates to complex renovations, we have the expertise to bring your vision to life.</p>
                </div>
            </section>

            <section className={styles.servicesList}>
                <div className="container">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} className={styles.serviceRow}>
                            <div className={styles.serviceContent}>
                                <div className={styles.iconHeader}>
                                    {service.icon}
                                    <h2>{service.title}</h2>
                                </div>
                                <p className={styles.serviceDesc}>{service.description}</p>
                                <ul className={styles.featureList}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className={styles.checkIcon} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button href="/contact">Get Started</Button>
                            </div>
                            <div className={styles.serviceImagePlaceholder}>
                                <div className={styles.placeholderBg}>
                                    <Image
                                        src={`/images/Kitchen${(index % 3) + 1}.png`}
                                        alt={service.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Ready to transform your kitchen?</h2>
                    <Button href="/contact" size="lg" variant="secondary">Schedule Free Consultation</Button>
                </div>
            </section>
        </main>
    );
}
