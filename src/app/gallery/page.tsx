import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Project Gallery - Kitchen Experts',
    description: 'View our portfolio of completed kitchen remodels.',
};

export default function GalleryPage() {
    // Generate more mock projects
    const projects = [
        {
            title: "Modern Coastal Kitchen",
            category: "Full Remodel",
            imageSrc: "/images/Kitchen1.png",
            href: "/gallery/project-1"
        },
        {
            title: "Classic Farmhouse",
            category: "Cabinet Refacing",
            imageSrc: "/images/Kitchen2.png",
            href: "/gallery/project-2"
        },
        {
            title: "Urban Industrial",
            category: "Design & Build",
            imageSrc: "/images/Kitchen3.png",
            href: "/gallery/project-3"
        },
        {
            title: "Minimalist White",
            category: "Full Remodel",
            imageSrc: "/images/Kitchen2.png",
            href: "/gallery/project-4"
        },
        {
            title: "Traditional Oak",
            category: "Countertops",
            imageSrc: "/images/Kitchen1.png",
            href: "/gallery/project-5"
        },
        {
            title: "Scandinavian Compact",
            category: "Layout Redesign",
            imageSrc: "/images/Kitchen3.png",
            href: "/gallery/project-6"
        }
    ];

    return (
        <main className="page-wrapper">
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Our Work</h1>
                    <p>Visual proof of our commitment to quality.</p>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <div className="container">
                    <div className={styles.galleryGrid}>
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
