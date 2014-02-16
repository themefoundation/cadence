/*global module:false*/
module.exports = function(grunt) {
	grunt.initConfig({

		sass: {
			dist: {
				// options: {
				// 	outputStyle: 'nested'
				// },
				files: {
					'src/cadence.css': 'src/cadence.scss'
				}
			}
		},

		pixrem: {
			dist: {
				src: 'src/cadence.css',
				dest: 'cadence.css'
			}
		},

		watch: {
			options: {
				livereload: true,
			},
			sass: {
				files: ['src/cadence.scss'],
				tasks: ['sass', 'pixrem'],
				options: {
					spawn: false,
				},
			},
		}

	});

	grunt.loadNpmTasks('grunt-pixrem');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
