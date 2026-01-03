import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    category: string;
    imageSrc: string;
    href: string;
}

export default function ProjectCard({ title, category, imageSrc, href }: ProjectCardProps) {
    return (
        <Link href={href} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.category}>{category}</div>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles.arrow}>
                <ArrowRight size={24} />
            </div>
        </Link>
    );
}
