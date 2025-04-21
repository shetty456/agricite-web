import { Metadata } from 'next';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

export const metadata: Metadata = {
  title: 'Agricite - Karnataka\'s #1 Agriculture Learning App for Class 12',
  description: 'Comprehensive agriculture learning app for Karnataka Class 12 students. Access quizzes, study materials, and exam preparation tools in Kannada and English.',
  keywords: 'karnataka agriculture, class 12 agriculture, agricultural studies, farming education, agriculture quiz app, kannada agriculture app',
  openGraph: {
    title: 'Agricite - Karnataka\'s #1 Agriculture Learning App',
    description: 'Comprehensive agriculture learning app for Karnataka Class 12 students. Access quizzes, study materials, and exam preparation tools in Kannada and English.',
    images: ['https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
