let mix = require('laravel-mix').mix;


mix.sass('src/sass/jquery.fatNav.scss', 'dist/jquery.fatNav.css', {
	includePaths: ['./node_modules/bourbon/core/']
});