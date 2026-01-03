import { Star } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Homeowner, Westville",
            text: "The team was incredibly professional and the result exceeded our expectations. Our new kitchen is the heart of our home now.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Homeowner, Oak Park",
            text: "They finished on time and on budget. Transparency was key for us, and they delivered exactly what they promised.",
            rating: 5
        },
        {
            name: "Jessica & Tom",
            role: "Homeowners, Downtown",
            text: "From the initial design to the final cabinet install, the attention to detail was unmatched. Highly recommend!",
            rating: 5
        }
    ];

    return (
        <section className={styles.section}>
            <div className={`container ${styles.header}`}>
                <h2>What Our Clients Say</h2>
            </div>
            <div className={`container ${styles.grid}`}>
                {testimonials.map((t, idx) => (
                    <div key={idx} className={styles.card}>
                        <div className={styles.stars}>
                            {[...Array(t.rating)].map((_, i) => (
                                <Star key={i} size={18} fill="#d97706" color="#d97706" />
                            ))}
                        </div>
                        <p className={styles.quote}>&quot;{t.text}&quot;</p>
                        <div className={styles.author}>
                            <strong>{t.name}</strong>
                            <span>{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
