const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./app/**/*.{html,ejs,js}'],
  theme: {
    container: {
      center: true, // ~ 水平置中
      padding: {
        DEFAULT: '0.75rem',
      },
    },
    // screens: {
      // ~ 此次修改數值
      // sm: '768px',
      // md: '992px',
      // lg: '1440px',
      // ~ 原本數值
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px'
      // ~ 其他參考數值
      // sm: '540px',
      // md: '720px',
      // lg: '960px',
      // xl: '1140px',
      // '2xl': '1320px',
    // },
    // ~ font-size 其他參考數值 直接覆蓋寫法
    fontSize: {
      star: ['16px', '16px'],
      tiny: ['12px', '18px'],
      sm: ['14px', '21px'],
      base: ['16px', '24px'],
      h6: ['20px', '24px'],
      h5: ['24px', '29px'],
      h4: ['28px', '34px'],
      h3: ['32px', '38px'],
      h2: ['40px', '48px'],
      h1: ['48px', '58px'],
      display04: ['36px', '54px'],
      display03: ['80px', '96px'],
      display02: ['120px', '144px'],
      display01: ['160px', '192px'],
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        primary: '#F18724',
        surface: '#F2EFE7',
        line: '#F2F2F2',
        black: '#020202',
        'black-20': '#f2f2f2',
        'black-80': '#525252',
      },
      spacing: {
        25: '6.25rem',
        30: '7.5rem',
        45: '11.25rem',
        162: '10.125rem',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
      },
      opacity: {
        8: '0.08',
      },
      borderRadius: {
        bg20: '1.25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // require('flowbite/plugin'),
  ],
};