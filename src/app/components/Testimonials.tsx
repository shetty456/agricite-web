import Image from 'next/image';

const testimonials = [
  {
    name: "Ramesh K.",
    location: "Haveri",
    score: "95%",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
    quote: "Agricite helped me score 95% in my Agriculture exam. The previous year papers were exactly what I needed!",
  },
  {
    name: "Priya M.",
    location: "Dharwad",
    score: "92%",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
    quote: "As a Kannada medium student, the bilingual support made all the difference. Thank you Agricite!",
  },
  {
    name: "Suresh P.",
    location: "Belagavi",
    score: "94%",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
    quote: "The practice tests were so similar to the actual exam. I felt completely prepared!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories from Karnataka
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of students who have excelled with Agricite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-green-600 font-medium">
                    Score: {testimonial.score}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div className="text-4xl font-bold text-green-600">10,000+</div>
            <div className="text-left">
              <div className="font-semibold">Active Students</div>
              <div className="text-sm text-gray-500">From across Karnataka</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 