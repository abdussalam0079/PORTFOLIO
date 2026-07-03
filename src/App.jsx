import Strands from '../Strands';

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="hero-strands" aria-hidden="true">
          <Strands
            colors={['#F97316', '#7C3AED', '#06B6D4']}
            count={3}
            speed={0.5}
            amplitude={1}
            waviness={1}
            thickness={0.7}
            glow={2.6}
            taper={3}
            spread={1}
            intensity={0.6}
            saturation={1.5}
            opacity={1}
            scale={1.5}
            glass={false}
          />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">Creative developer / product designer</p>
          <h1 className="hero-title">
            Building elegant <span>digital experiences</span> that feel alive.
          </h1>
          <p className="hero-copy">
            I craft bold portfolio experiences, immersive interfaces, and thoughtful brand systems for modern products.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#work">View my work</a>
            <a href="#contact">Let’s connect</a>
          </div>
          <div className="hero-meta">
            <span>React</span>
            <span>Webflow</span>
            <span>Brand systems</span>
            <span>Interactive UI</span>
          </div>
        </div>
      </section>
    </main>
  );
}
