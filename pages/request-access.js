import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

const API = 'https://contact.naxusai.com/access-requests';
const SITEKEY = '0x4AAAAAAF03PSpnBuhgq60_';
const services = [
 ['code', 'Code scanning', '0-day hunting plus commit and PR monitoring'],
 ['ext', 'External attack surface red team', 'Org recon, leaks, network and web exploitation'],
 ['web', 'Web application blackbox', 'Full pentest from a URL'],
 ['mobile', 'Mobile application blackbox', 'Android and iOS apps and their APIs'],
];
const roles = ['CISO / Head of security','AppSec / product security','Pentester / red team','Engineering lead / CTO','Security consultant / MSSP','Other'];
function Field({ name, label, type = 'text', placeholder, options, optional = false }) {
 return <label className="nx-field"><span>{label}{optional && <span className="nx-optional"> · optional</span>}</span>{options ? <select name={name} required={!optional} defaultValue=""><option value="" disabled>Select {label.toLowerCase()}</option>{options.map(o => <option key={o}>{o}</option>)}</select> : type === 'textarea' ? <textarea name={name} required={!optional} rows={4} maxLength={5000} placeholder={placeholder}/> : <input name={name} type={type} required={!optional} maxLength={500} placeholder={placeholder}/>}</label>;
}
function Choices({ name, label, values }) {
 return <fieldset className="nx-choices"><legend>{label}</legend><div>{values.map(value => <label key={value} className="nx-choice"><input type="radio" name={name} value={value} required/><span>{value}</span></label>)}</div></fieldset>;
}
function Logo() { return <Link href="/" className="nx-brand"><Image unoptimized src="/naxus-mark.svg" alt="" width="24" height="24"/>NAXUS</Link>; }
export default function RequestAccess() {
 const [sent, setSent] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState(''), [token, setToken] = useState(''), [ready, setReady] = useState(false);
 const container = useRef(null), widget = useRef(null);
 useEffect(() => {
  if (!ready || sent || !container.current || !window.turnstile) return;
  widget.current = window.turnstile.render(container.current, { sitekey: SITEKEY, action: 'access_request', theme: 'dark', size: 'flexible', callback: setToken, 'expired-callback': () => setToken(''), 'error-callback': () => { setToken(''); setError('Verification could not load. Please retry or email info@naxusai.com.'); } });
  return () => { if (widget.current !== null) window.turnstile?.remove(widget.current); widget.current = null; };
 }, [ready, sent]);
 async function submit(event) {
  event.preventDefault(); setError('');
  const data = new FormData(event.currentTarget);
  const selected = data.getAll('services');
  if (!selected.length) { setError('Please select at least one service.'); return; }
  if (!token) { setError('Please complete the security verification.'); return; }
  const payload = Object.fromEntries(data.entries());
  payload.services = selected; payload.authorized = data.get('authorized') === 'on'; payload['cf-turnstile-response'] = token;
  setBusy(true);
  try {
   const response = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: AbortSignal.timeout(20000) });
   if (!response.ok) { const result = await response.json().catch(() => ({})); throw new Error(result.error || 'Unable to send your request. Please try again.'); }
   setSent(true); window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) { setError(err.name === 'TimeoutError' ? 'The request timed out. Please try again.' : err.message || 'Unable to send your request. Please try again.'); }
  finally { setBusy(false); setToken(''); if (widget.current !== null) window.turnstile?.reset(widget.current); }
 }
 return <><Head><title>Request access to Naxus</title><meta name="description" content="Request invite-only access to Naxus autonomous AI pentesting."/></Head><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={() => setReady(true)} onError={() => setError('Security verification could not load. Please reload or email info@naxusai.com.')} strategy="afterInteractive"/>
 <div className="nx-request"><header><Logo/><div><Link href="/">← Back to site</Link><a className="nx-ghost" href="https://dashboard.naxusai.com/auth/login">Log in</a></div></header>
 <main><aside><span className="nx-invite">● INVITE ONLY</span><h1>Request access to Naxus</h1><p>Naxus runs real attacks, so access is granted to approved teams only. Tell us who you are and what you want tested, and we&apos;ll get back to you.</p><small>Questions first? Write to <a href="mailto:info@naxusai.com">info@naxusai.com</a> or join our <a href="https://discord.com/invite/NC9XxWvcjX">Discord</a>.</small></aside>
 <section className="nx-form-card">{sent ? <div className="nx-success" role="status"><Image unoptimized src="/naxus-mark.svg" width="64" height="64" alt="Naxus"/><h2>Request received</h2><p>Thanks. Our team will review it and reply by email. If it&apos;s a fit, we&apos;ll set up a short scoping call before enabling your workspace.</p><div><Link className="nx-primary" href="/">Back to site</Link><button className="nx-ghost" onClick={() => { setSent(false); setError(''); }}>Send another request</button></div></div> : <form onSubmit={submit}>
 <fieldset><legend>01 · ABOUT YOU</legend><div className="nx-fields"><Field name="full_name" label="Full name" placeholder="Jane Doe"/><Field name="email" label="Work email" type="email" placeholder="jane@company.com"/><Field name="role" label="Role" options={roles}/><Field name="linkedin_url" label="LinkedIn" placeholder="linkedin.com/in/…" optional/></div></fieldset>
 <fieldset><legend>02 · COMPANY</legend><div className="nx-fields"><Field name="company_name" label="Company name" placeholder="Acme Inc."/><Field name="company_website" label="Company website" placeholder="acme.com"/><Field name="company_size" label="Company size" options={['1–10 employees','11–50 employees','51–200 employees','201–1,000 employees','1,000+ employees']}/><Field name="industry" label="Industry" options={['SaaS / software','Fintech / banking','E-commerce / retail','Healthcare','Government / public sector','Security services','Other']}/><Field name="country" label="Country" placeholder="Spain"/><Field name="security_team_size" label="Security team size" options={['No dedicated security team','1–2 people','3–10 people','10+ people']} optional/></div></fieldset>
 <fieldset><legend>03 · EXPECTED USE</legend><div className="nx-form-stack"><fieldset><legend className="nx-label">What do you want Naxus to test? (pick all that apply)</legend><div className="nx-fields">{services.map(([id,title,description]) => <label className="nx-check" key={id}><input type="checkbox" name="services" value={id} defaultChecked={id === 'code'}/><span>{title}<small>{description}</small></span></label>)}</div></fieldset><Field name="scope" label="Approximate scope" placeholder="e.g. 40 repos, 3 web apps, 1 Android + 1 iOS app, ~200 domains"/><Field name="goals" label="What do you want to achieve?" type="textarea" placeholder="e.g. Replace our yearly pentest with continuous testing, find zero-days before a big release, monitor every PR on our core repos…"/><Choices name="frequency" label="Expected frequency" values={['One-off assessment','Quarterly','Monthly','Weekly','Continuous (every commit / PR)']}/></div></fieldset>
 <fieldset><legend>04 · BUDGET &amp; TIMING</legend><div className="nx-form-stack"><Choices name="budget" label="Annual budget for this" values={['Under $10k','$10k – $50k','$50k – $150k','$150k+','Not sure yet']}/><Choices name="timeline" label="When do you want to start?" values={['As soon as possible','Within a month','This quarter','Just exploring']}/><Field name="source" label="How did you hear about Naxus?" options={['HackTricks','HackTricks Training','Discord','LinkedIn / X','Conference or talk','Colleague or referral','Search','Other']} optional/></div></fieldset>
 <div className="nx-honeypot" aria-hidden="true"><label>Leave empty<input name="website_confirm" tabIndex={-1} autoComplete="off"/></label></div>
 <div className="nx-form-footer"><label className="nx-check"><input type="checkbox" name="authorized" required/><span>I confirm my organization owns the assets I plan to test, or has written authorization from their owner to test them.</span></label><div ref={container}/><p role="alert" className="nx-error">{error}</p><div className="nx-submit"><small>By sending this form you agree to the Naxus <a href="https://docs.naxusai.com/privacy-policy">Privacy Policy</a>.</small><button type="submit" className="nx-primary" disabled={busy || !token}>{busy ? 'Sending…' : 'Request access'}</button></div></div>
 </form>}</section></main></div></>;
}
