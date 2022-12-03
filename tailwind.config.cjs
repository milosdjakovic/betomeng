/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "facebook-blue": "#1876f2",
        "youtube-red": "#f80703",
        "soundcloud-orange": "#f95502",
        "mixcloud-purple": "#923eff",
      },
      width: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      height: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [],
};
