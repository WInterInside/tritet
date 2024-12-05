const {
	src,
	dest
} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = function build_js() {
	return src(['src/components/**/*.js', 'src/js/main.min.js'])
	// .pipe(uglify()) // Комментарием отключаем минификацию
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concat('main.js')) // Изменяем имя файла на main.js вместо main.min.js
	.pipe(dest('build/js/'));
}