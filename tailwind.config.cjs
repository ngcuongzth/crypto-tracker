module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '0px',
      's': '576px',
      'm': '768px',
      'l': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },
    extend: {
      borderRadius: {
        'cycle': '50%'
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        button: 'var(--color-bg-button)',
        hover: 'var(--color-item-hover)',
        input: 'var(--color-bg-input)'
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        button: 'var(--color-text-button)',
        label: 'var(--color-label)'
      },
      borderColor: {
        secondary: 'var(--color-bg-secondary)',
        input: 'var(--color-bg-input)',
        primary: 'var(--color-border)'
      },
      colors: {
        'hover-color': '#8dc647',
        'border-color': 'var(--color-text-primary)',
        'primary-color': 'var(--color-bg-primary)',
        'hover': 'var(--color-item-hover)'
      },
      width: {
        '40px': '40px',
        '24px': '24px',
        '200px': '200px',
        '150px': '150px',
        '350px': '350px'
      },
      fontSize: {
        'normal': '16px',
        '20px': '20px'
      },
      maxWidth: {
        'screen-custom': '1600px',
        'search-form': '500px',
      },
      minWidth: {
        '200px': '200px'
      },
      spacing: {
        '1': '5px',
        '2': '10px',
        '3': '15px',
        '4': '20px',
        '5': '25px',
        '6': '30px',
        '7': '35px',
        '8': '40px',
        '9': '45px',
        '10': '50px',
      }

    },

  },
  plugins: [],
}