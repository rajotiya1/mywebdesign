import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Globe,
  LayoutGrid,
  MessageCircle,
  Newspaper,
  Rocket,
  ShoppingCart,
  Smartphone,
  UserRound,
  Wrench,
} from 'lucide-react';

const services = [
  {
    icon: BriefcaseBusiness,
    title: 'Business Website',
    description: 'Professional service websites built to increase trust, inquiries, and booked consultations.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Website',
    description: 'Storefronts optimized for browsing, secure checkout, and repeat customer conversion.',
  },
  {
    icon: Newspaper,
    title: 'Blog / News Website',
    description: 'Fast publishing platforms with category structure, SEO setup, and easy content management.',
  },
  {
    icon: UserRound,
    title: 'Portfolio Website',
    description: 'Elegant personal brands for creators, consultants, and agencies who need to stand out.',
  },
  {
    icon: Wrench,
    title: 'Job Portal / Tools Website',
    description: 'Scalable directory, listing, and lead-generation experiences for niche business models.',
  },
];

const projects = [
  {
    title: 'Vertex Legal Studio',
    description: 'A law firm website focused on credibility, service clarity, and appointment bookings.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Northstar Commerce',
    description: 'A premium e-commerce landing experience designed to improve average order value.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Daily Scope Media',
    description: 'A clean editorial layout with smart content hierarchy for a digital publishing brand.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Creator Launch Kit',
    description: 'A portfolio site for a content strategist with lead magnets, testimonials, and case studies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'HireGrid Platform',
    description: 'A job portal homepage concept that highlights filters, categories, and employer trust.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Studio Nova Agency',
    description: 'A bold agency site combining motion-inspired blocks with conversion-first messaging.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
];

const pricing = [
  {
    name: 'Basic Plan',
    price: '₹3,999',
    description: 'Best for individuals and small businesses launching quickly.',
    features: ['Up to 4 pages', 'Mobile responsive design', 'Lead capture form', 'Basic on-page SEO', '7 days support'],
    featured: false,
  },
  {
    name: 'Standard Plan',
    price: '₹7,999',
    description: 'Best for growing brands that need stronger positioning and conversion.',
    features: ['Up to 8 pages', 'Premium UI sections', 'WhatsApp integration', 'SEO-ready structure', 'Speed optimization', '14 days support'],
    featured: true,
  },
  {
    name: 'Premium Plan',
    price: '₹14,999+',
    description: 'Best for custom, business-critical websites with advanced workflows.',
    features: ['Custom pages & modules', 'E-commerce or portal features', 'Advanced animations', 'Technical SEO setup', 'Analytics integration', '30 days support'],
    featured: false,
  },
];

const skills = ['Next.js', 'React', 'Tailwind CSS', 'SEO-ready architecture', 'Performance optimization', 'Conversion copy layout'];

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function LandingPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <Link href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.3em] text-white uppercase">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-950/40">
              <Globe className="h-5 w-5" />
            </span>
            WebCraft Pro
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20build%20a%20website"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Link>
        </div>
      </header>

      <section id="home" className="section-shell relative py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="fade-in space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-sm text-sky-100">
              <Rocket className="h-4 w-4" />
              Freelance web design & development for growth-focused brands
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                I Build Professional Websites That Grow Your Business
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I design and develop premium, SEO-ready websites that help service businesses, startups, and personal brands attract more leads, build trust, and convert visitors into clients.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-400 via-blue-500 to-indigo-500 px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.45)] transition hover:-translate-y-1"
              >
                Get Your Website
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                View Portfolio
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: '50+', label: 'Websites delivered' },
                { value: '4.9/5', label: 'Average client rating' },
                { value: 'SEO-ready', label: 'Built-in best practices' },
              ].map((stat) => (
                <div key={stat.label} className="glass-panel rounded-3xl p-5">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in relative lg:justify-self-end">
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 shadow-[0_30px_100px_rgba(2,6,23,0.5)]">
              <div className="absolute inset-x-6 top-6 h-40 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="white-card relative p-8">
                <div className="mb-8 flex items-center justify-between rounded-3xl bg-slate-950 p-5 text-white shadow-lg">
                  <div>
                    <div className="text-sm text-slate-300">Conversion-focused web solutions</div>
                    <div className="mt-2 text-2xl font-semibold">Premium Website Systems</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <LayoutGrid className="h-7 w-7 text-sky-300" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    'Modern UI tailored to your brand',
                    'Fast, mobile-first pages that look premium',
                    'Clear calls-to-action to increase inquiries',
                    'Launch support and iterative improvements',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-16 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-300">Services</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Website solutions designed for different business goals.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="white-card group p-6 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(56,189,248,0.16)]">
              <div className="mb-5 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700 transition group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="text-sm leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section-shell py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-300">Selected projects</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Beautiful interfaces that turn first impressions into business opportunities.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">Each concept below is built to look polished, communicate value instantly, and guide users toward taking action.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-sky-300/40">
              <div className="relative h-64 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="section-shell py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-300">Pricing</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple website packages designed to convert visitors into paying customers.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] p-[1px] shadow-[0_24px_80px_rgba(15,23,42,0.32)] transition hover:-translate-y-2 ${
                plan.featured ? 'bg-linear-to-b from-sky-400 via-blue-500 to-indigo-500' : 'bg-white/10'
              }`}
            >
              <div className={`h-full rounded-[calc(2rem-1px)] p-8 ${plan.featured ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    <p className={`mt-2 text-sm leading-6 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>
                  </div>
                  {plan.featured ? <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Most popular</span> : null}
                </div>
                <div className="mb-6 text-4xl font-semibold">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-7">
                      <BadgeCheck className={`mt-1 h-4 w-4 shrink-0 ${plan.featured ? 'text-sky-300' : 'text-sky-600'}`} />
                      <span className={plan.featured ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.featured ? 'bg-linear-to-r from-sky-400 via-blue-500 to-indigo-500 text-white hover:-translate-y-1' : 'bg-slate-950 text-white hover:-translate-y-1'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-300">About me</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">A freelance developer focused on premium digital experiences that sell.</h2>
          </div>
          <div className="white-card p-8 sm:p-10">
            <p className="text-base leading-8 text-slate-700">
              I help businesses, agencies, startups, and professionals launch modern websites that feel trustworthy, perform fast, and make it easy for potential clients to take action. My work blends clean design, scalable code, and strategic messaging to turn your website into a reliable sales asset.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {skill}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-200 pt-8 text-sm text-slate-600">
              <div>
                <div className="text-2xl font-semibold text-slate-900">4+ years</div>
                <div>Building client websites</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">50+</div>
                <div>Landing pages & business sites</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">End-to-end</div>
                <div>Design, development & launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-300">Contact</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to launch a website that looks premium and wins clients?</h2>
            <div className="mt-8 space-y-6 text-slate-300">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">WhatsApp</div>
                <Link href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20build%20a%20website" className="mt-2 inline-flex items-center gap-2 text-lg text-white transition hover:text-sky-300">
                  <MessageCircle className="h-5 w-5" />
                  Chat instantly
                </Link>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Address</div>
                <p className="mt-2 text-base text-white">Lajpat Nagar, New Delhi, India</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</div>
                <p className="mt-2 text-base text-white">hello@webcraftpro.dev</p>
              </div>
            </div>
          </div>
          <form className="white-card p-8 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Name</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white" placeholder="Your full name" />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Phone</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white" placeholder="Your phone number" />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
                <span>Email</span>
                <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white" placeholder="your@email.com" />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
                <span>Message</span>
                <textarea className="min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white" placeholder="Tell me about your project goals" />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1">
                Send Inquiry
              </button>
              <Link href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20build%20a%20website" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-sky-500 hover:text-sky-600">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Me
              </Link>
            </div>
          </form>
        </div>
      </section>

      <section className="section-shell py-6 pb-16 sm:pb-20">
        <div className="overflow-hidden rounded-[2rem] bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600 p-[1px] shadow-[0_24px_80px_rgba(37,99,235,0.35)]">
          <div className="flex flex-col gap-8 rounded-[calc(2rem-1px)] bg-slate-950 px-8 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-300">Start now</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Start Your Project Today</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                If you want a premium website that looks trustworthy, loads fast, and brings in more leads, let&apos;s build it together.
              </p>
            </div>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-1">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold text-white">WebCraft Pro</div>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">Freelance website design and development services for businesses that want a polished, lead-generating online presence.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="mailto:hello@webcraftpro.dev" className="transition hover:text-white">
              hello@webcraftpro.dev
            </Link>
            <Link href="tel:+919999999999" className="transition hover:text-white">
              +91 99999 99999
            </Link>
          </div>
        </div>
      </footer>

      <Link
        href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20build%20a%20website"
        className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(16,185,129,0.4)] transition hover:-translate-y-1"
      >
        <Smartphone className="h-4 w-4" />
        WhatsApp
      </Link>
    </main>
  );
}
