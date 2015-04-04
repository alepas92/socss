module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {cwd: 'dev/', src: 'index.html', dest: 'build/', expand: true}
                ]
            },
        },

        sass: {
            dist: {
                files: [
                    {outputstyle: 'compressed',expand: true,cwd: 'dev/scss/', src: ['*.scss'],dest: 'build/css/', ext: '.css'}
                ]
            }
        },

        // watch: {
        //     html: {
        //         files: ['dev/*.html','dev/lib/pandastrap/*','dev/img/main/*','dev/lib/pandastrap/svg/*'],
        //         tasks: ['copy', 'insert'],
        //     },

        //     js: {
        //         files: ['dev/js/app/models/*.js','dev/js/app/controllers/*.js','dev/js/app/views/*.js'],
        //         tasks: ['concat'],
        //     },

        //     sass: {
        //         files: ['dev/scss/*.scss', 'dev/scss/desktop/*.scss'],
        //         tasks: ['sass'],
        //     },
        // }

      });

    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-insert');

    grunt.registerTask('default', ['copy', 'sass']);
};