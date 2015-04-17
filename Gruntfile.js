module.exports = function(grunt) {
    
    grunt.initConfig({
        watch: {
            sass: {
                files: 'src/sass/*.scss',
                tasks: ['compass', 'cssmin']
            },
            scripts: {
                files: 'src/js/*.js',
                tasks: ['copy', 'uglify']
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'dist',
                    outputStyle: 'expanded',
                    noLineComments: true
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/jquery.fatNav.min.css': 'dist/jquery.fatNav.css'
                }
            }
        },
        uglify: {
            scripts: {
                files: {
                    'dist/jquery.fatNav.min.js': ['src/js/jquery.fatNav.js']
                }
            }
        },
        copy: {
            scripts: {
                src: 'src/js/jquery.fatNav.js',
                dest: 'dist/jquery.fatNav.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'copy', 'compass', 'cssmin', 'watch']);
    
};