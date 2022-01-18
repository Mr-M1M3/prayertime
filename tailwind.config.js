module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        alef: ['Alef', 'sans-serif'],
        clock: ['Orbitron', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
