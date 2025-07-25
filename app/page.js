import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#1f1f1f] text-white px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl">Odd Jobs</span>
        <ul className="flex gap-4 text-sm">
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#services" className="hover:text-purple-400">Services</a></li>
          <li><a href="#work" className="hover:text-purple-400">Work</a></li>
          <li><a href="#reviews" className="hover:text-purple-400">Reviews</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </nav>

      <main className="flex-1 px-6 py-10 sm:px-10 max-w-5xl mx-auto space-y-20">
        {/* About Section */}
        <section id="about" className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-400">About Me</h2>
          <p>
            I'm Alex, a reliable jack-of-all-trades who can tackle a variety of
            odd jobs around your home or business. Whether you need furniture
            assembled, shelves installed or a lawn tidied up, I'm here to help.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-400">Services & Prices</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#2a2a2a] p-4 rounded">
              <h3 className="font-semibold mb-2">Furniture Assembly</h3>
              <p className="text-sm mb-2">Assembly of flat-pack furniture.</p>
              <span className="font-bold text-purple-300">$40 per hour</span>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded">
              <h3 className="font-semibold mb-2">Yard Work</h3>
              <p className="text-sm mb-2">Mowing lawns and basic gardening.</p>
              <span className="font-bold text-purple-300">$35 per hour</span>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded">
              <h3 className="font-semibold mb-2">Minor Repairs</h3>
              <p className="text-sm mb-2">Fixing squeaky doors or loose hinges.</p>
              <span className="font-bold text-purple-300">$45 per hour</span>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded">
              <h3 className="font-semibold mb-2">Custom Requests</h3>
              <p className="text-sm mb-2">Have something else in mind? Let me know!</p>
              <span className="font-bold text-purple-300">Contact for quote</span>
            </div>
          </div>
        </section>

        {/* Work Examples Section */}
        <section id="work" className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-400">Example Work</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Image src="/window.svg" width={150} height={150} alt="Example work" className="bg-white p-4 rounded" />
            <Image src="/file.svg" width={150} height={150} alt="Example work" className="bg-white p-4 rounded" />
            <Image src="/globe.svg" width={150} height={150} alt="Example work" className="bg-white p-4 rounded" />
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-400">Reviews</h2>
          <div className="space-y-4">
            <div className="bg-[#2a2a2a] p-4 rounded">
              <p className="italic">"Alex assembled my new desk quickly and did a great job!"</p>
              <p className="text-yellow-400">★★★★★</p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded">
              <p className="italic">"Friendly and professional. My yard looks fantastic."</p>
              <p className="text-yellow-400">★★★★☆</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-400">Contact Me</h2>
          <p>You can reach me at <a href="mailto:alex@example.com" className="text-purple-300 underline">alex@example.com</a> or send a message using the form below.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">Name</label>
              <input id="name" type="text" className="w-full p-2 rounded bg-[#1f1f1f] border border-[#444]" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" className="w-full p-2 rounded bg-[#1f1f1f] border border-[#444]" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-2 rounded bg-[#1f1f1f] border border-[#444]" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Send</button>
          </form>
        </section>
      </main>

      <footer className="text-center py-4 text-sm bg-[#1f1f1f] text-gray-400">
        &copy; {new Date().getFullYear()} Odd Jobs
      </footer>
    </div>
  );
}
