var assert = require('assert')
  , fs     = require('fs')
  , expected_summary =
  [
    {
      moar: {
        alergic: true
      },
      likes_cats: false
    },
    {
      moar: {
        alergic: true,
        dogs: 0,
        hedgehog: 2
      },
      likes_cats: true
    }
  ]

describe('Ensuring output JSON test file is valid.', function() {
  it('test/tmp/summary.json should match pre-made sample', function() {
    fs.readFile('test/tmp/summary.json', 'utf-8', function(err, data) {
      if (err) throw new Error(err)

      assert.deepEqual(JSON.parse(data), expected_summary)
    })
  })
})
