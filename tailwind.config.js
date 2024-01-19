/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
            primaryColor: '#1AD993',
            secondaryColor: '#ABFFE0',
            accentColor: '#503AE7',
            textColor: '#14142B',
            bgColor: '#832BC1',
            borderColor: '#AFB0B9',
            default: '#FFFFFF',
            blur: '#e2e8f0',
        },
        fontSize: {
            '4xl': '48px',
            '3xl': '32px',
            '2xl': '24px',
            xl: '20px',
            lg: '16px',
            base: '12px',
        },
        fontWeight: {
            headline: '700',
            headThree: '600',
            textWeight: '400',
        },
    },
    plugins: [],
};
