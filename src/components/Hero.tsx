import Image from 'next/image';
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBg}>
                <Image
                    src="/images/Kitchen1.png"
                    alt="Luxury Kitchen Remodel"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    quality={90}
                />
                <div className={styles.heroOverlay}></div>
            </div>

            <div className={`container ${styles.heroContent}`}>
                <h1>Kitchen Remodels Built to Last. Designed to Impress.</h1>
                <p>Experience the perfect blend of functionality and aesthetics with our premium kitchen renovation services.</p>
                <div className={styles.heroActions}>
                    <Button href="/contact" variant="secondary" size="lg">
                        Schedule a Free Consultation
                    </Button>
                    <Button href="/gallery" variant="outline" size="lg">
                        View Recent Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
