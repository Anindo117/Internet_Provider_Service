'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="ltx-content-wrapper">
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md text-neutral-200' : 'bg-transparent'}`}>
        <Navbar />
      </div>
      
      <main>
        {children}
      </main>
      
      <Footer />
      
      <a 
        href="#" 
        className="ltx-go-top fixed bottom-8 right-8 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 hover:bg-red-700"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
}