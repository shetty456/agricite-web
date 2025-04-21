export default function CTA() {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Journey to Success Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of Karnataka students who have improved their scores with Agricite
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://play.google.com/store/apps/details?id=one.mignon.agricite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors duration-300"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h16c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-16c-.83 0-1.5-.67-1.5-1.5zm1.5-17v17h16v-17h-16z" />
                <path d="M12 18.5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4 1.79 4-4-1.79-4-4-4z" />
              </svg>
              Download Now - Free
            </a>
          </div>

          <div className="text-green-100 text-sm">
            <p>4.8/5 Rating on Play Store</p>
            <p className="mt-2">Limited time offer: Free access to all features</p>
          </div>
        </div>
      </div>
    </section>
  );
} 