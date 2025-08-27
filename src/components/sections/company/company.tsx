import styles from "./company.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Company = () => {

    const companyTitleRef = useRef<HTMLHeadingElement>(null);
    const companyTextRef = useRef<HTMLParagraphElement>(null);
    const companyContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.set(companyTitleRef.current, {
            y: 100,
            opacity: 0
        })

        gsap.set(companyTextRef.current, {
            y: 100,
            opacity: 0
        })

        ScrollTrigger.create({
            trigger: companyContainerRef.current,
            start: "top 85%",
            scrub: false,
            markers: false,
            onEnter: () => {
                gsap.to(companyTitleRef.current, {
                    y: 0,
                    duration: 1,
                    ease: "power2.inOut",
                    opacity: 1
                });

                gsap.to(companyTextRef.current, {
                    y: 0,
                    duration: 1,
                    ease: "power2.inOut",
                    opacity: 1
                });
            }
        });

        return () => {
            ScrollTrigger.killAll();
        }        
    })

    return (
        <section className={styles.CompanyContainer} id="about" ref={companyContainerRef}>
            <h2 className={styles.CompanyTitle} ref={companyTitleRef}>Who we are?</h2>
            <p className={styles.CompanyText} ref={companyTextRef}>We are a professional vehicle detailing service based in Maidstone,
               Kent. Operating for the past 5 years, the business provides high-quality cleaning, 
               polishing, and protection services for cars, serving private individuals and local businesses. 
               The owner brings nearly 10 years of hands-on experience in car care and detailing, 
               combining expert knowledge with a passion for delivering exceptional results. 
               With a strong focus on reliability, honesty, and attention to detail, 
               Dunstan Detailing has built a loyal customer base through word-of-mouth and consistent, top-tier service.</p>
        </section>
    )
}

export default Company;
