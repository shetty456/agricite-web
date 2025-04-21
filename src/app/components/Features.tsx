import Image from 'next/image';

const features = [
  {
    title: "Karnataka Syllabus Focused",
    description: "Content specifically designed for Karnataka Class 12 Agriculture syllabus",
    image: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg",
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Previous Year Papers",
    description: "Access 5+ years of Karnataka Agriculture exam papers with solutions",
    image: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg",
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Smooth English UI",
    description: "Intuitive English interface designed for easy navigation and learning",
    image: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg",
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
];

const avatars = [
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-gray-600">
            Designed specifically for Karnataka Class 12 Agriculture students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-green-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center -space-x-2 mb-4">
            {avatars.map((avatar, index) => (
              <div key={index} className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src={avatar}
                  alt={`Student ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-gray-600">Join 10,000+ students who have improved their scores</p>
        </div>
      </div>
    </section>
  );
} 