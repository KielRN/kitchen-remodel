import Link from 'next/link';
import Button from './Button';
import ProjectCard from './ProjectCard';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
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
        }
    ];

    return (
        <section className={styles.section}>
            <div className={`container ${styles.header}`}>
                <div>
                    <h2>Featured Projects</h2>
                    <p>Explore some of our recent transformations.</p>
                </div>
                <div className={styles.headerActions}>
                    <Button href="/gallery" variant="outline" className="border-primary text-primary">View All Projects</Button>
                </div>
            </div>

            <div className={`container ${styles.grid}`}>
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>

            <div className={`container ${styles.mobileAction}`}>
                <Button href="/gallery" variant="outline">View All Projects</Button>
            </div>
        </section>
    );
}
