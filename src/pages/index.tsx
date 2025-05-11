/*import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesOverview from '@/components/FeaturesOverview';
import ProductFeatures from '@/components/ProductFeatures';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import TrustedBy from '@/components/TrustedBy';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lookscout</title>
      </Head>
      <Header />
      <Hero />
      <FeaturesOverview />
      <ProductFeatures />
      <Testimonials />
      <BlogSection />
      <TrustedBy />
      <CTA />
      <Footer />
    </>
  );
}*/

import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesOverview from '../components/FeaturesOverview';
import ProductFeatures from '../components/ProductFeatures';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import TrustedBy from '@/components/TrustedBy';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      

      <Header />
      <Hero />
      <FeaturesOverview/>
      <ProductFeatures variant="light" />
      <ProductFeatures variant="dark" />
      <Testimonials />
      <BlogSection/>
      <TrustedBy/>
      <CTA/>
      <Footer/>
      
    </>
  );
}

