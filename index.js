'use strict';

var child_process = require('child_process');

module.exports = function() {
  if(!hasGenerators()) { // We take direct proxies as our marker

    var node = child_process.spawn(process.argv[0], ['--harmony'].concat(process.argv.slice(1)), {stdio: 'inherit'});
    node.on('close', function(code) {
      process.exit(code);
    });

    // stop execution in the parent
    process.once('uncaughtException', function() {});
    throw('harmony');
  }
};

function hasGenerators(){
  try {
    eval('(function* () {})()'); // jshint ignore:line
    return true;
  } catch (e) {
    return false;
  }
}