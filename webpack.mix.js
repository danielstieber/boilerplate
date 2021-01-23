const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
mix.js('src/app.js', 'js')
	.sass('src/app.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.config.js') ],
  });
  mix.browserSync({
  	proxy: 'unsplash.test',
	files: ["css/app.css", "*.php", "*.html"]
  });