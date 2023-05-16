'use strict';

const { parallel, src, watch, dest } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const webpack = require('webpack-stream');

const dir = './app/assets/'

function Styles() {
  return src(`${dir}sass/main.scss`)
    .pipe(scss())
    .pipe(dest(`${dir}css`))
}

function JavaScript() {
  return src(`${dir}js/script.js`)
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
    }))
    .pipe(dest('./app/'));
}

function Watching() {
  watch([`${dir}sass/**.scss`, `${dir}index.html`], Styles);
  // watch(`${dir}js/**/*.js`, JavaScript);
}

exports.dev = parallel(Styles, Watching);