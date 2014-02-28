module.exports = function (grunt) {
    'use strict';

    /* jshint -W107 */

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-continue');
    grunt.loadNpmTasks('grunt-bump');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'Gruntfile.js',
                'chai-catch-exception.js',
                'test/*.js'
            ],
            options: {
                reporter: './node_modules/jshint-path-reporter',
                jshintrc: '.jshintrc'
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'release %VERSION%',
                push: false,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
            }
        },
        mocha: {
            options: {
                run: true
            },
            src: ['test/index.html']
        }
    });




    grunt.registerTask('test', ['build', 'mocha']);
    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('default', ['test']);
};
