import Image from 'next/image';

const avatars = [
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
];

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg"
          alt="Agricultural field with young plants"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ace Your <span className="text-green-400">Class 12 Agriculture</span> Exams
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Karnataka&apos;s #1 Agriculture Learning App. Join 10,000+ students who have improved their scores with Agricite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=one.mignon.agricite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h16c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-16c-.83 0-1.5-.67-1.5-1.5zm1.5-17v17h16v-17h-16z" />
                  <path d="M12 18.5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4 1.79 4 4-1.79-4-4-4z" />
                </svg>
                Download Now - Free
              </a>
            </div>
            
            {/* Enhanced Social Proof Section */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <div 
                      key={index} 
                      className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                      <Image
                        src={avatar}
                        alt={`Student ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-green-100 font-semibold">4.9/5</span>
                </div>
                <p className="text-green-100 text-lg font-medium">
                  Trusted by 10,000+ Karnataka Students
                </p>
                <p className="text-green-200 text-sm mt-1">
                  Average score improvement: 25%
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] hidden md:block">
            <Image
              src="https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg"
              alt="Students studying agriculture"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 