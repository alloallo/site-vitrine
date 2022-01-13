module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      'blue': '#4D7FBE',
      'blue-light': '#D3DFEF',
      'yellow': '#F4A100',
      'yellow-light': '#FFA800',
      'orange': '#FF7A00',
      'green': '#13ce66',
      'black': '#3E322C',
      'gray-dark': '#756868',
      'gray': '#FBF5EE',
      'gray-light': '#F0F0F0',
      'white' : '#ffffff'
    },
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1rem',
        xl: '100px'
      },
    },
    spacing: {
      0: '0',
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      xl: '100px',
      '2xl': '125px'
    },
    fontSize: {
      'xs': '.75rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.75rem',
      '2xl': '2.25rem',
      '3xl': '4rem',
    },
    extend: {
      lineHeight: {
        '12': '3.5rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
