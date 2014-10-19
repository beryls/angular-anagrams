
// The "wrapper" function
module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Do grunt-related things in here
    // Project configuration.
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        // compiles LESS file to minified CSS
        less: {
            anagrams: {
                options: {
                    cleancss: true
                },
                files: {
                    "./app/css/main.css": "./app/less/main.less"
                }
            }
        },
        watch: {
            // runs less task when any less files change
            less: {
                files: ['./app/less/{,*/}*.less'],
                tasks: ["less"]
            }
        }
    });

    grunt.registerTask('default', [
        'less'
    ]);
};