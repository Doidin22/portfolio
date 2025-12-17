import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section = ({ children, id, className = "" }: SectionProps) => (
  <section id={id} className={`py-20 px-6 md:px-20 ${className}`}>
    {children}
  </section>
);