module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    0: '#FFFFFF',
                    100: '#F6F7F8'
                },
                secondary:{
                    0: '#161D24',
                    100: '#1F2933',
                    200: '#333F4C'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
