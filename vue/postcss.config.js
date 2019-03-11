const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    "plugins": [
        tailwindcss("./tailwind.js"),
        cssnano({
            preset: 'default',
        }),
        autoprefixer
    ]
}