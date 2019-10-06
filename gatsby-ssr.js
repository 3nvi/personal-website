const React = require('react');

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link href="/fonts/Futura-Book.woff" as="font" type="font/woff" rel="preload" />,
    <link href="/fonts/Futura-Bold.woff" as="font" type="font/woff" rel="preload" />,
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display:700&display=swap"
      rel="stylesheet"
    />,
  ]);
};
