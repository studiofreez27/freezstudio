/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'wedding-cream': '#F9F7F2',
                'wedding-beige': '#E6DACE',
                'wedding-gold': '#D4AF37',
                'wedding-gold-light': '#F4E5B0',
                'wedding-dark': '#2C2C2C',
                'wedding-text': '#4A4A4A',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
