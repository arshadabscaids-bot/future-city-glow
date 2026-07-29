import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Brain, Cpu, Cloud, Network, Zap, Camera, Trash2, Droplets, HeartPulse,
  Building2, Leaf, TrafficCone, ArrowRight, Sparkles, ChevronUp, Mail, Github,
  Linkedin, Send, Radar, Database, Layers, Eye, MessageSquare, Gamepad2,
  MapPin, Wifi, ShieldCheck, Menu, X,
} from "lucide-react";
import { toast, Toaster } from "sonner";

import heroCity from "@/assets/hero-city.jpg";
import caseSingapore from "@/assets/case-singapore.jpg";
import caseDubai from "@/assets/case-dubai.jpg";
import caseBarcelona from "@/assets/case-barcelona.jpg";
import caseSeoul from "@/assets/case-seoul.jpg";
import caseAmsterdam from "@/assets/case-amsterdam.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI in Smart City — Building Intelligent Cities for a Smarter Tomorrow" },
      { name: "description", content: "Discover how artificial intelligence is transforming urban life through intelligent transportation, sustainable energy, smart governance, and safer communities." },
      { property: "og:title", content: "AI in Smart City — Intelligent Cities for a Smarter Tomorrow" },
      { property: "og:description", content: "Explore AI-powered smart traffic, surveillance, energy grids, healthcare, and governance shaping the cities of tomorrow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

/* ---------- Data ---------- */
const applications = [
  { icon: TrafficCone, title: "Smart Traffic Management", points: ["AI traffic prediction", "Smart traffic lights", "Congestion reduction"] },
  { icon: Camera, title: "AI Surveillance", points: ["Face recognition", "Crime detection", "Emergency alerts"] },
  { icon: Trash2, title: "Smart Waste Management", points: ["Smart bins", "Collection optimization", "Waste prediction"] },
  { icon: Zap, title: "Smart Energy Management", points: ["Renewable energy", "Smart grids", "Energy optimization"] },
  { icon: Droplets, title: "Water Quality Monitoring", points: ["Leak detection", "Water quality prediction", "Smart distribution"] },
  { icon: HeartPulse, title: "Smart Healthcare", points: ["AI diagnosis", "Emergency response", "Smart hospitals"] },
  { icon: Building2, title: "Smart Governance", points: ["Citizen services", "Digital administration", "AI decision support"] },
  { icon: Leaf, title: "Environmental Monitoring", points: ["Air quality prediction", "Pollution control", "Climate monitoring"] },
];

const technologies = [
  { icon: Brain, label: "Machine Learning" },
  { icon: Layers, label: "Deep Learning" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Wifi, label: "IoT" },
  { icon: Cpu, label: "Edge Computing" },
  { icon: Database, label: "Big Data Analytics" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: MapPin, label: "GIS" },
  { icon: MessageSquare, label: "NLP" },
  { icon: Gamepad2, label: "Reinforcement Learning" },
];

const workflow = [
  { icon: Radar, label: "Sensors" },
  { icon: Wifi, label: "IoT Devices" },
  { icon: Cloud, label: "Cloud Storage" },
  { icon: Brain, label: "AI Processing" },
  { icon: Sparkles, label: "Prediction Engine" },
  { icon: ShieldCheck, label: "Decision Making" },
  { icon: Building2, label: "Smart City Services" },
];

const benefits = [
  "Reduced Traffic", "Cleaner Environment", "Energy Savings", "Better Security",
  "Smart Governance", "Faster Emergency Response", "Sustainable Development", "Improved Quality of Life",
];

const cases = [
  { name: "Singapore Smart Nation", img: caseSingapore, desc: "A nation-scale digital twin powering mobility, housing and citizen services." },
  { name: "Dubai Smart City", img: caseDubai, desc: "AI-driven governance, autonomous transport and paperless public services." },
  { name: "Barcelona Smart City", img: caseBarcelona, desc: "IoT sensor networks optimizing parking, lighting and urban water use." },
  { name: "Seoul Smart City", img: caseSeoul, desc: "Real-time transport analytics and public safety powered by big data." },
  { name: "Amsterdam Smart City", img: caseAmsterdam, desc: "Circular energy, smart mobility and citizen-led sustainability programs." },
];

const stats = [
  { value: 95, suffix: "%", label: "Traffic Efficiency" },
  { value: 70, suffix: "%", label: "Energy Savings" },
  { value: 80, suffix: "%", label: "Waste Reduction" },
  { value: 99, suffix: "%", label: "Real-Time Monitoring" },
];

const gallery = [g1, g2, g3, g4, g5, g6];

/* ---------- Hooks ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ---------- Sections ---------- */
function Loader({ done }: { done: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816] transition-opacity duration-700 ${done ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="loader-ring" />
      <p className="mt-6 font-display text-sm uppercase tracking-[0.4em] text-[#00E5FF] neon-text">
        Initializing Neural Grid
      </p>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"], ["Applications", "#applications"], ["Tech", "#tech"],
    ["Workflow", "#workflow"], ["Cases", "#cases"], ["Gallery", "#gallery"], ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-[#050816]/70 border-b border-[#00E5FF]/15" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#00BFFF] text-[#050816] font-bold shadow-[0_0_25px_rgba(0,229,255,.5)]">
            <Brain className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Neon<span className="text-[#00E5FF]">Cities</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-white/70 transition hover:text-[#00E5FF]">
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:inline-flex btn-ghost-neon btn-ghost-neon-hover text-sm">
          Get in touch
        </a>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-[#00E5FF]/15 bg-[#050816]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-3 px-6 py-5">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-white/80 py-1">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-32">
      {/* Background */}
      <img
        src={heroCity}
        alt="Futuristic smart city skyline glowing at night"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050816]/70 via-[#050816]/60 to-[#050816]" />
      <div className="absolute inset-0 -z-10 grid-bg animate-grid opacity-60" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-16 top-40 -z-10 h-72 w-72 rounded-full bg-[#00E5FF]/25 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-0 top-72 -z-10 h-96 w-96 rounded-full bg-[#00BFFF]/20 blur-3xl animate-pulse-glow" />

      {/* Drone particles */}
      <div className="pointer-events-none absolute inset-x-0 top-40 -z-10">
        <div className="animate-drone">
          <div className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_20px_#00E5FF]" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-72 -z-10" style={{ animationDelay: "-8s" }}>
        <div className="animate-drone" style={{ animationDuration: "28s" }}>
          <div className="h-1 w-1 rounded-full bg-white shadow-[0_0_15px_#00BFFF]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#00E5FF] animate-rise">
          <span className="h-px w-8 bg-[#00E5FF]" />
          Intelligent Urban Futures
        </div>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-[8.5rem] animate-rise">
          <span className="text-gradient neon-text">AI IN</span>
          <br />
          <span className="text-gradient neon-text">SMART CITY</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg animate-rise">
          Artificial Intelligence is transforming urban life by creating intelligent transportation,
          sustainable energy systems, smart governance, safer communities, and efficient city management.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 animate-rise">
          <a href="#about" className="btn-neon btn-neon-hover">
            Explore AI <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#applications" className="btn-ghost-neon btn-ghost-neon-hover">
            View Applications
          </a>
        </div>

        {/* Floating stat cards */}
        <div className="mt-24 grid gap-4 sm:grid-cols-3 max-w-4xl">
          {[
            { k: "50+", v: "Smart Cities Worldwide" },
            { k: "1.2B", v: "IoT Sensors Connected" },
            { k: "24/7", v: "Real-Time AI Analytics" },
          ].map((s, i) => (
            <div key={i} className="glass card-hover p-5 animate-float-slow" style={{ animationDelay: `-${i * 2}s` }}>
              <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="h-32" />
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: Building2, title: "What is a Smart City?", desc: "An urban system where sensors, data and AI weave together infrastructure and citizens to deliver responsive, sustainable services." },
    { icon: Brain, title: "What is Artificial Intelligence?", desc: "Machines that learn from data, perceive their environment, and reason to make decisions — the cognitive layer of modern cities." },
    { icon: Network, title: "Why AI Matters for Cities", desc: "It transforms passive infrastructure into a living organism — predicting demand, preventing failures and optimizing every resource." },
    { icon: Sparkles, title: "The Future Vision", desc: "Autonomous mobility, zero-waste districts, climate-aware buildings and hyper-personalized public services — all powered by AI." },
  ];
  return (
    <section id="about" className="relative py-28">
      <SectionHeading eyebrow="About" title="Where cities meet cognition" subtitle="The four foundations behind every intelligent city." />
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {cards.map((c, i) => (
          <div key={i} className="glass card-hover reveal p-7" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#00E5FF]/25 to-[#00BFFF]/10 border border-[#00E5FF]/30">
              <c.icon className="h-6 w-6 text-[#00E5FF]" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section id="applications" className="relative py-28">
      <SectionHeading eyebrow="Key Applications" title="AI at every layer of the city" subtitle="Eight domains where intelligence is already reshaping urban life." />
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {applications.map((a, i) => (
          <div key={i} className="glass card-hover reveal group relative overflow-hidden p-6" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.18),transparent_60%)]" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] group-hover:neon-glow transition">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{a.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tech() {
  return (
    <section id="tech" className="relative py-28">
      <SectionHeading eyebrow="AI Technologies" title="The stack powering smart cities" subtitle="Modern AI, IoT and data infrastructure — all working in concert." />
      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-3 sm:px-8 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((t, i) => (
          <div key={i} className="glass card-hover reveal group flex flex-col items-center gap-3 p-6 text-center" style={{ transitionDelay: `${i * 40}ms` }}>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-transparent border border-[#00E5FF]/25 text-[#00E5FF] transition group-hover:neon-glow">
              <t.icon className="h-7 w-7" />
            </div>
            <span className="font-display text-sm font-medium">{t.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="relative py-28">
      <SectionHeading eyebrow="Workflow" title="From sensor to service" subtitle="How raw signals become life-improving urban outcomes." />
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-x-auto pb-4">
          <div className="relative flex min-w-max items-center gap-4 sm:gap-6">
            {/* neon line */}
            <div className="pointer-events-none absolute left-6 right-6 top-9 h-px bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent" />
            {workflow.map((w, i) => (
              <div key={i} className="reveal flex flex-col items-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="grid h-16 w-16 place-items-center rounded-2xl glass-strong text-[#00E5FF] neon-glow">
                  <w.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 w-32 text-center font-display text-sm font-medium">{w.label}</div>
                {i < workflow.length - 1 && (
                  <div className="hidden sm:block absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="relative py-28">
      <SectionHeading eyebrow="Benefits" title="What intelligent cities deliver" subtitle="Measurable gains for citizens, governments and the planet." />
      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 md:grid-cols-4">
        {benefits.map((b, i) => (
          <div key={b} className="glass card-hover reveal flex items-center gap-3 p-5" style={{ transitionDelay: `${i * 50}ms` }}>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/40 text-[#00E5FF]">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display font-medium">{b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section id="cases" className="relative py-28">
      <SectionHeading eyebrow="Case Studies" title="Cities already living the future" subtitle="Real-world blueprints for AI-powered urban transformation." />
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <article key={c.name} className="glass card-hover reveal group overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-white">{c.name}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass-strong reveal grid gap-8 p-10 sm:grid-cols-2 lg:grid-cols-4 lg:p-14 neon-glow">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl font-bold text-gradient neon-text sm:text-6xl">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative py-28">
      <SectionHeading eyebrow="Gallery" title="A glimpse of tomorrow" subtitle="Snapshots from the neon frontier of urban intelligence." />
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-4 px-5 sm:px-8 md:grid-cols-3">
        {gallery.map((src, i) => (
          <div
            key={i}
            className={`reveal group relative overflow-hidden rounded-2xl border border-[#00E5FF]/20 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <img
              src={src}
              alt={`Smart city visual ${i + 1}`}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent opacity-70" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.25),transparent_70%)]" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message received — the neural grid will respond shortly.");
    (e.currentTarget as HTMLFormElement).reset();
  };
  return (
    <section id="contact" className="relative py-28">
      <SectionHeading eyebrow="Contact" title="Let's build the next city together" subtitle="Reach out to collaborate, partner or simply share a vision." />
      <div className="mx-auto mt-14 grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={onSubmit} className="glass-strong reveal space-y-5 p-8 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name"><input required name="name" className="input-neon" placeholder="Your name" /></Field>
            <Field label="Email"><input required type="email" name="email" className="input-neon" placeholder="you@city.io" /></Field>
          </div>
          <Field label="Message">
            <textarea required name="message" rows={5} className="input-neon resize-none" placeholder="Tell us about your project…" />
          </Field>
          <button type="submit" className="btn-neon btn-neon-hover">
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
        <aside className="glass reveal flex flex-col gap-6 p-8 sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-semibold">Connect</h3>
            <p className="mt-2 text-sm text-white/70">Follow the project or reach out directly.</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Mail, label: "hello@neoncities.ai", href: "mailto:hello@neoncities.ai" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="glass card-hover flex items-center gap-3 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF]">
                  <l.icon className="h-5 w-5" />
                </span>
                <span className="font-medium">{l.label}</span>
              </a>
            ))}
          </div>
        </aside>
      </div>
      <style>{`
        .input-neon {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(0,229,255,0.25);
          border-radius: 0.75rem;
          padding: 0.85rem 1rem;
          color: white;
          font-size: 0.95rem;
          transition: border-color .25s, box-shadow .25s, background .25s;
        }
        .input-neon::placeholder { color: rgba(255,255,255,0.35); }
        .input-neon:focus {
          outline: none;
          border-color: #00E5FF;
          background: rgba(0,229,255,0.06);
          box-shadow: 0 0 0 4px rgba(0,229,255,0.15), 0 0 30px rgba(0,229,255,0.25);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/60">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[#00E5FF]/15 py-16">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="font-display text-2xl italic text-gradient neon-text sm:text-3xl">
          "AI is not just making cities smarter — it is making life better."
        </p>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} AI IN SMART CITY | Building Intelligent Cities for a Smarter Tomorrow. All Rights Reserved.</span>
          <span>Crafted with neon light & neural nets.</span>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#00E5FF] to-[#00BFFF] text-[#050816] shadow-[0_0_30px_rgba(0,229,255,.55)] transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"}`}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 reveal">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.35em] text-[#00E5FF]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" /> {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
        <span className="text-gradient neon-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-white/65">{subtitle}</p>}
    </div>
  );
}

/* ---------- Page ---------- */
function Page() {
  const [loaded, setLoaded] = useState(false);
  useReveal();
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      <Loader done={loaded} />
      <Nav />
      <main>
        <Hero />
        <About />
        <Applications />
        <Tech />
        <Workflow />
        <Benefits />
        <Cases />
        <Stats />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}
