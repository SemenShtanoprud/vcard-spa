var gulp = require('gulp'),
		sass = require('gulp-sass'),
		jade = require('gulp-pug'),
		sync = require('browser-sync');

var runSequence = require('run-sequence');

var $paths = {

	sass: 'src/sass/*.sass',
  jade: 'src/pug/*.pug',
	js: 'src/js/**/*.js',
  img: 'src/images/*.*',

  sassWatch: 'src/sass/**/*.sass',
  jadeWatch: 'src/pug/**/*.pug',
  jsWatch: 'src/js/**/*.js',
	imgWatch: 'src/images/*.*'

};

var watchTasks = [
  'sync',
  'build-sass',
  'build-jade',
  'build-js',
  'images'
];

gulp.task('build-sass', function () {
	gulp.src($paths.sass)
			.pipe(sass({
				indentWidth: 4,
				indentType: 'space',
				outputStyle: 'expanded'
			}))
			.pipe(gulp.dest('prod/css'));
});

gulp.task('build-jade', function () {
	gulp.src($paths.jade)
      .pipe(jade({
        pretty: true
      }))
			.pipe(gulp.dest('prod'));
});

gulp.task('build-js', function () {
  gulp.src($paths.js)
      .pipe(gulp.dest('prod/js'));
});

gulp.task('images', function () {
  gulp.src($paths.img)
      .pipe(gulp.dest('prod/img'));
});

gulp.task('sync', function () {
  sync({
    server: {
      baseDir: 'prod',
      // index: 'preloader.html'
    },
    notify: true
  });
});

gulp.task('images', function () {
  gulp.src($paths.img)
      .pipe(gulp.dest('prod/img'));
});

gulp.task('watch', watchTasks, function () {
  // TODO: сделать это по-человечески

  gulp.watch($paths.jadeWatch, function () {
    runSequence(
      'build-jade',
      function () {
        sync.reload();
      }
    );
  });

  gulp.watch($paths.sassWatch, function () {
    runSequence(
      'build-sass',
      function () {
        sync.reload();
      }
    );
  });

  gulp.watch($paths.jsWatch, function () {
    runSequence(
      'build-js',
      function () {
        sync.reload();
      }
    );
  });

  gulp.watch($paths.imgWatch, function () {
    runSequence(
      'images',
      function () {
        sync.reload();
      }
    );
  });
});
