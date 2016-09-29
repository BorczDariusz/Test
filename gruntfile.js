module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style/style.css' : 'sass/style.sass'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },

    watch: {
    sass: {
        files: ['**/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
     }
  },

  browserSync: {
    bsFiles: {
        src : ['css/*.css']
    },
    options: {
        server: {
            baseDir: "./"
        }
    }
}
  });

  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('kodilla', ['sass', 'imagemin', 'watch', 'browserSync']);
};