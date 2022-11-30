module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      colors: {
        primary: '#062F87',
        secondary: '#B2BA25'
      }
    },
    container: {
      center: true,
      padding: '.75rem',
      margin: '0 auto',
      screens: {
        xs: '970px',
        sm: '970px',
        md: '970px',
        lg: '970px',
        xl: '970px',
        xxl: '970px'
      }
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
      xxl: '1850px'
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
