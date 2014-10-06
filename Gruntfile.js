module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'jquery.jqtools.js']
        },
        uglify: {
            options: {
                mangle: false,
            },
            my_target: {
                files: {
                    'bin/jquery.jqtools.min.js': ['jquery.jqtools.js']
                }
            }
        },
        jsbeautifier: {
            files: ["jquery.jqtools.js", 'Gruntfile.js'],
            options: {}
        },
        qunit: {
            all: ['tests/test.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.registerTask('default', ['jsbeautifier', 'jshint', 'uglify']);

};
