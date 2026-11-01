import { Link } from "react-router";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import styles from "./Home.module.css";

function Home() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(
          "[data-hero-line]",
          { clipPath: "inset(100% 0 0 0)", yPercent: 20 },
          {
            clipPath: "inset(0 0 0 0)",
            yPercent: 0,
            duration: 0.9,
            stagger: 0.14,
          },
        )
        .fromTo(
          "[data-hero-image]",
          { autoAlpha: 0, scale: 0.96, y: 18 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.05, ease: "power2.out" },
          0.08,
        )
        .fromTo(
          "[data-hero-fade]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.35",
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.headline}>
          <h1 aria-label="See things differently.">
            <span className={styles.revealLine} data-hero-line>
              See things
            </span>
            <span className={styles.revealLine} data-hero-line>
              differently.
            </span>
          </h1>
        </div>
        <div className={styles.info}>
          <p data-hero-fade>
            Thoughtful frames for everyday perspective. Designed in London and
            made for the ways you move through the world.
          </p>
          <div className={styles.actions} data-hero-fade>
            <Link to="/shop" className={styles.cta}>
              Shop collection <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.imageMotion} data-hero-image>
          <img
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1800&q=90"
            alt="Tortoiseshell sunglasses in a considered still life"
          />
        </div>
        <p className={styles.visualNote}>Made to hold the light</p>
      </div>
    </section>
  );
}

export default Home;
