import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useTypewriter } from '../hooks/use-typewriter';

export default function Landing() {
 const typed = useTypewriter(['are exploited.', 'become incidents.', 'reach production.', 'escape your perimeter.', 'find you.', "become someone else's 0-day."]);
 const typedOrg = useTypewriter(['HackTricks']);
 const [menu, setMenu] = useState(false);
 const {backdrop, animState, services, commits, extAttacks, mobileSteps, reconRows, pipeline, routes, features} = (() => {
    const cy = '#4BF0C0', red = '#ff6b6b', grn = 'oklch(0.8 0.15 160)', vio = 'oklch(0.78 0.12 300)', amb = 'oklch(0.86 0.13 90)';
    return {
      backdrop: true,
      animState: 'running',
      typed: typed,
      typedOrg: typedOrg,
      services: [
        { n: '01', tag: 'CODE SCANNING', href: '#code', c: cy, t: 'Zero-day hunting in your code, plus commit and PR monitoring', input: 'A GitHub repo or a ZIP', does: ['Full-repo hunt for unknown vulnerabilities', 'Every new commit and PR checked before merge', 'Each finding validated with a PoC and a fix'] },
        { n: '02', tag: 'EXTERNAL ATTACK SURFACE RED TEAM', href: '#external', c: vio, t: 'Org recon plus full external blackbox discovery and exploitation', input: 'A company name, or your own target list', does: ['Finds the domains, IPs, repos and apps it owns', 'Hunts leaked secrets and credentials', 'Attacks exposed services and network misconfigs', 'Pentests every web app it finds'] },
        { n: '03', tag: 'WEB APPLICATIONS', href: '#websites', c: grn, t: 'Full web application blackbox pentest', input: 'A URL, with or without credentials', does: ['Maps every route, API, role and technology', 'Writes threat checks for that app and attacks them', 'Access control, injection, auth and business logic'] },
        { n: '04', tag: 'MOBILE APPLICATIONS', href: '#mobile', c: red, t: 'Full mobile application blackbox pentest', input: 'A store link, an APK or an IPA', does: ['Android and iOS, static and dynamic', 'Secrets, deep links, exported components, storage', 'Attacks the backend APIs the app talks to'] },
      ],
      commits: [
        { ref: 'PR #482', title: 'Add bulk certificate export', status: 'BLOCKED · path traversal introduced', fg: '#ff9a9a', bg: 'rgba(255,90,90,0.12)', bd: 'rgba(255,90,90,0.4)' },
        { ref: 'a91f3c2', title: 'Refactor session middleware', status: 'clean · 214 checks', fg: '#4BF0C0', bg: 'rgba(75,240,192,0.08)', bd: 'rgba(75,240,192,0.3)' },
        { ref: '7c0de41', title: 'New GraphQL resolver for labs', status: 'HIGH · missing role check', fg: '#ff9a9a', bg: 'rgba(255,90,90,0.12)', bd: 'rgba(255,90,90,0.4)' },
        { ref: 'PR #479', title: 'Bump jsonwebtoken to 9.0.2', status: 'clean · 38 checks', fg: '#4BF0C0', bg: 'rgba(75,240,192,0.08)', bd: 'rgba(75,240,192,0.3)' },
        { ref: 'PR #477', title: 'Instructor grading dashboard', status: 'scanning…', fg: 'rgba(230,236,244,0.7)', bg: 'rgba(255,255,255,0.04)', bd: 'rgba(255,255,255,0.12)' },
      ],
      extAttacks: [
        { t: 'Leaks', d: 'Secrets, keys and credentials in public repos, packages, JS bundles and paste sites.' },
        { t: 'Network issues', d: 'Open ports, exposed admin panels, databases and outdated services, fingerprinted and tested.' },
        { t: 'Web applications', d: 'Every site found is grouped, mapped and pentested as a full blackbox.' },
        { t: 'Takeovers & misconfigs', d: 'Dangling DNS, open buckets, weak TLS and forgotten staging hosts.' },
      ],
      mobileSteps: [
        { k: 'UNPACK', kc: cy, t: 'Decompile the APK / IPA and read the code, manifest and plist' },
        { k: 'SECRETS', kc: amb, t: 'Hardcoded keys, tokens and backend URLs extracted and tested' },
        { k: 'SURFACE', kc: vio, t: 'Deep links, exported components, URL schemes and WebViews mapped' },
        { k: 'RUN', kc: grn, t: 'App run on a test device, instrumented, with traffic intercepted' },
        { k: 'STORAGE', kc: amb, t: 'Local data, keychain, logs and cache checked for sensitive data' },
        { k: 'BACKEND', kc: red, t: 'Every API the app calls is attacked like a web app' },
      ],
      reconRows: [
        { kind: 'DOMAIN', value: 'hacktricks-training.com', quote: 'Registrant Organization: HackTricks', src: 'whois' },
        { kind: 'IP RANGE', value: '185.199.42.0/26', quote: 'netname: HACKTRICKS-NET', src: 'ripe.net' },
        { kind: 'GITHUB', value: 'github.com/HackTricks-wiki', quote: 'Verified domain hacktricks.wiki', src: 'github.com' },
        { kind: 'ANDROID APP', value: 'wiki.hacktricks.reader', quote: '"package_name": "wiki.hacktricks.reader"', src: 'assetlinks.json' },
        { kind: 'SUBSIDIARY', value: 'HackTricks Training SL', quote: 'Operated by HackTricks Training SL', src: 'hacktricks-training.com/legal' },
      ],
      pipeline: [
        { n: '01', name: 'Organization recon', d: 'Owned assets found and verified with sources.', color: vio },
        { n: '02', name: 'Discovery', d: 'Subdomains, IPs, ports, websites and leaks mapped.', color: cy },
        { n: '03', name: 'Finding review', d: 'Every raw finding is re-validated before it is kept.', color: cy },
        { n: '04', name: 'Network services audit', d: 'Open TCP and UDP services found, fingerprinted and attacked.', color: amb },
        { n: '05', name: 'Website discovery', d: 'Routes, APIs and technologies catalogued.', color: grn },
        { n: '06', name: 'Web audits', d: 'Checks written per app, attacked, proven.', color: red },
      ],
      routes: [
        { m: 'POST', mc: amb, path: '/api/auth/login', note: 'email + GitHub SSO' },
        { m: 'GET', mc: cy, path: '/api/v1/exams/attempts/{id}', note: 'student-scoped' },
        { m: 'POST', mc: amb, path: '/graphql', note: 'introspection on' },
        { m: 'PUT', mc: vio, path: '/api/v1/certificates/{id}/pdf', note: 'file render' },
        { m: 'GET', mc: cy, path: '/admin/labs', note: 'role: instructor' },
      ],
      features: [
        { t: 'Offensive scanning', d: 'Continuously hunts exploitable weaknesses across code, dependencies, web apps, mobile apps, services and infrastructure.', c: red },
        { t: 'Zero-day discovery', d: 'Finds unknown vulnerabilities with deep reasoning and attack-path analysis.', c: red },
        { t: 'Zero false positives', d: 'Static plus dynamic validation proves real impact before anything is reported.', c: red },
        { t: 'Fits your workflow', d: 'Connects to GitHub, CI/CD and the Naxus API, with offensive checks wherever you build.', c: cy },
        { t: 'Red Team Mode', d: 'Lets agents go further on critical paths when you want an attacker\'s full effort.', c: cy },
        { t: 'Mythos style… but better', d: 'Comparable autonomous zero-day hunting with faster runs, sharper code-graph reasoning and pricing built for real teams.', c: cy },
      ],
    };})();
 return <><Head><title>Naxus · Autonomous AI pentesting for code, perimeter, web and mobile apps</title><meta name="description" content="Invite-only AI agents that find zero-days in your code, red-team your external attack surface, and pentest your web and mobile apps, with a PoC and fix for every finding."/><link rel="canonical" href="https://www.naxusai.com/"/></Head>


<div style={{"position": "relative", "minHeight": "100vh", "overflow": "hidden", "backgroundColor": "#06080c", "backgroundImage": "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", "backgroundSize": "44px 44px"}}>
  {backdrop && <>
    <div style={{"position": "absolute", "inset": "0", "pointerEvents": "none", "overflow": "hidden", "zIndex": "0"}}>
      <div style={{"position": "absolute", "width": "720px", "height": "720px", "left": "10%", "top": "-300px", "borderRadius": "50%", "background": "rgba(75,240,192,0.13)", "filter": "blur(130px)"}}></div>
      <div style={{"position": "absolute", "width": "560px", "height": "560px", "right": "-180px", "top": "900px", "borderRadius": "50%", "background": "rgba(60,220,170,0.08)", "filter": "blur(140px)"}}></div>
      <div style={{"position": "absolute", "width": "520px", "height": "520px", "left": "-200px", "top": "2100px", "borderRadius": "50%", "background": "rgba(75,240,192,0.08)", "filter": "blur(130px)"}}></div>
      <div style={{"position": "absolute", "width": "480px", "height": "480px", "right": "5%", "top": "3300px", "borderRadius": "50%", "background": "rgba(255,90,90,0.07)", "filter": "blur(130px)"}}></div>
    </div>
  </>}

  <div style={{"position": "relative", "zIndex": "1", "display": "flex", "flexDirection": "column"}}>

    
    <header className={menu ? "nx-nav open" : "nx-nav"} style={{"position": "sticky", "top": "0", "zIndex": "5", "padding": "14px 24px", "display": "flex", "justifyContent": "center"}}>
      <button className="nx-menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>Menu</button><div style={{"width": "100%", "maxWidth": "1180px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "flexWrap": "wrap", "padding": "10px 12px 10px 18px", "borderRadius": "16px", "background": "rgba(10,14,20,0.55)", "backdropFilter": "blur(22px) saturate(150%)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.05)"}}>
        <a href={"#home"} style={{"display": "flex", "alignItems": "center", "gap": "11px", "color": "#E6ECF4"}}>
          <svg width={"24"} height={"24"} viewBox={"0 0 32 32"} style={{"filter": "drop-shadow(0 0 6px rgba(75,240,192,0.6))"}}><polygon points={"16,3 29,16 16,29 3,16"} fill={"#020504"} stroke={"#4BF0C0"} strokeWidth={"2.4"} strokeLinejoin={"miter"}></polygon></svg>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontWeight": "500", "letterSpacing": "0.28em", "fontSize": "14px"}}>NAXUS</span>
        </a>
        <nav style={{"display": "flex", "alignItems": "center", "gap": "6px", "flexWrap": "wrap", "fontSize": "13.5px"}}>
          <a href={"#code"} style={{"padding": "8px 12px", "borderRadius": "9px", "color": "rgba(230,236,244,0.7)"}} className="nx-hover-0">Code</a>
          <a href={"#external"} style={{"padding": "8px 12px", "borderRadius": "9px", "color": "rgba(230,236,244,0.7)"}} className="nx-hover-1">External attack surface red team</a>
          <a href={"#websites"} style={{"padding": "8px 12px", "borderRadius": "9px", "color": "rgba(230,236,244,0.7)"}} className="nx-hover-2">Web apps</a>
          <a href={"#mobile"} style={{"padding": "8px 12px", "borderRadius": "9px", "color": "rgba(230,236,244,0.7)"}} className="nx-hover-3">Mobile apps</a>
          <a href={"https://docs.naxusai.com/"} style={{"padding": "8px 12px", "borderRadius": "9px", "color": "rgba(230,236,244,0.7)"}} className="nx-hover-4">Docs</a>
          <a href={"#contact"} style={{"padding": "8px 12px", "borderRadius": "9px", "color": "rgba(230,236,244,0.7)"}} className="nx-hover-5">Contact</a>
          <a href={"https://dashboard.naxusai.com/auth/login"} style={{"padding": "8px 12px", "borderRadius": "9px", "color": "rgba(230,236,244,0.7)"}} className="nx-hover-6">Log in</a>
          <a href={"/request-access/"} style={{"marginLeft": "6px", "padding": "8px 16px", "borderRadius": "10px", "fontWeight": "500", "color": "#04070a", "background": "#4BF0C0", "boxShadow": "0 0 24px -4px rgba(75,240,192,0.6)"}} className="nx-hover-7">Request access</a>
        </nav>
      </div>
    </header>

    <main id={"home"} style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "padding": "0 24px"}}>

      
      <section style={{"width": "100%", "maxWidth": "1180px", "padding": "72px 0 56px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "26px", "textAlign": "center"}}>
        <span style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "6px 12px", "borderRadius": "999px", "fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.14em", "color": "#4BF0C0", "background": "rgba(75,240,192,0.08)", "border": "1px solid rgba(75,240,192,0.3)"}}><span style={{"width": "6px", "height": "6px", "borderRadius": "50%", "background": "#4BF0C0", "boxShadow": "0 0 8px #4BF0C0", "animation": "nxpulse 1.8s ease-in-out infinite"}}></span>AUTONOMOUS OFFENSIVE AI · INVITE ONLY</span>
        <h1 style={{"margin": "0", "maxWidth": "960px", "fontSize": "clamp(40px,6.2vw,72px)", "lineHeight": "1.04", "fontWeight": "500", "letterSpacing": "-0.035em", "textWrap": "balance"}}>AI agents that hack <span style={{"color": "#4BF0C0", "textShadow": "0 0 40px rgba(75,240,192,0.35)"}}>your code, your perimeter, your web and mobile apps.</span></h1>
        <p style={{"margin": "0", "maxWidth": "660px", "fontSize": "18px", "lineHeight": "1.55", "color": "rgba(230,236,244,0.62)", "textWrap": "pretty"}}>Mythos-style autonomous pentesting at a better cost. Naxus finds zero-days, exploits them and proves every finding with a PoC and a fix.</p>
        <div style={{"display": "flex", "gap": "12px", "flexWrap": "wrap", "justifyContent": "center"}}>
          <a href={"/request-access/"} style={{"padding": "14px 24px", "borderRadius": "12px", "fontWeight": "500", "fontSize": "15px", "color": "#04070a", "background": "#4BF0C0", "boxShadow": "0 0 34px -6px rgba(75,240,192,0.7)"}} className="nx-hover-8">Request access</a>
          <a href={"https://dashboard.naxusai.com/auth/login"} style={{"padding": "14px 24px", "borderRadius": "12px", "fontWeight": "500", "fontSize": "15px", "color": "#E6ECF4", "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.12)", "backdropFilter": "blur(12px)"}} className="nx-hover-9">Log in</a>
        </div>
        <span style={{"marginTop": "-12px", "fontSize": "13px", "color": "rgba(230,236,244,0.5)"}}>Naxus is available to approved teams only. Tell us what you want tested and we&apos;ll review your request.</span>
        <div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "justifyContent": "center", "fontFamily": "'Geist Mono',monospace", "fontSize": "12px"}}>
          <a href={"#code"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "8px 13px", "borderRadius": "10px", "color": "rgba(230,236,244,0.8)", "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.1)"}} className="nx-hover-10"><span style={{"color": "#4BF0C0"}}>01</span>Code 0-days + PR monitoring</a>
          <a href={"#external"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "8px 13px", "borderRadius": "10px", "color": "rgba(230,236,244,0.8)", "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.1)"}} className="nx-hover-11"><span style={{"color": "#4BF0C0"}}>02</span>External attack surface red team</a>
          <a href={"#websites"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "8px 13px", "borderRadius": "10px", "color": "rgba(230,236,244,0.8)", "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.1)"}} className="nx-hover-12"><span style={{"color": "#4BF0C0"}}>03</span>Web app blackbox</a>
          <a href={"#mobile"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "8px 13px", "borderRadius": "10px", "color": "rgba(230,236,244,0.8)", "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.1)"}} className="nx-hover-13"><span style={{"color": "#4BF0C0"}}>04</span>Mobile app blackbox</a>
        </div>

        <div style={{"width": "100%", "maxWidth": "980px", "marginTop": "22px", "padding": "18px", "borderRadius": "22px", "textAlign": "left", "background": "linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))", "backdropFilter": "blur(24px) saturate(150%)", "border": "1px solid rgba(255,255,255,0.09)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.07),0 40px 90px -30px rgba(0,0,0,0.8)"}}>
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "12px", "flexWrap": "wrap", "padding": "2px 6px 14px"}}>
            <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "oklch(0.8 0.15 160)", "boxShadow": "0 0 8px oklch(0.8 0.15 160)"}}></span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.12em", "color": "rgba(230,236,244,0.6)"}}>ATTACK PATH · LIVE</span></div>
            <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap", "fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px"}}>
              <span style={{"padding": "4px 9px", "borderRadius": "7px", "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)", "color": "rgba(230,236,244,0.7)"}}>entry: POST /api/export</span>
              <span style={{"padding": "4px 9px", "borderRadius": "7px", "background": "rgba(255,90,90,0.1)", "border": "1px solid rgba(255,90,90,0.35)", "color": "#ff9a9a"}}>validated · PoC attached</span>
            </div>
          </div>
          <div style={{"borderRadius": "14px", "background": "rgba(0,0,0,0.35)", "border": "1px solid rgba(255,255,255,0.06)", "padding": "10px"}}>
            <svg viewBox={"0 0 880 240"} style={{"display": "block", "width": "100%", "height": "auto"}}>
              <g stroke={"rgba(75,240,192,0.7)"} strokeWidth={"1.4"} fill={"none"} strokeDasharray={"6 7"} style={{"animation": "nxdash 6s linear infinite", "animationPlayState": animState}}>
                <path d={"M70,120 L210,60"}></path><path d={"M70,120 L210,180"}></path><path d={"M210,60 L380,40"}></path><path d={"M210,60 L380,120"}></path><path d={"M210,180 L380,200"}></path><path d={"M380,40 L560,80"}></path><path d={"M380,120 L560,160"}></path><path d={"M380,200 L560,160"}></path><path d={"M560,80 L740,120"}></path>
              </g>
              <path d={"M70,120 L210,60 L380,120 L560,160 L740,120"} stroke={"#ff6b6b"} strokeWidth={"2"} fill={"none"} opacity={"0.9"}></path>
              <g fontFamily={"Geist Mono, monospace"} fontSize={"10"} fill={"rgba(230,236,244,0.55)"}>
                <circle cx={"70"} cy={"120"} r={"6"} fill={"#E6ECF4"}></circle><text x={"40"} y={"146"}>entry</text>
                <circle cx={"210"} cy={"60"} r={"5"} fill={"#4BF0C0"}></circle><text x={"182"} y={"44"}>auth.check</text>
                <circle cx={"210"} cy={"180"} r={"5"} fill={"#4BF0C0"}></circle><text x={"182"} y={"206"}>rate.limit</text>
                <circle cx={"380"} cy={"40"} r={"5"} fill={"rgba(230,236,244,0.6)"}></circle><text x={"352"} y={"26"}>cache.get</text>
                <circle cx={"380"} cy={"120"} r={"5"} fill={"#ff6b6b"}></circle><text x={"352"} y={"146"}>export.build</text>
                <circle cx={"380"} cy={"200"} r={"5"} fill={"rgba(230,236,244,0.6)"}></circle><text x={"352"} y={"226"}>audit.log</text>
                <circle cx={"560"} cy={"80"} r={"5"} fill={"rgba(230,236,244,0.6)"}></circle><text x={"532"} y={"64"}>s3.put</text>
                <circle cx={"560"} cy={"160"} r={"5"} fill={"#ff6b6b"}></circle><text x={"532"} y={"186"}>path.join</text>
                <circle cx={"740"} cy={"120"} r={"9"} fill={"#ff6b6b"} style={{"filter": "drop-shadow(0 0 8px #ff6b6b)"}}></circle><text x={"712"} y={"98"} fill={"#ff9a9a"}>0-DAY</text><text x={"700"} y={"148"} fill={"rgba(230,236,244,0.55)"}>file read</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      
      <section style={{"width": "100%", "maxWidth": "1180px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "12px"}}>
        <div style={{"padding": "22px 24px", "borderRadius": "16px", "background": "linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))", "border": "1px solid rgba(255,255,255,0.07)", "display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "28px", "fontWeight": "500", "letterSpacing": "-0.02em", "color": "#4BF0C0"}}>0 FP</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "rgba(230,236,244,0.5)"}}>FALSE-POSITIVE STANDARD</span></div>
        <div style={{"padding": "22px 24px", "borderRadius": "16px", "background": "linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))", "border": "1px solid rgba(255,255,255,0.07)", "display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "28px", "fontWeight": "500", "letterSpacing": "-0.02em"}}>100% traceable</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "rgba(230,236,244,0.5)"}}>EVERY CHECK IS LOGGED</span></div>
        <div style={{"padding": "22px 24px", "borderRadius": "16px", "background": "linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))", "border": "1px solid rgba(255,255,255,0.07)", "display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "28px", "fontWeight": "500", "letterSpacing": "-0.02em"}}>Fits your stack</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "rgba(230,236,244,0.5)"}}>GITHUB · CI/CD · API</span></div>
      </section>

      
      <section id={"platform"} style={{"width": "100%", "maxWidth": "1180px", "padding": "110px 0 0", "display": "flex", "flexDirection": "column", "gap": "36px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "720px"}}>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.16em", "color": "#4BF0C0"}}>WHAT NAXUS DOES · FOUR SERVICES</span>
          <h2 style={{"margin": "0", "fontSize": "clamp(30px,4vw,46px)", "lineHeight": "1.08", "fontWeight": "500", "letterSpacing": "-0.03em", "textWrap": "balance"}}>Pick what you want hacked.</h2>
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>Give Naxus a repository, a company name, a URL or a mobile app. It runs a full offensive assessment and reports only what it proved exploitable.</p>
        </div>
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "14px"}}>
          {services.map((s, index) => <Fragment key={index}>
            <a href={s.href} style={{"padding": "24px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "14px", "color": "#E6ECF4", "background": "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}} className="nx-hover-14">
              <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.12em", "color": "#4BF0C0"}}>{s.n} · {s.tag}</span>
              <h3 style={{"margin": "0", "fontSize": "21px", "lineHeight": "1.2", "fontWeight": "500", "letterSpacing": "-0.015em", "textWrap": "balance"}}>{s.t}</h3>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "4px", "padding": "10px 12px", "borderRadius": "10px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.06)"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10px", "letterSpacing": "0.1em", "color": "rgba(230,236,244,0.45)"}}>YOU GIVE US</span><span style={{"fontSize": "13px", "color": "rgba(230,236,244,0.85)"}}>{s.input}</span></div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                {s.does.map((d, index) => <Fragment key={index}>
                  <div style={{"display": "flex", "gap": "9px", "alignItems": "flex-start", "fontSize": "13.5px", "lineHeight": "1.45", "color": "rgba(230,236,244,0.7)"}}><span style={{"flex": "none", "width": "6px", "height": "6px", "marginTop": "6px", "transform": "rotate(45deg)", "background": s.c}}></span><span >{d}</span></div>
                </Fragment>)}
              </div>
              <span style={{"marginTop": "auto", "paddingTop": "4px", "fontSize": "13.5px", "color": "#4BF0C0"}}>See how it works →</span>
            </a>
          </Fragment>)}
        </div>
      </section>

      
      <section id={"code"} style={{"width": "100%", "maxWidth": "1180px", "padding": "120px 0 0", "display": "flex", "flexDirection": "column", "gap": "36px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "760px"}}>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.16em", "color": "#4BF0C0"}}>01 · CODE SCANNING</span>
          <h2 style={{"margin": "0", "fontSize": "clamp(30px,4vw,46px)", "lineHeight": "1.08", "fontWeight": "500", "letterSpacing": "-0.03em", "textWrap": "balance"}}>Hunt zero-days in your code. Then watch every commit and PR.</h2>
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>Connect GitHub or upload a ZIP. A full scan builds a code graph and hunts unknown vulnerabilities from every entry point. After that, Naxus keeps watching: each new commit and pull request is checked before it ships.</p>
        </div>
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(340px,1fr))", "gap": "16px"}}>
          <div style={{"padding": "22px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "rgba(230,236,244,0.45)"}}>FULL REPOSITORY · 0-DAY HUNT</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "color": "rgba(230,236,244,0.7)"}}>hacktricks/training-platform</span></div>
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,minmax(0,1fr))", "gap": "8px"}}>
              <div style={{"padding": "12px", "borderRadius": "12px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.06)", "display": "flex", "flexDirection": "column", "gap": "4px"}}><span style={{"fontSize": "20px", "fontWeight": "500"}}>30</span><span style={{"fontSize": "11.5px", "color": "rgba(230,236,244,0.5)"}}>entry points</span></div>
              <div style={{"padding": "12px", "borderRadius": "12px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.06)", "display": "flex", "flexDirection": "column", "gap": "4px"}}><span style={{"fontSize": "20px", "fontWeight": "500"}}>1,367</span><span style={{"fontSize": "11.5px", "color": "rgba(230,236,244,0.5)"}}>threat checks</span></div>
              <div style={{"padding": "12px", "borderRadius": "12px", "background": "rgba(255,90,90,0.08)", "border": "1px solid rgba(255,90,90,0.3)", "display": "flex", "flexDirection": "column", "gap": "4px"}}><span style={{"fontSize": "20px", "fontWeight": "500", "color": "#ff9a9a"}}>46</span><span style={{"fontSize": "11.5px", "color": "rgba(230,236,244,0.5)"}}>proven vulns</span></div>
            </div>
            <div style={{"padding": "16px", "borderRadius": "14px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "linear-gradient(180deg,rgba(255,90,90,0.07),rgba(0,0,0,0.25))", "border": "1px solid rgba(255,90,90,0.28)"}}>
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.1em", "color": "#ff9a9a"}}>0-DAY · CRITICAL</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "color": "rgba(230,236,244,0.55)"}}>PoC + fix attached</span></div>
              <span style={{"fontSize": "15px", "fontWeight": "500", "textWrap": "pretty"}}>Certificate export reads any file on the server</span>
              <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "overflowWrap": "anywhere"}}>POST /api/export → export.build() → path.join(BASE, req.body.name) → fs.readFile</span>
            </div>
            <div style={{"marginTop": "auto", "display": "flex", "gap": "6px", "flexWrap": "wrap", "fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "color": "rgba(230,236,244,0.65)"}}><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>GitHub</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>ZIP upload</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>Code graph</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>Dynamic validation</span></div>
          </div>

          <div style={{"padding": "22px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "linear-gradient(180deg,rgba(75,240,192,0.07),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(75,240,192,0.28)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "rgba(230,236,244,0.45)"}}>CONTINUOUS MONITORING · COMMITS &amp; PRs</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px", "fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "color": "#4BF0C0"}}><span style={{"width": "6px", "height": "6px", "borderRadius": "50%", "background": "#4BF0C0", "boxShadow": "0 0 8px #4BF0C0", "animation": "nxpulse 1.8s ease-in-out infinite"}}></span>watching main</span></div>
            <div style={{"display": "flex", "flexDirection": "column", "borderRadius": "14px", "overflow": "hidden", "border": "1px solid rgba(255,255,255,0.07)"}}>
              {commits.map((c, index) => <Fragment key={index}>
                <div style={{"display": "grid", "gridTemplateColumns": "72px minmax(0,1fr)", "gap": "10px", "padding": "11px 14px", "background": "rgba(0,0,0,0.25)", "borderBottom": "1px solid rgba(255,255,255,0.05)"}}>
                  <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "color": "rgba(230,236,244,0.55)", "paddingTop": "1px"}}>{c.ref}</span>
                  <div style={{"display": "flex", "flexDirection": "column", "gap": "5px", "minWidth": "0"}}>
                    <span style={{"fontSize": "13px", "overflowWrap": "anywhere"}}>{c.title}</span>
                    <span style={{"alignSelf": "flex-start", "fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "padding": "2px 7px", "borderRadius": "6px", "color": c.fg, "background": c.bg, "border": `1px solid ${c.bd}`}}>{c.status}</span>
                  </div>
                </div>
              </Fragment>)}
            </div>
            <span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.55)"}}>Findings are posted on the PR with the PoC and a suggested fix, before anything is merged.</span>
            <div style={{"marginTop": "auto", "display": "flex", "gap": "6px", "flexWrap": "wrap", "fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "color": "rgba(230,236,244,0.65)"}}><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>Every commit</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>PR review</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>CI/CD gate</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>API</span></div>
          </div>
        </div>
      </section>

      
      <section id={"external"} style={{"width": "100%", "maxWidth": "1180px", "padding": "120px 0 0", "display": "flex", "flexDirection": "column", "gap": "36px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "760px"}}>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.16em", "color": "#4BF0C0"}}>02 · EXTERNAL ATTACK SURFACE RED TEAM</span>
          <h2 style={{"margin": "0", "fontSize": "clamp(30px,4vw,46px)", "lineHeight": "1.08", "fontWeight": "500", "letterSpacing": "-0.03em", "textWrap": "balance"}}>Type a company name. Naxus finds everything it owns, then breaks in.</h2>
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>A full external blackbox, from recon to exploitation. Research agents map what the organization owns and prove ownership with sources. Then attack agents go after all of it: leaked secrets, exposed network services, misconfigurations and every web application they find.</p>
        </div>

        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "10px"}}>
          {extAttacks.map((x, index) => <Fragment key={index}>
            <div style={{"padding": "16px", "borderRadius": "14px", "display": "flex", "flexDirection": "column", "gap": "6px", "background": "rgba(255,90,90,0.05)", "border": "1px solid rgba(255,90,90,0.22)"}}>
              <span style={{"fontSize": "14.5px", "fontWeight": "500"}}>{x.t}</span>
              <span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.58)", "textWrap": "pretty"}}>{x.d}</span>
            </div>
          </Fragment>)}
        </div>

        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(340px,1fr))", "gap": "16px", "alignItems": "stretch"}}>
          <div style={{"padding": "22px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
            <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "rgba(230,236,244,0.45)"}}>NEW EXTERNAL SCAN</span>
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "4px", "padding": "4px", "borderRadius": "12px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.08)", "fontSize": "13px", "textAlign": "center"}}>
              <span style={{"padding": "9px", "borderRadius": "9px", "background": "rgba(75,240,192,0.14)", "color": "#E6ECF4"}}>Research an organization</span>
              <span style={{"padding": "9px", "borderRadius": "9px", "color": "rgba(230,236,244,0.5)"}}>I have target assets</span>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "12px", "color": "rgba(230,236,244,0.55)"}}>Organization name</span><div style={{"padding": "11px 12px", "borderRadius": "10px", "background": "rgba(0,0,0,0.35)", "border": "1px solid rgba(75,240,192,0.4)", "fontSize": "14px"}}>{typedOrg}<span style={{"display": "inline-block", "width": "7px", "height": "15px", "marginLeft": "2px", "verticalAlign": "-2px", "background": "#4BF0C0", "animation": "nxblink 1s steps(1) infinite"}}></span></div></div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "12px", "color": "rgba(230,236,244,0.55)"}}>Known root domains · optional</span><div style={{"padding": "11px 12px", "borderRadius": "10px", "background": "rgba(0,0,0,0.35)", "border": "1px solid rgba(255,255,255,0.1)", "fontSize": "14px", "color": "rgba(230,236,244,0.8)"}}>hacktricks.wiki, hacktricks-training.com</div></div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><span style={{"fontSize": "12px", "color": "rgba(230,236,244,0.55)"}}>What to look for</span>
              <div style={{"display": "flex", "flexWrap": "wrap", "gap": "6px", "fontSize": "12px"}}>
                <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(75,240,192,0.1)", "border": "1px solid rgba(75,240,192,0.35)"}}>Root domains</span>
                <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(75,240,192,0.1)", "border": "1px solid rgba(75,240,192,0.35)"}}>IP ranges</span>
                <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(75,240,192,0.1)", "border": "1px solid rgba(75,240,192,0.35)"}}>GitHub accounts</span>
                <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(75,240,192,0.1)", "border": "1px solid rgba(75,240,192,0.35)"}}>GitLab groups</span>
                <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(75,240,192,0.1)", "border": "1px solid rgba(75,240,192,0.35)"}}>iOS apps</span>
                <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(75,240,192,0.1)", "border": "1px solid rgba(75,240,192,0.35)"}}>Android apps</span>
                <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(75,240,192,0.1)", "border": "1px solid rgba(75,240,192,0.35)"}}>Subsidiaries</span>
                <span style={{"padding": "5px 10px", "borderRadius": "8px", "border": "1px solid rgba(255,255,255,0.1)", "color": "rgba(230,236,244,0.55)"}}>Package publishers</span>
              </div>
            </div>
            <div style={{"marginTop": "auto", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap", "paddingTop": "6px"}}>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "12.5px", "color": "rgba(230,236,244,0.6)"}}><span style={{"width": "28px", "height": "16px", "borderRadius": "9px", "background": "rgba(255,255,255,0.1)", "position": "relative"}}><span style={{"position": "absolute", "left": "2px", "top": "2px", "width": "12px", "height": "12px", "borderRadius": "50%", "background": "rgba(230,236,244,0.6)"}}></span></span>Research only</span>
              <span style={{"padding": "9px 16px", "borderRadius": "10px", "fontSize": "13px", "fontWeight": "500", "color": "#04070a", "background": "#4BF0C0"}}>Start research</span>
            </div>
          </div>

          <div style={{"padding": "22px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start", "gap": "10px", "flexWrap": "wrap"}}>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "oklch(0.8 0.15 160)"}}>VERIFIED ORGANIZATION</span><span style={{"fontSize": "18px", "fontWeight": "500"}}>HackTricks</span><span style={{"fontSize": "12px", "color": "rgba(230,236,244,0.5)"}}>Also known as HackTricks Wiki · HackTricks Training</span></div>
              <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "padding": "4px 9px", "borderRadius": "7px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.08)", "color": "rgba(230,236,244,0.7)"}}>14 assets</span>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "borderRadius": "14px", "overflow": "hidden", "border": "1px solid rgba(255,255,255,0.07)"}}>
              {reconRows.map((r, index) => <Fragment key={index}>
                <div style={{"display": "grid", "gridTemplateColumns": "118px minmax(0,1fr)", "gap": "12px", "padding": "11px 14px", "background": "rgba(0,0,0,0.25)", "borderBottom": "1px solid rgba(255,255,255,0.05)"}}>
                  <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.06em", "color": "rgba(230,236,244,0.45)", "paddingTop": "2px"}}>{r.kind}</span>
                  <div style={{"display": "flex", "flexDirection": "column", "gap": "4px", "minWidth": "0"}}>
                    <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "12.5px", "overflowWrap": "anywhere"}}>{r.value}</span>
                    <span style={{"fontSize": "12px", "lineHeight": "1.45", "color": "rgba(230,236,244,0.55)"}}>“{r.quote}” <span style={{"color": "#4BF0C0"}}>{r.src}</span></span>
                  </div>
                </div>
              </Fragment>)}
            </div>
            <span style={{"fontSize": "12px", "color": "rgba(230,236,244,0.5)"}}>Unproven look-alikes are left out. Ranges too broad to scan are listed for review.</span>
          </div>
        </div>

        <div style={{"padding": "24px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "18px", "background": "linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))", "border": "1px solid rgba(255,255,255,0.07)"}}>
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "12px", "flexWrap": "wrap"}}><span style={{"fontSize": "17px", "fontWeight": "500"}}>From company name to proven exploit</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "color": "rgba(230,236,244,0.45)"}}>or skip recon and enter up to 25 targets yourself</span></div>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(150px,1fr))", "gap": "10px"}}>
            {pipeline.map((p, index) => <Fragment key={index}>
              <div style={{"padding": "14px", "borderRadius": "14px", "display": "flex", "flexDirection": "column", "gap": "8px", "background": "rgba(0,0,0,0.28)", "border": "1px solid rgba(255,255,255,0.06)"}}>
                <div style={{"display": "flex", "alignItems": "center", "gap": "8px"}}><span style={{"width": "7px", "height": "7px", "transform": "rotate(45deg)", "background": p.color, "boxShadow": `0 0 8px ${p.color}`}}></span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "color": "rgba(230,236,244,0.45)"}}>{p.n}</span></div>
                <span style={{"fontSize": "14px", "fontWeight": "500"}}>{p.name}</span>
                <span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.55)", "textWrap": "pretty"}}>{p.d}</span>
              </div>
            </Fragment>)}
          </div>
        </div>
      </section>

      
      <section id={"websites"} style={{"width": "100%", "maxWidth": "1180px", "padding": "120px 0 0", "display": "flex", "flexDirection": "column", "gap": "36px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "760px"}}>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.16em", "color": "#4BF0C0"}}>03 · WEB APPLICATION BLACKBOX</span>
          <h2 style={{"margin": "0", "fontSize": "clamp(30px,4vw,46px)", "lineHeight": "1.08", "fontWeight": "500", "letterSpacing": "-0.03em", "textWrap": "balance"}}>A full blackbox pentest of any web app. Just give it the URL.</h2>
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>No source code needed. Agents map every route, API, role and technology like a pentester would, write threat checks for that specific app and attack each one: access control, injection, auth flows and business logic, logged in or anonymous.</p>
        </div>

        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(340px,1fr))", "gap": "16px"}}>
          <div style={{"padding": "22px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "rgba(230,236,244,0.45)"}}>APPLICATION · TRAINING PLATFORM</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "color": "oklch(0.8 0.15 160)"}}>3 origins grouped</span></div>
            <div style={{"display": "flex", "flexWrap": "wrap", "gap": "6px", "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px"}}>
              <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.08)"}}>training.hacktricks.wiki</span>
              <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.08)"}}>api.hacktricks-training.com</span>
              <span style={{"padding": "5px 10px", "borderRadius": "8px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.08)"}}>staging.hacktricks-training.com</span>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "borderRadius": "14px", "overflow": "hidden", "border": "1px solid rgba(255,255,255,0.07)"}}>
              {routes.map((rt, index) => <Fragment key={index}>
                <div style={{"display": "grid", "gridTemplateColumns": "64px minmax(0,1fr) auto", "gap": "10px", "alignItems": "center", "padding": "10px 14px", "background": "rgba(0,0,0,0.25)", "borderBottom": "1px solid rgba(255,255,255,0.05)"}}>
                  <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "color": rt.mc}}>{rt.m}</span>
                  <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "overflowWrap": "anywhere"}}>{rt.path}</span>
                  <span style={{"fontSize": "11.5px", "color": "rgba(230,236,244,0.5)"}}>{rt.note}</span>
                </div>
              </Fragment>)}
            </div>
            <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap", "fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "color": "rgba(230,236,244,0.6)"}}><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>Next.js</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>GraphQL</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>JWT bearer</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "border": "1px solid rgba(255,255,255,0.08)"}}>Cloudflare</span></div>
          </div>

          <div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
            <div style={{"padding": "22px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "linear-gradient(180deg,rgba(255,90,90,0.07),rgba(255,255,255,0.015))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,90,90,0.28)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "rgba(230,236,244,0.45)"}}>THREAT CHECK</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "padding": "3px 8px", "borderRadius": "6px", "background": "rgba(255,90,90,0.14)", "border": "1px solid rgba(255,90,90,0.4)", "color": "#ff9a9a"}}>VULNERABLE · HIGH</span></div>
              <span style={{"fontSize": "16px", "fontWeight": "500", "textWrap": "pretty"}}>Another student&apos;s exam attempt can be read by changing its ID</span>
              <div style={{"display": "grid", "gridTemplateColumns": "86px minmax(0,1fr)", "gap": "6px 12px", "fontSize": "12.5px", "lineHeight": "1.5"}}><span style={{"color": "rgba(230,236,244,0.45)"}}>Expectation</span><span style={{"color": "rgba(230,236,244,0.75)"}}>Exam attempts are only returned to the student who took them.</span><span style={{"color": "rgba(230,236,244,0.45)"}}>Tested</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "color": "rgba(230,236,244,0.75)", "overflowWrap": "anywhere"}}>GET /api/v1/exams/attempts/4821 as student B</span><span style={{"color": "rgba(230,236,244,0.45)"}}>Evidence</span><span style={{"color": "rgba(230,236,244,0.75)"}}>200 OK with student A&apos;s answers, score and email. Request and response attached.</span></div>
            </div>
            <div style={{"padding": "22px", "borderRadius": "20px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(150px,1fr))", "gap": "16px", "background": "linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))", "border": "1px solid rgba(255,255,255,0.07)"}}>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>Logged-in testing</span><span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.55)"}}>Add credentials or a header so agents reach what customers see.</span></div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>Traffic guidance</span><span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.55)"}}>Tell agents what to avoid, like payments or emails to real users.</span></div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>You choose what&apos;s audited</span><span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.55)"}}>Set how many apps run automatically; launch the rest when you want.</span></div>
            </div>
          </div>
        </div>
      </section>

      
      <section id={"mobile"} style={{"width": "100%", "maxWidth": "1180px", "padding": "120px 0 0", "display": "flex", "flexDirection": "column", "gap": "36px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "760px"}}>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.16em", "color": "#4BF0C0"}}>04 · MOBILE APPLICATION BLACKBOX</span>
          <h2 style={{"margin": "0", "fontSize": "clamp(30px,4vw,46px)", "lineHeight": "1.08", "fontWeight": "500", "letterSpacing": "-0.03em", "textWrap": "balance"}}>A full blackbox pentest of your Android and iOS apps.</h2>
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>Send a store link, an APK or an IPA. Agents take the app apart, run it, intercept its traffic and attack both the app and the backend APIs it talks to.</p>
        </div>

        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(340px,1fr))", "gap": "16px"}}>
          <div style={{"padding": "22px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap"}}>
              <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
                <div style={{"width": "40px", "height": "40px", "borderRadius": "11px", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "rgba(75,240,192,0.12)", "border": "1px solid rgba(75,240,192,0.35)", "fontFamily": "'Geist Mono',monospace", "fontSize": "13px", "color": "#4BF0C0"}}>HT</div>
                <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "15px", "fontWeight": "500"}}>HackTricks Reader</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "color": "rgba(230,236,244,0.5)"}}>wiki.hacktricks.reader</span></div>
              </div>
              <div style={{"display": "flex", "gap": "6px", "fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px"}}><span style={{"padding": "4px 9px", "borderRadius": "7px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.08)"}}>Android</span><span style={{"padding": "4px 9px", "borderRadius": "7px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.08)"}}>iOS</span></div>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "borderRadius": "14px", "overflow": "hidden", "border": "1px solid rgba(255,255,255,0.07)"}}>
              {mobileSteps.map((m, index) => <Fragment key={index}>
                <div style={{"display": "grid", "gridTemplateColumns": "76px minmax(0,1fr)", "gap": "10px", "alignItems": "baseline", "padding": "10px 14px", "background": "rgba(0,0,0,0.25)", "borderBottom": "1px solid rgba(255,255,255,0.05)"}}>
                  <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.06em", "color": m.kc}}>{m.k}</span>
                  <span style={{"fontSize": "13px", "lineHeight": "1.45", "color": "rgba(230,236,244,0.78)"}}>{m.t}</span>
                </div>
              </Fragment>)}
            </div>
          </div>

          <div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
            <div style={{"padding": "22px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "linear-gradient(180deg,rgba(255,90,90,0.07),rgba(255,255,255,0.015))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,90,90,0.28)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "rgba(230,236,244,0.45)"}}>MOBILE FINDING</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "padding": "3px 8px", "borderRadius": "6px", "background": "rgba(255,90,90,0.14)", "border": "1px solid rgba(255,90,90,0.4)", "color": "#ff9a9a"}}>VULNERABLE · CRITICAL</span></div>
              <span style={{"fontSize": "16px", "fontWeight": "500", "textWrap": "pretty"}}>A malicious link steals the user&apos;s session token</span>
              <div style={{"display": "grid", "gridTemplateColumns": "86px minmax(0,1fr)", "gap": "6px 12px", "fontSize": "12.5px", "lineHeight": "1.5"}}><span style={{"color": "rgba(230,236,244,0.45)"}}>Entry</span><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "color": "rgba(230,236,244,0.75)", "overflowWrap": "anywhere"}}>hacktricks://open?url=https://evil.example</span><span style={{"color": "rgba(230,236,244,0.45)"}}>Tested</span><span style={{"color": "rgba(230,236,244,0.75)"}}>Opened the deep link on a test device while logged in.</span><span style={{"color": "rgba(230,236,244,0.45)"}}>Evidence</span><span style={{"color": "rgba(230,236,244,0.75)"}}>The in-app WebView loaded the attacker page with the bearer token in a JS bridge. Screen recording and captured request attached.</span></div>
            </div>
            <div style={{"padding": "22px", "borderRadius": "20px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(150px,1fr))", "gap": "16px", "background": "linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))", "border": "1px solid rgba(255,255,255,0.07)"}}>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>Static + dynamic</span><span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.55)"}}>Decompiled code is read, then the app is run and instrumented.</span></div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>Backend included</span><span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.55)"}}>APIs found in the app are attacked like a web app.</span></div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>Found by recon too</span><span style={{"fontSize": "12.5px", "lineHeight": "1.5", "color": "rgba(230,236,244,0.55)"}}>Apps discovered in an external scan can be tested here.</span></div>
            </div>
          </div>
        </div>
      </section>

      
      <section style={{"width": "100%", "maxWidth": "1180px", "padding": "120px 0 0", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "720px"}}>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.16em", "color": "#4BF0C0"}}>SAME LIFECYCLE FOR ALL FOUR</span>
          <h2 style={{"margin": "0", "fontSize": "clamp(30px,4vw,46px)", "lineHeight": "1.08", "fontWeight": "500", "letterSpacing": "-0.03em", "textWrap": "balance"}}>An offensive lifecycle, not a passive scan.</h2>
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>Only issues that matter, including unknown zero-days, reach your team, with dynamically tested proofs of concept.</p>
        </div>
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "1px", "borderRadius": "20px", "overflow": "hidden", "background": "rgba(255,255,255,0.07)", "border": "1px solid rgba(255,255,255,0.07)"}}>
          <div style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#0a0e14"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "color": "#4BF0C0"}}>01</span><h3 style={{"margin": "0", "fontSize": "20px", "fontWeight": "500"}}>Discover</h3><p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "rgba(230,236,244,0.58)"}}>Map code, assets, websites, mobile apps and their APIs.</p></div>
          <div style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#0a0e14"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "color": "#ff8a8a"}}>02</span><h3 style={{"margin": "0", "fontSize": "20px", "fontWeight": "500"}}>Exploit</h3><p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "rgba(230,236,244,0.58)"}}>Chase reachable flows and attack paths that scanners miss.</p></div>
          <div style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#0a0e14"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "color": "#ff8a8a"}}>03</span><h3 style={{"margin": "0", "fontSize": "20px", "fontWeight": "500"}}>Validate</h3><p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "rgba(230,236,244,0.58)"}}>Dynamic execution proves exploitability before anything is reported.</p></div>
          <div style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#0a0e14"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "color": "#4BF0C0"}}>04</span><h3 style={{"margin": "0", "fontSize": "20px", "fontWeight": "500"}}>Remediate</h3><p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "rgba(230,236,244,0.58)"}}>Fix guidance with proof your team can act on now.</p></div>
        </div>
      </section>

      
      <section id={"evidence"} style={{"width": "100%", "maxWidth": "1180px", "padding": "120px 0 0", "display": "flex", "flexDirection": "column", "gap": "36px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "760px"}}>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11px", "letterSpacing": "0.16em", "color": "#4BF0C0"}}>EVIDENCE, NOT BLACK BOXES</span>
          <h2 style={{"margin": "0", "fontSize": "clamp(30px,4vw,46px)", "lineHeight": "1.08", "fontWeight": "500", "letterSpacing": "-0.03em", "textWrap": "balance"}}>Don&apos;t trust blind agents. Know exactly what was tested and why.</h2>
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>Every agent run is grounded in a code graph or a site catalog, with a clear record of what it checked, so you know the coverage of the scan.</p>
        </div>
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(340px,1fr))", "gap": "16px"}}>
          <article style={{"padding": "26px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "18px", "background": "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "#4BF0C0"}}>FULL TRACEABILITY</span><h3 style={{"margin": "0", "fontSize": "22px", "fontWeight": "500", "letterSpacing": "-0.015em"}}>Proof of what we checked.</h3><p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>Every threat check is recorded against what it targeted. Trace any finding, or any clean pass, back to the exact entry point it came from.</p></div>
            <div style={{"marginTop": "auto", "display": "flex", "flexDirection": "column", "gap": "8px", "padding": "16px", "borderRadius": "14px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.06)", "fontFamily": "'Geist Mono',monospace", "fontSize": "12.5px"}}>
              <div style={{"display": "flex", "justifyContent": "space-between", "gap": "12px"}}><span style={{"color": "rgba(230,236,244,0.55)"}}>Entry points detected</span><span >30 / 30</span></div>
              <div style={{"display": "flex", "justifyContent": "space-between", "gap": "12px"}}><span style={{"color": "rgba(230,236,244,0.55)"}}>Sensitive functions detected</span><span >56 / 56</span></div>
              <div style={{"display": "flex", "justifyContent": "space-between", "gap": "12px"}}><span style={{"color": "rgba(230,236,244,0.55)"}}>Threat checks generated</span><span >1,367 / 1,367</span></div>
              <div style={{"display": "flex", "justifyContent": "space-between", "gap": "12px"}}><span style={{"color": "#ff9a9a"}}>Vulnerabilities confirmed</span><span style={{"color": "#ff9a9a"}}>46</span></div>
              <div style={{"height": "5px", "marginTop": "6px", "borderRadius": "5px", "background": "#4BF0C0", "boxShadow": "0 0 12px rgba(75,240,192,0.6)"}}></div>
              <span style={{"fontSize": "11px", "color": "rgba(230,236,244,0.45)"}}>coverage · 100% of in-scope surface</span>
            </div>
          </article>
          <article style={{"padding": "26px", "borderRadius": "20px", "display": "flex", "flexDirection": "column", "gap": "18px", "background": "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255,255,255,0.08)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06)"}}>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "10.5px", "letterSpacing": "0.12em", "color": "#ff9a9a"}}>CODE-GRAPH INTELLIGENCE</span><h3 style={{"margin": "0", "fontSize": "22px", "fontWeight": "500", "letterSpacing": "-0.015em"}}>Code graphs make it sharper and faster.</h3><p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.6)", "textWrap": "pretty"}}>Naxus builds a graph of functions, calls, data flows and dependencies, so agents reason about real reachability.</p></div>
            <div style={{"marginTop": "auto", "padding": "12px", "borderRadius": "14px", "background": "rgba(0,0,0,0.3)", "border": "1px solid rgba(255,255,255,0.06)"}}>
              <svg viewBox={"0 0 360 120"} style={{"display": "block", "width": "100%", "height": "auto"}}><g stroke={"rgba(75,240,192,0.5)"} strokeWidth={"1.2"} fill={"none"}><path d={"M30,60 L110,26"}></path><path d={"M30,60 L110,94"}></path><path d={"M110,26 L200,50"}></path><path d={"M110,94 L200,50"}></path><path d={"M110,94 L200,104"}></path><path d={"M200,50 L290,34"}></path><path d={"M200,104 L290,84"}></path></g><path d={"M200,50 L290,84"} stroke={"#ff6b6b"} strokeWidth={"1.6"}></path><circle cx={"30"} cy={"60"} r={"5"} fill={"#4BF0C0"}></circle><circle cx={"110"} cy={"26"} r={"4"} fill={"#E6ECF4"}></circle><circle cx={"110"} cy={"94"} r={"4"} fill={"#E6ECF4"}></circle><circle cx={"200"} cy={"50"} r={"4"} fill={"#E6ECF4"}></circle><circle cx={"200"} cy={"104"} r={"4"} fill={"#E6ECF4"}></circle><circle cx={"290"} cy={"34"} r={"4"} fill={"#4BF0C0"}></circle><circle cx={"290"} cy={"84"} r={"6"} fill={"#ff6b6b"} style={{"filter": "drop-shadow(0 0 6px #ff6b6b)"}}></circle></svg>
            </div>
            <div style={{"display": "flex", "gap": "14px", "flexWrap": "wrap", "fontFamily": "'Geist Mono',monospace", "fontSize": "11px"}}><span style={{"color": "#4BF0C0"}}>↑ quality</span><span style={{"color": "#4BF0C0"}}>↑ speed</span><span style={{"color": "#ff9a9a"}}>↓ wasted compute</span></div>
          </article>
        </div>
      </section>

      
      <section style={{"width": "100%", "maxWidth": "1180px", "padding": "100px 0 0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "12px"}}>
        {features.map((f, index) => <Fragment key={index}>
          <article style={{"padding": "22px", "borderRadius": "16px", "display": "flex", "flexDirection": "column", "gap": "8px", "background": "linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))", "border": "1px solid rgba(255,255,255,0.07)"}} className="nx-hover-15">
            <div style={{"display": "flex", "alignItems": "center", "gap": "9px"}}><span style={{"width": "7px", "height": "7px", "transform": "rotate(45deg)", "background": f.c}}></span><h3 style={{"margin": "0", "fontSize": "16px", "fontWeight": "500"}}>{f.t}</h3></div>
            <p style={{"margin": "0", "fontSize": "13.5px", "lineHeight": "1.55", "color": "rgba(230,236,244,0.58)", "textWrap": "pretty"}}>{f.d}</p>
          </article>
        </Fragment>)}
      </section>

      
      <section id={"contact"} style={{"width": "100%", "maxWidth": "1180px", "padding": "110px 0 80px"}}>
        <div style={{"position": "relative", "overflow": "hidden", "padding": "64px 32px", "borderRadius": "26px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "20px", "textAlign": "center", "background": "linear-gradient(180deg,rgba(75,240,192,0.09),rgba(255,255,255,0.02))", "backdropFilter": "blur(24px)", "border": "1px solid rgba(75,240,192,0.28)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.08),0 0 100px -40px rgba(75,240,192,0.6)"}}>
          <svg width={"56"} height={"56"} viewBox={"0 0 32 32"} style={{"filter": "drop-shadow(0 0 12px rgba(75,240,192,0.7))"}}><polygon points={"16,3 29,16 16,29 3,16"} fill={"#020504"} stroke={"#4BF0C0"} strokeWidth={"1.6"} strokeLinejoin={"miter"}></polygon></svg>
          <h2 style={{"margin": "0", "fontSize": "clamp(30px,4.4vw,52px)", "lineHeight": "1.08", "fontWeight": "500", "letterSpacing": "-0.03em"}}>Find your vulnerabilities<br />before they <span style={{"color": "#4BF0C0", "whiteSpace": "nowrap"}}>{typed}<span style={{"display": "inline-block", "width": "0.08em", "height": "0.9em", "marginLeft": "3px", "verticalAlign": "-0.08em", "background": "#4BF0C0", "animation": "nxblink 1s steps(1) infinite"}}></span></span></h2>
          <p style={{"margin": "0", "maxWidth": "560px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(230,236,244,0.62)", "textWrap": "pretty"}}>Naxus is invite-only. Request access and tell us what you want tested: a repository, your company, a web app or a mobile app. Once approved, you can launch scans yourself.</p>
          <div style={{"display": "flex", "gap": "12px", "flexWrap": "wrap", "justifyContent": "center"}}>
            <a href={"/request-access/"} style={{"padding": "14px 24px", "borderRadius": "12px", "fontWeight": "500", "fontSize": "15px", "color": "#04070a", "background": "#4BF0C0", "boxShadow": "0 0 34px -6px rgba(75,240,192,0.7)"}} className="nx-hover-16">Request access</a>
            <a href={"https://dashboard.naxusai.com/auth/login"} style={{"padding": "14px 24px", "borderRadius": "12px", "fontWeight": "500", "fontSize": "15px", "color": "#E6ECF4", "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.12)"}} className="nx-hover-17">Log in</a>
          </div>
        </div>
      </section>
    </main>

    <footer style={{"padding": "0 24px 40px", "display": "flex", "justifyContent": "center"}}>
      <div style={{"width": "100%", "maxWidth": "1180px", "paddingTop": "24px", "borderTop": "1px solid rgba(255,255,255,0.07)", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "flexWrap": "wrap"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
          <svg width={"20"} height={"20"} viewBox={"0 0 32 32"}><polygon points={"16,3 29,16 16,29 3,16"} fill={"#020504"} stroke={"#4BF0C0"} strokeWidth={"2.6"} strokeLinejoin={"miter"}></polygon></svg>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "letterSpacing": "0.2em"}}>NAXUS</span>
          <span style={{"fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "color": "rgba(230,236,244,0.4)"}}>© 2026 · All rights reserved</span>
        </div>
        <nav style={{"display": "flex", "gap": "20px", "flexWrap": "wrap", "fontSize": "13px"}}>
          <a href={"mailto:info@naxusai.com"} style={{"color": "rgba(230,236,244,0.6)"}}>Contact</a>
          <a href={"https://discord.com/invite/NC9XxWvcjX"} style={{"color": "rgba(230,236,244,0.6)"}}>Discord</a>
          <a href={"https://docs.naxusai.com/"} style={{"color": "rgba(230,236,244,0.6)"}}>Docs</a>
          <a href={"https://docs.naxusai.com/privacy-policy"} style={{"color": "rgba(230,236,244,0.6)"}}>Privacy</a>
          <a href={"https://dashboard.naxusai.com/auth/login"} style={{"color": "rgba(230,236,244,0.6)"}}>Log in</a>
        </nav>
      </div>
    </footer>
  </div>
</div>
</>;
}
