const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass')(require('sass')),
	cleanCss = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch');

gulp.task('js', () => {
	return gulp.src('./src/js/script.js')
		.pipe(babel({
			presets: ['@babel/preset-env'],
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./dest/js'));
});

gulp.task('css', () => {
	return gulp.src('./src/scss/style.scss')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
			cascade: false,
			grid: 'autoplace'
		}))
		.pipe(cleanCss({
			level: {
				1: {specialComments: 0},
				2: {mergeIntoShorthands: false}
			}
		}))
		.pipe(gulp.dest('./dest/css'));
});

gulp.task('watch', gulp.series('css', 'js', () => {
	watch('./src/scss/style.scss', gulp.series('css'));
	watch('./src/js/script.js', gulp.series('js'));
}));

gulp.task('default', gulp.series('watch'));
