thot-harmony
============

Node Harmony Enforcement for your scripts entry points

[![Build Status](https://travis-ci.org/thotjs/thot-harmony.svg)](https://travis-ci.org/thotjs/thot-harmony)
[![Dependency Status](https://david-dm.org/thotjs/thot-harmony.svg)](https://david-dm.org/thotjs/thot-harmony)
[![devDependency Status](https://david-dm.org/thotjs/thot-harmony/dev-status.svg)](https://david-dm.org/thotjs/thot-harmony#info=devDependencies)
[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Usage
--------
require('thot-harmony')();

require('some-script-that-needs-harmony');

Note
--------
While this module will allow you to run harmony on any script you include if you use generators or other syntax that is unavailable without the harmony flag in the entry point of your application the interpreter will still throw an error

To use it properly create a dummy entry point that requires this module and then require your real entry point

This module was built for node 0.11 to make it so that there wasn't a need to type --harmony each time but you can use it with 0.10 as well to enable other features by just changing what the file is testing for harmony support