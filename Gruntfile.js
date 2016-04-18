/*global module:true */


module.exports = function (grunt) {

    'use strict';

    var page = '.';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            dev: {
                files: [
                    { src: page + '/less/main.less', dest: 'css/main.css' }
                ]
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 8050,
                    open: 'http://127.0.0.1:8050/index.html',
                    base: '.',
                    livereload: true
                }
            }
        },

        watch: {
            options: {
                forever: true,
                livereload: true,
                atBegin: true
            },
            less: {
                options: {
                    livereload: false
                },
                files: [page + "/less/**/*.less"],
                tasks: ['less:dev']
            },
            css: {
                files: ['css/*.css'],
                tasks: []
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', [
        'connect',
        'watch'
    ]);


};