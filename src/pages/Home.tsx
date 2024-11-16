import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { EmailSignup } from '../components/EmailSignup';
import { BusinessRegistration } from '../components/BusinessRegistration';

export function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <EmailSignup />
      <BusinessRegistration />
    </main>
  );
}