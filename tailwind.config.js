module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(167, 44%, 70%)",

        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        "photography-mobile": "url('/src/img/mobile/image-photography.jpg')",
        "photography-desktop": "url('/src/img/desktop/image-photography.jpg')",
        "graphic-mobile": "url('/src/img/mobile/image-graphic-design.jpg')",
        "graphic-desktop": "url('/src/img/desktop/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
