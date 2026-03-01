import { useState } from "react";

const steps = [
  { number: "01", command: "npx @oudom/create-react-tailwind my-app", label: "Run the command" },
  { number: "02", command: "cd my-app", label: "Enter the project" },
  { number: "03", command: "npm run dev", label: "Start developing" },
];

const features = [
  { icon: "./public/icons/react.svg", name: "React 19", desc: "Latest React with fast refresh" },
  { icon: "./public/icons/typescript.svg", name: "TypeScript", desc: "Full type safety out of the box" },
  { icon: "./public/icons/tailwind.svg", name: "Tailwind CSS v4", desc: "Utility-first styling, zero config" },
  { icon: "./public/icons/vite.svg", name: "Vite", desc: "Lightning fast dev server & builds" },
];

export default function App() {
  const [copied, setCopied] = useState(false);

  const command = "npx @oudom/create-react-tailwind my-app";

  function copy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono overflow-x-hidden">
      {/* Grid background */}
      <div
        className="fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">
        <span className="text-sm tracking-widest text-white/40 uppercase">create-react-tailwind</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/oudomm/create-react-tailwind"
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white transition-colors text-sm tracking-wider"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@oudom/create-react-tailwind"
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white transition-colors text-sm tracking-wider"
          >
            npm
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 tracking-widest uppercase mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          React + TypeScript + Tailwind v4
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
          <span className="text-white">One command.</span>
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #6ee7b7, #3b82f6)" }}
          >
            Everything ready.
          </span>
        </h1>

        <p className="text-white/40 text-lg max-w-md mb-12 leading-relaxed">
          Skip the setup. Get a fully configured React + TypeScript + Tailwind CSS project in seconds.
        </p>

        {/* Command box */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4 max-w-xl w-full">
          <span className="text-emerald-400 text-sm select-none">$</span>
          <code className="flex-1 text-left text-white/80 text-sm overflow-x-auto">{command}</code>
          <button
            onClick={copy}
            className="shrink-0 text-xs px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all text-white/50 hover:text-white hover:cursor-pointer"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        <p className="text-center text-xs tracking-widest text-white/20 uppercase mb-12">What's included</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.name}
              className="bg-white/3 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/6 transition-all"
            >
              <img className="w-12 h-12 mb-3" src={f.icon} alt={`${f.name} icon`} />
              <div className="text-white font-semibold text-sm mb-1">{f.name}</div>
              <div className="text-white/30 text-xs leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="relative z-10 px-6 py-20 max-w-3xl mx-auto">
        <p className="text-center text-xs tracking-widest text-white/20 uppercase mb-12">How it works</p>
        <div className="flex flex-col gap-4">
          {steps.map((s) => (
            <div
              key={s.number}
              className="flex items-center gap-6 bg-white/3 border border-white/10 rounded-2xl px-8 py-6 hover:border-white/20 transition-all"
            >
              <span className="text-white/10 text-4xl font-bold shrink-0">{s.number}</span>
              <div className="flex-1 min-w-0">
                <div className="text-white/30 text-xs mb-1 tracking-wider">{s.label}</div>
                <code className="text-emerald-400 text-sm">{s.command}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-8 py-8 flex items-center justify-between">
        <span className="text-white/20 text-xs tracking-wider">@oudom/create-react-tailwind</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/oudomm/create-react-tailwind"
            target="_blank"
            rel="noreferrer"
            className="text-white/20 hover:text-white/60 transition-colors text-xs tracking-wider"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.npmjs.com/package/@oudom/create-react-tailwind"
            target="_blank"
            rel="noreferrer"
            className="text-white/20 hover:text-white/60 transition-colors text-xs tracking-wider"
          >
            npm ↗
          </a>
        </div>
      </footer>
    </div>
  );
}