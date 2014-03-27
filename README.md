# grunt-json-summarizer [![Build Status](https://travis-ci.org/Fishrock123/grunt-json-summarizer.png)](https://travis-ci.org/Fishrock123/grunt-json-summarizer) [![NPM version](https://badge.fury.io/js/primus-spark-latency.png)](http://badge.fury.io/js/primus-spark-latency)

A grunt task that summarizes specific properties of JSON files into JSON lists.

## Grunt API

### summarize_json

```js
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({

    summarize_json:{
      test: {
        options: {
          properties: [
            'cats',
            'moar',
            'property_to_summarize'
          ],
          pretty_spaces: 2,

          // if specified, summarized json will have an associated
          // property with the filename of the original json
          add_filename: 'json_filename'
        },

        files: {
          'summary.json': ['input_json_files.json']
        }
      }
    }
  })

  grunt.registerTask 'default', ['summarize_json']
}
```


## License

The MIT License (MIT)

Copyright (c) 2014 Jeremiah `Fishrock123` Senkpiel <fishrock123@rocketmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
