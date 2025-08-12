import Image from "next/image";

export default function Home() {
  const services = [
    { name: "Furniture Assembly", desc: "Flat-pack, beds, desks, outdoor sets.", price: "$40/hr" },
    { name: "TV Mounting & Shelves", desc: "Stud find, anchor, level, tidy wiring.", price: "from $75" },
    { name: "Minor Repairs", desc: "Doors, hinges, drywall patches, caulk.", price: "$45/hr" },
    { name: "Yard Work", desc: "Mowing, trimming, leaf cleanup, hauling.", price: "$35/hr" },
    { name: "Fixture Swaps", desc: "Faucets, lights, smart locks/thermostats.", price: "from $60" },
    { name: "Custom Requests", desc: "Tell me what you need done.", price: "Free quote" },
  ];

  const reviews = [
    { text: "Showed up on time, mounted two TVs perfectly, cleaned up after. Will hire again!", stars: 5, name: "Megan S." },
    { text: "Friendly and fast—fixed a door and put up shelves the same day.", stars: 5, name: "Harold K." },
    { text: "Great communication and fair pricing. My yard looks amazing.", stars: 4, name: "Jenny T." },
  ];

  const faqs = [
    { q: "Are you licensed and insured?", a: "Yes—Odd Jobs carries general liability insurance. Proof available on request." },
    { q: "What areas do you service?", a: "Most of Greater Cleveland including Lakewood, North Ridgeville, Elyria, Avon, and nearby." },
    { q: "How do estimates work?", a: "Simple jobs can be quoted by message. Larger jobs get a quick on-site visit and a written estimate." },
    { q: "What forms of payment do you take?", a: "Cash, card, and most payment apps." },
  ];

  const areas = ["North Ridgeville", "Avon", "Elyria", "Westlake", "Lakewood", "Strongsville", "Cleveland"];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="font-extrabold text-xl tracking-tight">
            <span className="text-purple-400">Odd</span> Jobs
          </span>
          <ul className="hidden gap-6 text-sm sm:flex">
            <li><a href="#services" className="hover:text-purple-300">Services</a></li>
            <li><a href="#work" className="hover:text-purple-300">Work</a></li>
            <li><a href="#reviews" className="hover:text-purple-300">Reviews</a></li>
            <li><a href="#faq" className="hover:text-purple-300">FAQ</a></li>
            <li><a href="#contact" className="hover:text-purple-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(147,51,234,0.25),transparent)]" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Reliable help for your home projects.
              </h1>
              <p className="mt-4 text-neutral-300">
                Small fixes, installs, and improvements—done right the first time.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-lg bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-500"
                >
                  Get a Free Quote
                </a>
                <a
                  href="tel:+14445551234"
                  className="rounded-lg px-5 py-3 font-medium ring-1 ring-white/15 hover:ring-purple-400/60"
                >
                  Call (444) 555-1234
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
                <span className="rounded-md border border-white/10 bg-neutral-900 px-3 py-1">Licensed & Insured</span>
                <span className="rounded-md border border-white/10 bg-neutral-900 px-3 py-1">Free Estimates</span>
                <span className="rounded-md border border-white/10 bg-neutral-900 px-3 py-1">Weeknight & Weekend Slots</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
              {/* Swap to real photo */}
              <Image src="/images/tools.png" alt="Project tools on a workbench" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-purple-400">Services & Pricing</h2>
          <p className="mt-2 text-neutral-300">Transparent rates. No surprise add-ons.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl border border-white/10 bg-neutral-900 p-5 shadow-sm">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-neutral-300">{s.desc}</p>
                <p className="mt-3 font-bold text-purple-300">{s.price}</p>
              </div>
            ))}
          </div>

          {/* Service area */}
          <div className="mt-10 rounded-xl border border-white/10 bg-neutral-900 p-5">
            <h3 className="font-semibold">Service Area</h3>
            <p className="mt-2 text-sm text-neutral-300">
              I come to you—most jobs completed in 1–3 hours.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {areas.map((a) => (
                <span key={a} className="rounded-full border border-white/10 bg-neutral-800 px-3 py-1">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "1) Tell me what you need", d: "Send a quick description + photos if you can." },
              { t: "2) Get a quote & time", d: "Clear estimate and the next available slots." },
              { t: "3) Job done right", d: "On-time arrival, tidy work, and simple payment." },
            ].map((step) => (
              <div key={step.t} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                <h4 className="font-semibold">{step.t}</h4>
                <p className="mt-1 text-sm text-neutral-300">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work examples */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-purple-400">Recent Work</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Image src="/window.svg" width={300} height={200} alt="Installed shelving" className="rounded-lg bg-white p-6" />
            <Image src="/file.svg" width={300} height={200} alt="Mounted TV" className="rounded-lg bg-white p-6" />
            <Image src="/globe.svg" width={300} height={200} alt="Patio furniture assembly" className="rounded-lg bg-white p-6" />
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-purple-400">Reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {reviews.map((r, i) => (
              <figure key={i} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                <blockquote className="italic text-neutral-200">“{r.text}”</blockquote>
                <figcaption className="mt-3 flex items-center justify-between text-sm text-neutral-400">
                  <span>— {r.name}</span>
                  <span className="text-yellow-400">
                    {"★".repeat(r.stars)}
                    {"☆".repeat(5 - r.stars)}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-purple-400">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border border-white/10 bg-neutral-900 p-4">
                <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-neutral-300">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-purple-400">Get a Free Quote</h2>
          <p className="mt-2 text-neutral-300">
            Email <a href="mailto:alex@example.com" className="underline decoration-purple-400 underline-offset-4">alex@example.com</a>, call{" "}
            <a href="tel:+14445551234" className="underline decoration-purple-400 underline-offset-4">(444) 555-1234</a>, or use the form.
          </p>

          <form className="mt-6 grid gap-4 rounded-xl border border-white/10 bg-neutral-900 p-5 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm" htmlFor="name">Name</label>
              <input id="name" type="text" className="w-full rounded border border-white/10 bg-neutral-950 px-3 py-2 outline-none focus:border-purple-500" />
            </div>
            <div>
              <label className="mb-1 block text-sm" htmlFor="email">Email</label>
              <input id="email" type="email" className="w-full rounded border border-white/10 bg-neutral-950 px-3 py-2 outline-none focus:border-purple-500" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm" htmlFor="details">What do you need done?</label>
              <textarea id="details" rows={4} className="w-full rounded border border-white/10 bg-neutral-950 px-3 py-2 outline-none focus:border-purple-500" />
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-3">
              <button type="submit" className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white hover:bg-purple-500">
                Send Request
              </button>
              <a href="tel:+14445551234" className="rounded-lg px-5 py-2.5 font-medium ring-1 ring-white/15 hover:ring-purple-400/60">
                Call Now
              </a>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 px-6 py-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Odd Jobs • Licensed & Insured
      </footer>
    </div>
  );
}
