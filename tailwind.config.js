/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Font: ["Federo(regular)"],
        Font2: ["Montserrat(regular)"],
        Font3: ["WindSong(regular)"],
        Font4: ["Tektur, sans-serif;"],
        Font5: [ "Joti One, serif;"],
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        height: "400px",
      },
      colors: {
        color: "#00BCA8",
      },
      margin: {
        mt: "-500px",
      },
      textsize: {
        textsize: "100px",
      },
      width: {
        decorationoffset: "10px",
      }
    },
  },
  plugins: [],
};
