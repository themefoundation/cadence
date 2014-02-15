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
		}

	});

	grunt.loadNpmTasks('grunt-pixrem');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['sass', 'pixrem']);
};
