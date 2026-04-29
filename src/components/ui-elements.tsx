import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '',
  onClick
}: { 
  children: React.ReactNode; 
  to?: string; 
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  className?: string;
  onClick?: () => void;
  key?: React.Key;
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-300 active:scale-95 shadow-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    gold: "bg-accent text-charcoal hover:bg-accent/90",
    secondary: "bg-charcoal text-white hover:bg-charcoal/90",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link id={`btn-${to.replace(/\//g, '')}`} to={to} className={combinedStyles}>{children}</Link>;
  }

  return (
    <button id={`btn-action-${Math.random().toString(36).substr(2, 9)}`} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export const Section = ({ 
  children, 
  className = '', 
  bg = 'white',
  id
}: { 
  children: React.ReactNode; 
  className?: string; 
  bg?: 'white' | 'gray' | 'primary' | 'charcoal';
  id?: string;
  key?: React.Key;
}) => {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-warm-gray",
    primary: "bg-primary text-white",
    charcoal: "bg-charcoal text-white",
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export const Card = ({ 
  children, 
  className = '',
  hover = true
}: { 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
  key?: React.Key;
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden ${hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' : ''} ${className}`}>
      {children}
    </div>
  );
};
