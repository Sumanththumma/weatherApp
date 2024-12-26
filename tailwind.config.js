/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'day': "url('https://img.freepik.com/free-photo/sun-flare_74190-1494.jpg')",
        'night': "url(https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg)"
       
      }
    },
  },
  plugins: [],
}