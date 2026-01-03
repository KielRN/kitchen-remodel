import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string; // Allow passing extra classes
}

export default function Button({
    href,
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}: ButtonProps) {

    const classNames = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classNames}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classNames}
            {...props}
        >
            {children}
        </button>
    );
}
