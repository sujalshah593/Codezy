// tailwind.config.js
export const darkMode = 'class';
export const lightMode = 'media';
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    darkMode: 'class',
    extend: {
        fontFamily: {
            heading: ['Sora', 'sans-serif'],
            body: ['Manrope', 'sans-serif'],
        },
        keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.4s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-in forwards',
      },
    },
};
export const plugins = [];
