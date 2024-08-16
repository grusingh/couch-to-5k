import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-green-900 text-2xl text-white px-4 py-4 rounded-full"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
