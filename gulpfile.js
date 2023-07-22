const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Define the paths to your JavaScript files
const jsFiles = [
  'src/js/file1.js',
  'src/js/file2.js',
  // Add more files as needed
];

// Task to concatenate and minify JavaScript files
function jsTask() {
  return gulp
    .src(jsFiles)
    .pipe(concat('all.js')) // Concatenate all files into a single file named all.js
    .pipe(uglify()) // Minify the concatenated file
    .pipe(gulp.dest('dist/js')); // Output the minified file to the dist/js folder
}

// Create a default task to run the jsTask
gulp.task('default', jsTask);
