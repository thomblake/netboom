/* global require module */
var y = require('yajet')
  , yajet = new y()
  , fs = require('fs')
  , templateRoot = '/m/netboom/templates'

var templates =
  { netboom : function() { return readTemplate('netboom') }
  , index   : function() { return readTemplate('index') }
  , error   : function() { return '404 not found' }
  }

function jtprocess (template, vars, ext) {
  yajet.compile(readTemplate('header'))
  yajet.compile(readTemplate('footer'))
  if (ext == 'extjs') {
    yajet.compile(readTemplate('extjs'))
  }
  return yajet.compile(templates[template || 'error']())(vars)
}

function readTemplate (name) {
  var filename = templateRoot + '/' + name + '.jt'
  return fs.readFileSync(filename ,'utf8')
}

module.exports = jtprocess
