var gulp = require('gulp');
var g = require('gulp-load-plugins')();

var	runSequence  = require('run-sequence'),
		browserSync = require('browser-sync'),
		clean = require('del');

gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: './public'
		},
		online: false,
		notify: false
	});
});

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('pug', function(){
	gulp.src(['src/pug/index.pug'])
		.pipe(g.plumber({
			errorHandler: function (error) {console.log(error.message);this.emit('end');}
		}))
		.pipe(g.pug({}))
		.pipe(gulp.dest('public/'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('styles', function(){
	gulp.src(['src/less/main.less'])
		.pipe(g.plumber({
			errorHandler: function (error) {console.log(error.message);this.emit('end');}
		}))
		.pipe(g.less())
		.pipe(g.autoprefixer({browsers: ['last 2 versions', 'ios_saf 6.1'], cascade: false}))
		// .pipe(g.rename({suffix: '.min'}))
		.pipe(g.cssnano())
		.pipe(gulp.dest('public/'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
	return gulp.src(['src/scripts/main.js'])
		.pipe(g.plumber({
			errorHandler: function (error) {console.log(error.message);this.emit('end');}
		}))
		.pipe(g.concat('main.js'))
		// .pipe(g.rename({suffix: '.min'}))
		.pipe(g.uglify())
		.pipe(gulp.dest('public/'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('images', function(){
	return gulp.src('src/images/**/*')
		.pipe(g.imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			optimizationLevel: 4,
			multipass: true,
			interlaced: true
		}))
		.pipe(gulp.dest('public/images'));
});

gulp.task('vendors', function () {
	return gulp.src('src/vendors/**/*')
	  .pipe(g.plumber({
			errorHandler: function (error) {console.log(error.message);this.emit('end');}
		}))
		.pipe(gulp.dest('public/vendors'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('copy', ['vendors'], function(){
	gulp.src('src/fonts/*')
		.pipe(gulp.dest('public/fonts'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('clean', function() {
    clean(['public/**/*', '!public']);
});

gulp.task('build', function() {
	runSequence(['styles', 'scripts', 'copy', 'images', 'pug']);
});

gulp.task('watch', function(){
	gulp.watch('src/less/**/*.less', ['styles']);
	gulp.watch('src/scripts/**/*.js', ['scripts']);
	gulp.watch('src/images/**/*', ['images']);
	gulp.watch('src/pug/**/*.pug', ['pug']);
});

gulp.task('default', ['build', 'watch', 'serve'], function(){

});
