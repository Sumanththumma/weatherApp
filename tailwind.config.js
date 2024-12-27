/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'day': "url(https://images.unsplash.com/photo-1710241876572-b375dbb54a60?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'night': "url(https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg)"
       
      }
    },
  },
  plugins: [],
}