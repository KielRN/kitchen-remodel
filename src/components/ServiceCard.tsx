import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    return (
        <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href={href} className={styles.learnMore}>
                Learn More <ArrowRight size={16} />
            </Link>
        </div>
    );
}
