module.exports = (grunt) ->

  require('load-grunt-tasks') grunt

  grunt.loadTasks 'tasks'

  grunt.initConfig

    summarize_json:
      test:
        options:
          properties: [
            'likes_cats'
            'moar'
          ]
          pretty_spaces: 2
          add_filename: 'original_filename'

        files:
          'test/tmp/summary.json': ['test/part1.json', 'test/part2.json']

    mochaTest:
      test:
        options:
          reporter: 'spec'

        src: ['test/summary.js']

  grunt.registerTask 'default', ['summarize_json', 'mochaTest']
