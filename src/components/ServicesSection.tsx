import { Hammer, PaintBucket, LayoutDashboard, Ruler } from 'lucide-react';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
    const services = [
        {
            title: "Full Kitchen Remodels",
            desc: "Complete transformation of your space from demo to final touches.",
            icon: <Hammer size={48} strokeWidth={1.5} />,
            href: "/services#full-remodel"
        },
        {
            title: "Cabinet Refacing & Custom",
            desc: "Give your cabinets a fresh new look or build custom storage solutions.",
            icon: <PaintBucket size={48} strokeWidth={1.5} />,
            href: "/services#cabinets"
        },
        {
            title: "Layout Redesign",
            desc: "Optimize workflow and open up your space for better functionality.",
            icon: <LayoutDashboard size={48} strokeWidth={1.5} />,
            href: "/services#design"
        },
        {
            title: "Design & Planning",
            desc: "Expert 3D rendering and material selection guidance.",
            icon: <Ruler size={48} strokeWidth={1.5} />,
            href: "/services#design"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={`container ${styles.header}`}>
                <h2>Our Core Services</h2>
                <p>We provide comprehensive solutions for every aspect of your kitchen renovation.</p>
            </div>
            <div className={`container ${styles.grid}`}>
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} description={service.desc} icon={service.icon} href={service.href} />
                ))}
            </div>
        </section>
    );
}
