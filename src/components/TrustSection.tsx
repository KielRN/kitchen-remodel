import { ShieldCheck, Award, MapPin, Clock } from 'lucide-react';
import styles from './TrustSection.module.css';

export default function TrustSection() {
    const trustItems = [
        { icon: <ShieldCheck size={32} />, title: "Licensed & Insured", desc: "Fully compliant for your peace of mind" },
        { icon: <Award size={32} />, title: "15+ Years Experience", desc: "Proven track record of excellence" },
        { icon: <MapPin size={32} />, title: "Local Experts", desc: "Proudly serving the Metro Area" },
        { icon: <Clock size={32} />, title: "On-Time Guarantee", desc: "We respect your time and schedule" }
    ];

    return (
        <section className={styles.trustSection}>
            <div className={`container ${styles.trustGrid}`}>
                {trustItems.map((item, index) => (
                    <div key={index} className={styles.trustItem}>
                        <div className={styles.iconWrapper}>
                            {item.icon}
                        </div>
                        <div className={styles.content}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
