"use client";

import { useState } from 'react';
import Button from './Button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'full-remodel',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        try {
            // Send to local API route which proxies to the webhook
            const submissionData = {
                ...formData,
                submittedAt: new Date().toISOString(),
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Submission failed');
            }

            const data = await response.json();
            setSuccessMessage(data.message);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', service: 'full-remodel', message: '' });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="success-message">
                <CheckCircle size={48} className="icon-success" />
                <h3>Message Sent!</h3>
                <p>{successMessage || 'Thank you for reaching out. We will get back to you within 24 hours.'}</p>
                <Button onClick={() => setStatus('idle')} variant="outline">Send Another Message</Button>
                <style jsx>{`
                  .success-message {
                      text-align: center;
                      padding: 3rem;
                      background: var(--accent);
                      border-radius: var(--radius);
                  }
                  .icon-success {
                      color: green;
                      margin-bottom: 1rem;
                  }
                  h3 { margin-bottom: 0.5rem; font-family: var(--font-heading); }
                  p { margin-bottom: 1.5rem; }
              `}</style>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                />
            </div>

            <div className="row">
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="service">Interested Service</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                >
                    <option value="full-remodel">Full Kitchen Remodel</option>
                    <option value="cabinets">Cabinet Refacing / Replacement</option>
                    <option value="countertops">Countertops & Backsplash</option>
                    <option value="design">Design & Planning Only</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, timeline, and current kitchen..."
                />
            </div>

            <div className="submit-wrapper">
                <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full">
                    {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
                    {!status.includes('submit') && <Send size={18} style={{ marginLeft: '0.5rem' }} />}
                </Button>
            </div>

            {status === 'error' && (
                <div className="error-alert">
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again.</span>
                </div>
            )}

            <style jsx>{`
        .contact-form {
            background: white;
            padding: 2rem;
            border-radius: var(--radius);
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.1);
        }
        .form-group {
            margin-bottom: 1.25rem;
        }
        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--primary);
        }
        input, select, textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #cbd5e1;
            border-radius: var(--radius);
            font-size: 1rem;
            font-family: inherit;
            transition: border-color 0.2s;
        }
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--secondary);
            ring: 2px solid var(--secondary);
        }
        .submit-wrapper {
            margin-top: 1rem;
        }
        .error-alert {
            margin-top: 1rem;
            color: #ef4444;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
        }
        @media (max-width: 640px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </form>
    );
}
