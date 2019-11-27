const React = require('react');

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      href="/fonts/Futura-Book.woff2"
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />,
    <link
      href="/fonts/Futura-Bold.woff2"
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />,
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display:700&display=swap"
      rel="stylesheet"
    />,
  ]);
};
