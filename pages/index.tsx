import type { NextPage } from "next";
import { SEO } from "components/seo/seo";
import { Typer } from "components/typer/typer";

const loginUrl = "https://dashboard.naxusai.com/auth/login";
const docsUrl = "https://docs.naxusai.com/";
const contactUrl = "mailto:info@naxusai.com?subject=Naxus%20contact%20request";
const ctaTypedWords = [
  "are exploited.",
  "become incidents.",
  "reach production.",
  "escape your perimeter.",
  "find you.",
  "become someone else's 0-day.",
];

const lifecycle = [
  {
    number: "01",
    title: "Discover",
    description: "Map repos, services, exposed assets, and infra logic.",
  },
  {
    number: "02",
    title: "Exploit",
    description: "Chase reachable flows and attack paths SAST misses.",
    hot: true,
  },
  {
    number: "03",
    title: "Validate",
    description: "Dynamic execution proves exploitability before report.",
    hot: true,
  },
  {
    number: "04",
    title: "Remediate",
    description: "Fix guidance with proof your team can act on now.",
  },
];

const featureCards = [
  {
    title: "Offensive scanning",
    description:
      "Continuously hunts exploitable weaknesses across code, deps, services, and infra.",
    accent: "red",
  },
  {
    title: "Zero-day discovery",
    description:
      "Finds unknown vulns with deep reasoning and attack-path analysis.",
    accent: "red",
  },
  {
    title: "Zero false-positive",
    description:
      "Static plus dynamic validation proves real impact before reporting.",
    accent: "red",
  },
  {
    title: "Fits your workflow",
    description:
      "Connects to GitHub, CI/CD, and APIs, with offensive checks wherever you build.",
  },
  {
    title: "Autonomous agents",
    description:
      "Agents explore, verify, and prioritize what is actually exploitable.",
  },
  {
    title: "Mythos style... but better",
    description:
      "Comparable autonomous zero-day hunting with faster runs, sharper code-graph reasoning, and pricing built to be more economical for real teams.",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Naxus - Deep-space offensive AI"
        description="Mythos-style autonomous offensive AI agents map attack paths, surface zero-days, and prove exploitability across code and infrastructure at a more accessible cost."
      />
      <div className="nx-page">
        <header className="nx-nav" aria-label="Main navigation">
          <a className="nx-brand" href="#home" aria-label="Naxus home">
            <span className="nx-brand-mark" />
            <span>NAXUS</span>
          </a>
          <nav className="nx-nav-links">
            <a href="#features">Features</a>
            <a href={docsUrl}>Docs</a>
            <a href="#contact">Contact</a>
            <a className="nx-login" href={loginUrl} style={{ color: "#ffffff" }}>
              Login
            </a>
          </nav>
        </header>

        <main id="home">
          <section className="nx-hero">
            <div className="nx-grid-bg" />
            <div className="nx-stars" />
            <div className="nx-hero-copy">
              <p className="nx-eyebrow">Autonomous offensive AI</p>
              <h1>
                Map every attack path.
                <span> Surface every zero-day.</span>
              </h1>
              <p className="nx-lede">
                Mythos-style autonomous zero-day hunting at a better cost.
                Static and dynamic agents find and verify vulnerabilities
                across your code and infrastructure, giving you PoCs and remediations.
              </p>
              <div className="nx-actions" aria-label="Primary actions">
                <a className="nx-button nx-button-primary" href={loginUrl}>
                  Launch a scan
                </a>
                <a className="nx-button nx-button-secondary" href={contactUrl}>
                  Contact us
                </a>
              </div>
            </div>

            <AttackPathGraph />
          </section>

          <section className="nx-stats" aria-label="Naxus platform highlights">
            <div>
              <strong>0 FP</strong>
              <span>False-positive standard</span>
            </div>
            <div>
              <strong>100% traceable</strong>
              <span>Every check is logged</span>
            </div>
            <div>
              <strong>Fits your stack</strong>
              <span>GitHub, CI/CD, API</span>
            </div>
          </section>

          <section className="nx-section" id="features">
            <div className="nx-section-heading nx-centered">
              <p className="nx-kicker">Automated vulnerability lifecycle</p>
              <h2>An offensive lifecycle, not a passive scan.</h2>
              <p className="nx-section-subtitle">
                Only issues that matter, including unknown zero-days, reach
                your team with dynamically tested proof of concepts.
              </p>
            </div>

            <div className="nx-lifecycle">
              {lifecycle.map((item) => (
                <article className="nx-card nx-lifecycle-card" key={item.number}>
                  <span className={item.hot ? "nx-num nx-num-hot" : "nx-num"}>
                    {item.number}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="nx-section nx-evidence" id="evidence">
            <div className="nx-section-heading nx-centered">
              <p className="nx-kicker">Evidence, not black boxes</p>
              <h2>Don&apos;t trust blind agents, Know exactly what was tested.</h2>
              <p className="nx-section-subtitle">
                Naxus never fires blind. Every agent run is grounded in a code
                graph and a clear record of what it checked so you know the covering of the scan.
              </p>
            </div>

            <div className="nx-evidence-grid">
              <article className="nx-panel nx-trace-panel">
                <div>
                  <p
                    className="nx-panel-kicker nx-panel-kicker-blue"
                    style={{ color: "#3aa0ff" }}
                  >
                    Full traceability
                  </p>
                  <h3>Proof of what we checked.</h3>
                  <p>
                    Every threat check the agents run is recorded against the
                    code it targeted. Trace any finding, or any clean pass, back
                    to the exact entry point and functionality it came from.
                  </p>
                </div>
                <div className="nx-log" aria-label="Traceability coverage">
                  <div>
                    <span>Entry points detected</span>
                    <strong>30 / 30</strong>
                  </div>
                  <div>
                    <span>Sensitive functions detected</span>
                    <strong>56 / 56</strong>
                  </div>
                  <div>
                    <span>Threat checks generated</span>
                    <strong>1,367 / 1,367</strong>
                  </div>
                  <div className="nx-log-alert">
                    <span>Vulnerabilities confirmed</span>
                    <strong>46</strong>
                  </div>
                  <span className="nx-progress">
                    <span />
                  </span>
                  <small>coverage - 100% of in-scope surface</small>
                </div>
              </article>

              <article className="nx-panel">
                <div>
                  <p
                    className="nx-panel-kicker nx-panel-kicker-red"
                    style={{ color: "#ff2038" }}
                  >
                    Code-graph intelligence
                  </p>
                  <h3>Code graphs make it sharper and faster.</h3>
                  <p>
                    Naxus builds a graph of your code and infrastructure, from
                    functions and calls to data flows and dependencies, so
                    agents reason about real reachability.
                  </p>
                </div>
                <CodeGraph />
                <div className="nx-tags">
                  <span>↑ quality</span>
                  <span>↑ speed</span>
                  <span>↓ wasted compute</span>
                </div>
              </article>
            </div>
          </section>

          <section className="nx-feature-grid" aria-label="Feature list">
            {featureCards.map((feature) => (
              <article
                className={
                  feature.accent === "red"
                    ? "nx-card nx-feature-card nx-feature-hot-card"
                    : "nx-card nx-feature-card"
                }
                key={feature.title}
              >
                <h3 className={feature.accent === "red" ? "nx-hot" : ""}>
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </section>

          <section className="nx-cta-band" id="contact">
            <h2>
              <span className="nx-cta-line">Surface your zero-days</span>
              <span className="nx-cta-line">
                before they{" "}
                <span className="nx-typed-tail">
                  <Typer
                    strings={ctaTypedWords}
                    typeSpeed={72}
                    backSpeed={58}
                    backDelay={1200}
                  />
                </span>
              </span>
            </h2>
            <p>
              Send us your repository or infrastructure scope and we will launch
              a hunting workflow.
            </p>
            <a className="nx-button nx-button-primary" href={contactUrl}>
              Talk to Naxus
            </a>
          </section>
        </main>

        <footer className="nx-footer">
          <a className="nx-brand" href="#home" aria-label="Naxus home">
            <span className="nx-brand-mark" />
            <span>NAXUS</span>
          </a>
          <span>© 2026</span>
          <nav aria-label="Footer navigation">
            <a href={contactUrl}>Contact</a>
            <a href={docsUrl}>Docs</a>
            <a href={loginUrl}>Login</a>
          </nav>
        </footer>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          background: #06070f;
        }

        body {
          margin: 0;
          background: #06070f;
        }

        .nx-page,
        .nx-page * {
          box-sizing: border-box;
        }

        .nx-page {
          --bg: #06070f;
          --surface: #0d0f1d;
          --surface-soft: rgba(13, 15, 29, 0.74);
          --line: #23263b;
          --text: #e9ebff;
          --muted: #8a90b8;
          --cyan: #3aa0ff;
          --red: #ff2038;
          min-height: 100vh;
          overflow: hidden;
          color: var(--text);
          background:
            linear-gradient(180deg, rgba(58, 160, 255, 0.08), transparent 28rem),
            linear-gradient(115deg, rgba(255, 32, 56, 0.08), transparent 34rem),
            var(--bg);
          font-family: "Space Grotesk", system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        .nx-page a {
          color: inherit;
          text-decoration: none;
        }

        .nx-nav,
        .nx-footer {
          width: min(100%, 1200px);
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .nx-nav {
          min-height: 76px;
          border-bottom: 1px solid var(--line);
          position: relative;
          z-index: 3;
        }

        .nx-brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          font: 700 18px "JetBrains Mono", monospace;
          letter-spacing: 0.18em;
          white-space: nowrap;
        }

        .nx-brand-mark {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--cyan), var(--red));
          box-shadow: 0 0 16px rgba(58, 160, 255, 0.95);
          flex: 0 0 auto;
        }

        .nx-nav-links,
        .nx-footer nav {
          display: flex;
          align-items: center;
          gap: 30px;
          color: var(--muted);
          font: 500 13px "JetBrains Mono", monospace;
        }

        .nx-nav-links a,
        .nx-footer a {
          transition: color 160ms ease, opacity 160ms ease, transform 180ms ease;
        }

        .nx-nav-links a:hover,
        .nx-footer a:hover {
          color: var(--text);
        }

        .nx-login,
        .nx-button-primary {
          color: #06070f;
          background: linear-gradient(90deg, var(--cyan), var(--red), var(--cyan));
          background-size: 200% 100%;
          animation: nx-gradmove 4s linear infinite;
          box-shadow: 0 0 34px rgba(58, 160, 255, 0.36);
        }

        .nx-login {
          color: #ffffff;
          padding: 9px 16px;
          border-radius: 999px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .nx-page .nx-nav-links .nx-login,
        .nx-page .nx-nav-links .nx-login:hover,
        .nx-page .nx-nav-links .nx-login:active,
        .nx-page .nx-nav-links .nx-login:visited,
        .nx-page .nx-nav-links .nx-login:focus {
          color: #ffffff !important;
        }

        .nx-hero {
          width: min(100%, 1200px);
          margin: 0 auto;
          padding: 60px 40px 64px;
          position: relative;
          overflow: hidden;
        }

        .nx-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(35, 38, 59, 0.56) 1px, transparent 1px),
            linear-gradient(90deg, rgba(35, 38, 59, 0.56) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: linear-gradient(180deg, #000, rgba(0, 0, 0, 0.2), transparent);
          opacity: 0.42;
        }

        .nx-stars {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 14% 26%, rgba(233, 235, 255, 0.52) 0 1px, transparent 1.5px),
            radial-gradient(circle at 73% 18%, rgba(58, 160, 255, 0.46) 0 1px, transparent 1.5px),
            radial-gradient(circle at 84% 72%, rgba(255, 32, 56, 0.34) 0 1px, transparent 1.5px),
            radial-gradient(circle at 31% 80%, rgba(233, 235, 255, 0.36) 0 1px, transparent 1.5px);
          opacity: 0.8;
          pointer-events: none;
        }

        .nx-hero-copy {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .nx-eyebrow,
        .nx-kicker,
        .nx-panel-kicker {
          margin: 0;
          color: var(--cyan);
          font: 900 11px "JetBrains Mono", monospace;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-shadow: 0 0 0.45px currentColor, 0 0 0.45px currentColor;
        }

        .nx-eyebrow {
          display: inline-flex;
          border: 1px solid rgba(255, 32, 56, 0.42);
          color: var(--red);
          background: rgba(255, 32, 56, 0.1);
          padding: 6px 13px;
          border-radius: 999px;
          animation: nx-rise 520ms ease both;
        }

        .nx-hero h1 {
          margin: 24px auto 0;
          font-size: clamp(42px, 7vw, 62px);
          line-height: 1.03;
          font-weight: 700;
          letter-spacing: 0;
          max-width: 880px;
          animation: nx-rise 520ms ease 80ms both;
        }

        .nx-hero h1 span,
        .nx-stats strong:first-child,
        .nx-cta-band h2 {
          background: linear-gradient(110deg, var(--cyan), var(--red));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nx-cta-band h2 {
          display: inline-block;
          text-align: left;
        }

        .nx-typed-tail {
          display: inline-block;
          min-width: 18ch;
          text-align: left;
          white-space: nowrap;
        }

        .nx-cta-line {
          display: block;
        }

        .nx-lede {
          margin: 22px auto 0;
          max-width: 580px;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.55;
          animation: nx-rise 520ms ease 140ms both;
        }

        .nx-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
          animation: nx-rise 520ms ease 200ms both;
        }

        .nx-button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 14px 26px;
          font: 700 14px "JetBrains Mono", monospace;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .nx-button:hover,
        .nx-login:hover,
        .nx-card:hover {
          transform: translateY(-2px);
        }

        .nx-button-secondary {
          color: var(--text);
          background: rgba(233, 235, 255, 0.06);
          border: 1px solid var(--line);
        }

        .nx-attack-graph {
          position: relative;
          z-index: 1;
          margin: 44px auto 0;
          max-width: 880px;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 18px;
          background: var(--surface-soft);
          backdrop-filter: blur(8px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
          animation: nx-rise 620ms ease 260ms both;
        }

        .nx-attack-graph svg,
        .nx-code-graph svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .nx-dash {
          animation: nx-dashflow 5s linear infinite;
        }

        .nx-pulse {
          animation: nx-nodepulse 1.7s ease-in-out infinite;
        }

        .nx-stats {
          width: min(100%, 1200px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .nx-stats div {
          padding: 26px 40px;
          border-right: 1px solid var(--line);
        }

        .nx-stats div:last-child {
          border-right: 0;
        }

        .nx-stats strong {
          display: block;
          color: var(--text);
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1.1;
        }

        .nx-stats span {
          display: block;
          margin-top: 7px;
          color: var(--muted);
          font: 500 12px "JetBrains Mono", monospace;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .nx-section,
        .nx-feature-grid,
        .nx-cta-band {
          width: min(100%, 1200px);
          margin: 0 auto;
          padding: 64px 40px;
        }

        .nx-section-heading {
          margin-bottom: 36px;
        }

        .nx-centered {
          text-align: center;
        }

        .nx-section-heading h2,
        .nx-cta-band h2 {
          max-width: 760px;
          margin: 14px auto 8px;
          font-size: clamp(30px, 4vw, 40px);
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 0;
          text-shadow: 0 0 0.55px currentColor, 0 0 0.55px currentColor;
        }

        .nx-section-heading p:not(.nx-kicker),
        .nx-cta-band p {
          max-width: 630px;
          margin: 0 auto;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.6;
        }

        .nx-section-heading .nx-section-subtitle {
          color: #aeb4dc;
          font-weight: 800;
          text-shadow: 0 0 0.45px currentColor, 0 0 0.45px currentColor;
        }

        .nx-lifecycle,
        .nx-feature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .nx-feature-grid {
          grid-template-columns: repeat(3, 1fr);
          padding-top: 0;
        }

        .nx-card,
        .nx-panel {
          border: 1px solid var(--line);
          border-radius: 12px;
          background: var(--surface);
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .nx-card {
          min-height: 170px;
          padding: 24px;
        }

        .nx-card:hover,
        .nx-panel:hover {
          border-color: rgba(58, 160, 255, 0.55);
          background: #101426;
        }

        .nx-num {
          color: var(--cyan);
          font: 700 13px "JetBrains Mono", monospace;
        }

        .nx-num-hot,
        .nx-hot,
        .nx-log-alert {
          color: var(--red);
        }

        .nx-page .nx-panel-kicker-blue {
          color: #3aa0ff !important;
        }

        .nx-page .nx-panel-kicker-red {
          color: #ff2038 !important;
        }

        .nx-card h3,
        .nx-panel h3 {
          margin: 12px 0 6px;
          color: var(--text);
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
        }

        .nx-lifecycle-card h3 {
          font-weight: 900;
          text-shadow: 0 0 0.45px currentColor, 0 0 0.45px currentColor;
        }

        .nx-feature-card h3 {
          color: var(--cyan);
          margin-top: 0;
        }

        .nx-feature-card h3.nx-hot {
          color: var(--red);
        }

        .nx-feature-hot-card:hover {
          border-color: rgba(255, 32, 56, 0.72);
        }

        .nx-card p,
        .nx-panel p {
          margin: 0;
          color: var(--muted);
          font-size: 13.5px;
          line-height: 1.55;
        }

        .nx-evidence {
          padding-top: 8px;
        }

        .nx-evidence-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .nx-panel {
          min-height: 390px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: space-between;
        }

        .nx-trace-panel {
          justify-content: flex-start;
        }

        .nx-panel h3 {
          margin: 10px 0 6px;
          font-size: 22px;
        }

        .nx-log {
          border-top: 1px solid var(--line);
          padding-top: 14px;
          color: var(--muted);
          font: 500 12.5px/2 "JetBrains Mono", monospace;
        }

        .nx-log div {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          padding: 2px 0;
        }

        .nx-log strong {
          color: var(--text);
          font-weight: 700;
          white-space: nowrap;
        }

        .nx-log-alert strong {
          color: var(--red);
        }

        .nx-progress {
          display: block;
          height: 6px;
          margin-top: 10px;
          border-radius: 999px;
          overflow: hidden;
          background: rgba(233, 235, 255, 0.1);
        }

        .nx-progress span {
          display: block;
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, var(--cyan), var(--red));
        }

        .nx-log small {
          display: block;
          color: var(--muted);
          margin-top: 6px;
        }

        .nx-code-graph {
          border-top: 1px solid var(--line);
          padding-top: 14px;
        }

        .nx-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          color: var(--cyan);
          font: 500 11px "JetBrains Mono", monospace;
        }

        .nx-tags span:last-child {
          color: var(--red);
        }

        .nx-cta-band {
          width: min(calc(100% - 80px), 1120px);
          margin-bottom: 56px;
          border: 1px solid var(--line);
          border-radius: 14px;
          text-align: center;
          background:
            linear-gradient(120deg, rgba(58, 160, 255, 0.16), rgba(255, 32, 56, 0.13)),
            var(--surface);
        }

        .nx-cta-band .nx-button {
          margin-top: 28px;
        }

        .nx-footer {
          border-top: 1px solid var(--line);
          color: var(--muted);
          font: 500 12px "JetBrains Mono", monospace;
        }

        @keyframes nx-rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes nx-dashflow {
          to {
            stroke-dashoffset: -220;
          }
        }

        @keyframes nx-nodepulse {
          0%,
          100% {
            opacity: 0.56;
            r: 6;
          }
          50% {
            opacity: 1;
            r: 8;
          }
        }

        @keyframes nx-gradmove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: -200% 50%;
          }
        }

        @media (max-width: 900px) {
          .nx-nav,
          .nx-footer {
            padding-inline: 24px;
          }

          .nx-nav {
            align-items: flex-start;
            flex-direction: column;
          }

          .nx-nav-links,
          .nx-footer nav {
            flex-wrap: wrap;
            gap: 16px;
          }

          .nx-hero,
          .nx-section,
          .nx-feature-grid {
            padding-inline: 24px;
          }

          .nx-stats,
          .nx-lifecycle,
          .nx-evidence-grid,
          .nx-feature-grid {
            grid-template-columns: 1fr;
          }

          .nx-stats div {
            border-right: 0;
            border-bottom: 1px solid var(--line);
            padding-inline: 24px;
          }

          .nx-stats div:last-child {
            border-bottom: 0;
          }

          .nx-cta-band {
            width: calc(100% - 48px);
            padding: 42px 24px;
          }

          .nx-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .nx-hero {
            padding-top: 44px;
          }

          .nx-nav-links {
            font-size: 12px;
          }

          .nx-login {
            padding: 8px 13px;
          }

          .nx-button {
            width: 100%;
          }

          .nx-attack-graph {
            padding: 10px;
            border-radius: 10px;
          }

          .nx-panel,
          .nx-card {
            padding: 22px;
          }

          .nx-log div {
            flex-direction: column;
            gap: 0;
            margin-bottom: 8px;
          }
        }
      `}</style>
    </>
  );
};

const AttackPathGraph = () => (
  <div className="nx-attack-graph" aria-label="Live attack-path graph">
    <svg viewBox="0 0 880 240" role="img">
      <title>Attack-path graph from entry point to zero-day</title>
      <defs>
        <linearGradient id="nx-edge-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#ff2038" />
        </linearGradient>
      </defs>
      <g
        className="nx-dash"
        stroke="url(#nx-edge-gradient)"
        strokeWidth="1.6"
        fill="none"
        opacity=".7"
        strokeDasharray="7 7"
      >
        <path d="M70,120 L210,60" />
        <path d="M70,120 L210,180" />
        <path d="M210,60 L380,40" />
        <path d="M210,60 L380,120" />
        <path d="M210,180 L380,200" />
        <path d="M380,40 L560,80" />
        <path d="M380,120 L560,80" />
        <path d="M380,120 L560,160" />
        <path d="M380,200 L560,160" />
        <path d="M560,80 L740,120" />
        <path d="M560,160 L740,120" />
      </g>
      <circle cx="70" cy="120" r="6" fill="#8a90b8" />
      <circle cx="210" cy="60" r="5" fill="#3aa0ff" />
      <circle cx="210" cy="180" r="5" fill="#3aa0ff" />
      <circle cx="380" cy="40" r="5" fill="#e9ebff" />
      <circle cx="380" cy="120" r="5" fill="#e9ebff" />
      <circle cx="380" cy="200" r="5" fill="#e9ebff" />
      <circle cx="560" cy="80" r="5" fill="#3aa0ff" />
      <circle cx="560" cy="160" r="5" fill="#ff2038" />
      <circle className="nx-pulse" cx="740" cy="120" r="8" fill="#ff2038" />
      <text x="60" y="108" fill="#8a90b8" fontFamily="JetBrains Mono" fontSize="9">
        entry
      </text>
      <text x="712" y="102" fill="#ff2038" fontFamily="JetBrains Mono" fontSize="9">
        0-DAY
      </text>
    </svg>
  </div>
);

const CodeGraph = () => (
  <div className="nx-code-graph" aria-label="Code graph intelligence">
    <svg viewBox="0 0 360 130" role="img">
      <title>Code graph connecting functions and dependencies</title>
      <g stroke="#3aa0ff" strokeWidth="1.3" fill="none" opacity=".5">
        <path d="M30,65 L110,30" />
        <path d="M30,65 L110,100" />
        <path d="M110,30 L200,55" />
        <path d="M110,100 L200,55" />
        <path d="M110,100 L200,110" />
        <path d="M200,55 L290,40" />
        <path d="M200,55 L290,90" />
        <path d="M200,110 L290,90" />
      </g>
      <circle cx="30" cy="65" r="5" fill="#3aa0ff" />
      <circle cx="110" cy="30" r="4" fill="#e9ebff" />
      <circle cx="110" cy="100" r="4" fill="#e9ebff" />
      <circle cx="200" cy="55" r="4" fill="#e9ebff" />
      <circle cx="200" cy="110" r="4" fill="#e9ebff" />
      <circle cx="290" cy="40" r="4" fill="#3aa0ff" />
      <circle className="nx-pulse" cx="290" cy="90" r="6" fill="#ff2038" />
    </svg>
  </div>
);

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {},
      header: {
        display: "none",
      },
      footer: {
        display: "none",
      },
    },
  };
}
