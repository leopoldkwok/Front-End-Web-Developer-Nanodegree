module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concat: {
        //     // 2. Configuration for concatinating files goes here.
        //     dist: {
        //         src: [
        //              'js/*.js', // All JS in the libs folder
        //             'js/global.js'  // This specific file
        //         ],
        //         dest: 'dest/production.js',
        //     }

        // },



        uglify: {
            build: {
                src: 'js/main.js',
                dest: 'dest/js/main.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        },

        cssmin: {
          my_target: {
            src: ['css/*.css'],
            dest: 'css/style.min.css'
        }

        // cssmin: {
        //   my_target: {
        //     src: 'css/style.css',
        //     dest: 'css/style.min.css'
        // }
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify','imagemin','cssmin']);

};