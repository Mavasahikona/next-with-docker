export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="w-full py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            CYBERNET LABS
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            Pioneering the next evolution of human + machine intelligence. Research. Innovation. Deployment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/launch"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold transition"
            >
              Launch Console
            </a>
            <a
              href="/about"
              className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-400">
            Core Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:shadow-cyan-500/30 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">AI Engineering</h3>
              <p className="text-sm text-gray-400">
                Building scalable, interpretable AI systems that adapt in real-time to data shifts.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:shadow-cyan-500/30 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">Quantum Interfaces</h3>
              <p className="text-sm text-gray-400">
                Designing experimental protocols to interface quantum processes with digital computation.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:shadow-cyan-500/30 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">Cognitive Robotics</h3>
              <p className="text-sm text-gray-400">
                Robotics platforms with embedded adaptive behavior models and autonomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At Cybernet Labs, we believe in accelerating intelligence convergence — combining machine precision,
            human reasoning, and frontier science to shape a future beyond imagination. We explore, build, and
            deploy technologies that redefine the edge of possibility.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-cyan-400">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Starter Plan */}
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl flex flex-col hover:shadow-cyan-500/30 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">Starter</h3>
              <p className="text-gray-400 mb-4">For individuals exploring our platform.</p>
              <p className="text-3xl font-bold mb-6">$29<span className="text-base font-medium text-gray-400">/mo</span></p>
              <ul className="text-sm text-gray-300 mb-6 space-y-2">
                <li>✔ 5 AI model deployments</li>
                <li>✔ 100 API calls/day</li>
                <li>✔ Community support</li>
              </ul>
              <a
                href="/signup"
                className="mt-auto bg-cyan-500 text-black text-center py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-cyan-600 p-8 rounded-xl text-black flex flex-col shadow-xl transform scale-105">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-black/80 mb-4">For teams building serious intelligence products.</p>
              <p className="text-3xl font-bold mb-6">$99<span className="text-base font-medium text-black/60">/mo</span></p>
              <ul className="text-sm mb-6 space-y-2 text-black/90">
                <li>✔ Unlimited model deployments</li>
                <li>✔ 10K API calls/day</li>
                <li>✔ Priority support</li>
                <li>✔ Dedicated GPU access</li>
              </ul>
              <a
                href="/signup"
                className="mt-auto bg-black text-cyan-400 text-center py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
              >
                Upgrade Now
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl flex flex-col hover:shadow-cyan-500/30 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">Enterprise</h3>
              <p className="text-gray-400 mb-4">Custom AI systems and infrastructure.</p>
              <p className="text-3xl font-bold mb-6">Contact Us</p>
              <ul className="text-sm text-gray-300 mb-6 space-y-2">
                <li>✔ Unlimited everything</li>
                <li>✔ On-premise deployment</li>
                <li>✔ SLA-backed uptime</li>
                <li>✔ AI strategy consulting</li>
              </ul>
              <a
                href="/contact"
                className="mt-auto bg-cyan-500 text-black text-center py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-cyan-500 text-black text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Intelligence Revolution</h2>
        <a
          href="/careers"
          className="inline-block bg-black text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition"
        >
          Careers at Cybernet
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-6 border-t border-gray-800 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Cybernet Labs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
