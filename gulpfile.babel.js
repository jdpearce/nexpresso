'use strict';

import gulp from 'gulp';
import ts from 'gulp-typescript';

const tsProject = ts.createProject("tsconfig.json");
const dirs = {
  src: './src',
  dest: './build'
};

gulp.task("default", () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(dirs.dest));
});