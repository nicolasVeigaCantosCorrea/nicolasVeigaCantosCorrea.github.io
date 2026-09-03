import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
