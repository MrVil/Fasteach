'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    fasteach: {
      client: 'client',
      server: 'server',
      dist  : 'dist'
    },

    watch: {
      babel: {
        files: ['<%= fasteach.client %>/{api,scripts}/**/!(*.spec|*.mock).js'],
        tasks: ['newer:babel:client']
      },
      sass: {
        files: ['<%= fasteach.client %>/styles/**/*.{scss,sass}'],
        tasks: ['sass', 'postcss']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '{.tmp,<%= fasteach.client %>}/**/*.{css,html}',
          '{.tmp,<%= fasteach.client %>}/{api,scripts}/**/!(*.spec|*.mock).js',
          '<%= fasteach.client %>/media/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default',['watch']);

};
