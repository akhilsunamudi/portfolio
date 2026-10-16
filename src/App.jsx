import React, { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Akhil's Verified Details
  const config = {
    name: "Akhil Sunamudi",
    role: "Java Full Stack Developer",
    subText:
      "Computer Science Engineering student focused on Core Java, Spring Boot microservices, MySQL databases, and modern React interfaces.",
    github: "https://github.com/akhilsunamudi",
    linkedin: "https://www.linkedin.com/in/akhil-sunamudi-b417aa426",
    email: "akhilsunamudi.xx03@gmail.com",
    photoPath: "/images/Akhil.png",
    college: "Pursuing B.Tech in Computer Science Engineering",
    resumePath: "/resume/Akhil-Sunamudi-Resume.pdf",
  };

  const skills = [
    {
      category: "Backend Development",
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      items: ["Core Java", "Spring Boot", "REST APIs", "MVC Architecture", "OOP Principles"],
    },
    {
      category: "Frontend Development",
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3 / Tailwind", "Responsive UI"],
    },
    {
      category: "Database & Storage",
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      items: ["MySQL", "Relational Schema Design", "SQL Queries", "CRUD Operations"],
    },
    {
      category: "Tools & Productivity",
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      items: ["Git & GitHub", "Postman API Client", "VS Code", "ChatGPT / AI-Assisted Dev"],
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-200 font-sans ${darkMode ? "bg-[#0f0f11] text-zinc-100" : "bg-[#fafafa] text-zinc-900"}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b ${darkMode ? "bg-[#0f0f11]/90 border-zinc-800" : "bg-white/90 border-zinc-200"}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-2xl font-black tracking-tighter uppercase font-mono">
            AKHIL<span className="text-rose-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-rose-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-rose-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition-all ${darkMode ? "border-zinc-700 bg-zinc-800 text-amber-300" : "border-zinc-200 bg-zinc-100 text-zinc-700"}`}
              title="Toggle Theme"
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 115.636 5.636m12.728 12.728L12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a href="#contact" className="bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-28 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
            <p className="text-xs font-bold uppercase tracking-widest text-rose-500 font-mono">
              Java Full Stack Developer &bull; Fresher
            </p>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-10 select-none">
            PORTFOLIO<span className="text-rose-500">.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-700 dark:text-zinc-300 max-w-xl leading-relaxed mb-8">
                Hi, I'm <strong className="text-zinc-900 dark:text-white underline decoration-rose-500 underline-offset-4">Akhil Sunamudi</strong>. {config.subText}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm tracking-wide uppercase px-7 py-3.5">
                  Explore Work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a href={config.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 border font-bold text-sm tracking-wide uppercase px-7 py-3.5 ${darkMode ? "border-zinc-700 bg-zinc-900 text-zinc-200" : "border-zinc-300 bg-white text-zinc-800"}`}>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Photo Section */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-zinc-400 rounded-none blur-sm opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className={`relative w-64 h-80 sm:w-72 sm:h-96 border-2 overflow-hidden shadow-2xl ${darkMode ? "border-zinc-700 bg-zinc-900" : "border-zinc-300 bg-zinc-100"}`}>
                  <img
                    src={config.photoPath}
                    alt="Akhil Sunamudi"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image not placed yet
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full flex-col items-center justify-center p-6 text-center">
                    <span className="text-5xl font-black font-mono text-rose-500">AS</span>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Place Akhil.png in public/images/</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-black uppercase">About Me</h2>
          </div>
          <div className="md:col-span-8 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
            <p>
              I am a Computer Science Engineering student working towards a career in <strong className="text-zinc-900 dark:text-white">Java Full Stack Development</strong>. I focus on understanding how frontend interfaces talk to backend APIs, how databases handle application data, and how to write clean, maintainable code.
            </p>
            <p>
              I am focused on building solid fundamentals in Core Java, Spring Boot, MySQL, and React, using modern AI productivity tools like ChatGPT to debug faster and accelerate daily software development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase mb-10">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group, idx) => (
              <div key={idx} className={`p-6 border ${darkMode ? "border-zinc-800 bg-zinc-900/40" : "border-zinc-200 bg-white"}`}>
                <div className="flex items-center gap-2 mb-4">
                  {group.icon}
                  <h3 className="font-bold text-sm uppercase tracking-wider">{group.category}</h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase mb-6">Projects</h2>
          <div className={`border-2 border-dashed p-10 text-center flex flex-col items-center ${darkMode ? "border-zinc-800 bg-zinc-900/20" : "border-zinc-300 bg-zinc-50"}`}>
            <svg className="w-10 h-10 text-rose-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <h3 className="text-lg font-bold uppercase mb-2">Projects in Progress</h3>
            <p className="text-zinc-500 text-sm max-w-md mb-6">
              I am currently working on practical Java Full Stack projects and will showcase them here soon.
            </p>
            <a href={config.github} target="_blank" rel="noopener noreferrer" className="border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-bold text-xs uppercase px-5 py-2.5">
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-black uppercase mb-4">Get In Touch</h2>
            <p className="text-sm text-zinc-500 mb-6">Open to fresher Java Full Stack opportunities.</p>
            <div className="space-y-4 font-mono text-sm">
              <a href={`mailto:${config.email}`} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-rose-500 transition-colors">
                <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg> 
                {config.email}
              </a>
              <a href={config.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-rose-500 transition-colors">
                <svg className="w-4 h-4 fill-current text-rose-500" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                github.com/akhilsunamudi
              </a>
              <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-rose-500 transition-colors">
                <svg className="w-4 h-4 fill-current text-rose-500" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                linkedin.com/in/akhil-sunamudi-b417aa426
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! Your message has been noted."); }} className={`p-6 border space-y-4 ${darkMode ? "border-zinc-800 bg-zinc-900/30" : "border-zinc-200 bg-white"}`}>
              <input required type="text" placeholder="Your Name" className="w-full px-4 py-2 border bg-transparent text-sm focus:outline-none focus:border-rose-500" />
              <input required type="email" placeholder="Your Email" className="w-full px-4 py-2 border bg-transparent text-sm focus:outline-none focus:border-rose-500" />
              <textarea required rows={3} placeholder="Message" className="w-full px-4 py-2 border bg-transparent text-sm focus:outline-none focus:border-rose-500 resize-none"></textarea>
              <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs uppercase py-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs font-mono text-zinc-400">
        &copy; {new Date().getFullYear()} Akhil Sunamudi &bull; Java Full Stack Developer
      </footer>
    </div>
  );
}