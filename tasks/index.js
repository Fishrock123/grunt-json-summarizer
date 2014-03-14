var eachAsync = require('each-async')

module.exports = summarizer

function summarizer(grunt) {
  grunt.registerMultiTask('summarize_json'
    , 'Summarizes specific properties of JSON files into JSON lists.'
    , function() {

    var options = this.options()

    eachAsync(this.files, function(el, i, next) {
      var i = el.src.length
        , summary = []

      while (i--) {
        try {
          var json = JSON.parse(grunt.file.read(el.src[i]))
        } catch (ex) {
          console.error("ERROR: '" + el.src[i] + "' is not a valid JSON file!")
        }
        json = summarizer.propertyFinder(json, options)

        if (options.add_filename) {
          var path = el.src[i]
          if (~path.lastIndexOf('/'))
            path = path.slice(path.lastIndexOf('/') + 1, path.length)

          json[options.add_filename] = path.slice(0, path.length - 5)
        }

        summary.push(json)
      }

      grunt.file.write(el.dest, JSON.stringify(summary, undefined, options.pretty_spaces))

      next()
    }, this.async())
  })
}

summarizer.propertyFinder = function(obj, options) {
  var out  = {}
    , props = options.props || options.properties || []
    , i = props.length

  while (i--) {
    var prop    = props[i]
      , current = obj[prop]
    if (current !== undefined || current !== null)
      out[prop] = current
  }
  return out
}
