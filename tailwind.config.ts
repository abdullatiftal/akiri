import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        fontFamily: {
            head: ['Aeonik', 'sans-serif'],
            body: ['SuisseIntl', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                //main-gradient
                'theme-gradient-1':
                    'linear-gradient(90.75deg, #181D42 5.44%, #D82E4A 99.34%)',
                //menu-bg-gradient
                'theme-gradient-2':
                    'linear-gradient(180deg, #4A1371 0%, #D82E4A 100%)',
                //menu-item-active
                'theme-gradient-menu':
                    'linear-gradient(90deg, #181D42 10.6%, rgba(24, 29, 66, 0) 100%)',
                //border-gradient
                'theme-gradient-border':
                    'linear-gradient(to right, #4A1371, #D82E4A)'
            },
            colors: {
                primary: '#181D42',
                secondary: '#D82E4A',
                text: '#747B85',
                lightblue: '#F3F7FD',
                grey: '#F0F4F8',
                textBlack: '#101B2C'
            },
            borderRadius: {
                lg: '30px'
            }
        }
    },
    plugins: []
}
export default config
