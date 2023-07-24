module.exports = {
    future: {
        hoverOnlyWhenSupported: true,
    },
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './resources/**/*.svelte',
        './content/**/*.md'
    ],
    theme: {
        fontFamily: {
            'body': ['Outfit', 'ui-sans-serif', 'system-ui'],
        },
        fontSize: {
            'sm': '0.85rem',
            'base': '1rem',
            'lg': '1.5rem',
            'xl': '1.95rem',
            '2xl': '2.3rem',
        },
        letterSpacing: {
            'normal': '0',
            'wide': '0.05em',
            'wider': '0.1em',
            'widest': '0.15em',
        },
        extend: {
            height: {
                'screen': 'calc(var(--vh) * 100)',
            },
            padding: {
                'wide': '0.05em',
                'wider': '0.1em',
                'widest': '0.15em',
            },
            margin: {
                '29': '29%',
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],

}
