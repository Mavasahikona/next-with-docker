export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Empower Your Workflow
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Tools that help you build faster, smarter, and better.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/signup"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              Get Started
            </a>
            <a
              href="/learn"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Fast Integration</h3>
              <p className="text-sm text-gray-600">
                Connect and deploy in minutes. No complex setup required.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Reliable Infrastructure</h3>
              <p className="text-sm text-gray-600">
                Backed by scalable and secure cloud infrastructure.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-gray-600">
                Gain smart recommendations and analytics in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p className="italic text-lg mb-4">
              “This platform saved us hundreds of hours and delivered value from day one.”
            </p>
            <p className="font-semibold">— Alex M., Product Manager</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Supercharge Your Business?</h2>
        <a
          href="/signup"
          className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Create Your Account
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white text-sm">Privacy Policy</a>
            <a href="/terms" className="hover:text-white text-sm">Terms of Service</a>
            <a href="/contact" className="hover:text-white text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
