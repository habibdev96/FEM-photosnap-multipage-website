import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --lightGray: hsl(0, 0%, 67%);
    --lighterGray: hsl(0, 0%, 90%);

    /* gradient */
    --gradientOne: hsl(28, 100%, 79%);
    --gradientTwo: hsl(329, 36%, 59%);
    --gradientThree: hsl(229, 100%, 68%);
    
    /* radius */
    --mainRadius: 5rem;

    /* grid gap */
    --gap: 5rem; 
      
    /* shadows */
    --mainShadow: 0.1rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);

    /* transitions */
    --mainTransition: all 0.3s ease-in-out;

    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.6rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
