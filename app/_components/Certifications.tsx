'use client';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certifications = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.cert-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="certifications">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Certifications" />

                <div className="grid gap-10">
                    {CERTIFICATIONS.map((item) => (
                        <div key={item.title} className="cert-item">
                            <p className={`font-anton leading-none ${item.isMain ? "text-5xl text-primary" : "text-3xl text-muted-foreground"}`}>
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
