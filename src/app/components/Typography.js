import React from "react";
import { Lato } from 'next/font/google'

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
  small: "span",
  xsmall: "span",
  "halen-title": "p" 
};

const sizes = {
  h1: "text-5xl font-bold font-lato sm:text-4xl",
  h2: "text-4xl font-bold sm:text-3xl",
  h3: "text-3xl font-bold sm:text-2xl",
  h4: "text-2xl text-center font-bold sm:text-1xl",
  h5: "text-xl font-bold sm:text-lg",
  body: "text-lg sm:text-md",
  "body-small": "text-md  font-lato text-left sm:text-sm",
  small: "text-sm text-left font-lato sm:text-xs",
  xsmall: "text-[0.525rem]",
  "halen-title": "text-5xl font-bold font-lato sm:text-5xl",
};

export const Typography = ({ variant, children, className, as }) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return React.createElement(Tag, { className: `${sizeClasses} ${className}` }, children);
};

export const lato = Lato({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-lato',
})
