(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _settings = require('../common/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("SETTINGS", _settings2.default);

var socket = socketCluster.connect();

socket.on('error', function (err) {
    throw 'Socket error - !' + err;
});

socket.on('connect', function () {
    console.log("CONNECTED", socket);
});

},{"../common/settings":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Loads local settings.json file,
 * Or a plain object if it doesn't load.
 */

var settings = undefined;

try {
    settings = require("../local/settings.json");
} catch (err) {
    console.error(err);
    settings = {};
}

exports.default = settings;

},{"../local/settings.json":3}],3:[function(require,module,exports){
module.exports={
  "port": 3001,
  "production": false
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvaW5kZXguanMiLCJjb21tb24vc2V0dGluZ3MuanMiLCJsb2NhbC9zZXR0aW5ncy5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNDQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUscUJBQVcsQ0FBQzs7QUFFbEMsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDOztBQUV2QyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQUcsRUFBSztBQUN4QixVQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztDQUNsQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBTTtBQUN2QixXQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNwQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNOSCxJQUFJLFFBQVEsWUFBQSxDQUFDOztBQUViLElBQUk7QUFDQSxZQUFRLEdBQUcsT0FBTywwQkFBMEIsQ0FBQztDQUNoRCxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ1YsV0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQixZQUFRLEdBQUcsRUFBRSxDQUFDO0NBQ2pCOztrQkFFYyxRQUFROzs7QUNkdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vY29tbW9uL3NldHRpbmdzJztcbmNvbnNvbGUubG9nKFwiU0VUVElOR1NcIiwgc2V0dGluZ3MpO1xuXG5jb25zdCBzb2NrZXQgPSBzb2NrZXRDbHVzdGVyLmNvbm5lY3QoKTtcblxuc29ja2V0Lm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICB0aHJvdyAnU29ja2V0IGVycm9yIC0gIScgKyBlcnI7XG59KTtcblxuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ09OTkVDVEVEXCIsIHNvY2tldCk7XG59KTtcbiIsIi8qKlxuICogTG9hZHMgbG9jYWwgc2V0dGluZ3MuanNvbiBmaWxlLFxuICogT3IgYSBwbGFpbiBvYmplY3QgaWYgaXQgZG9lc24ndCBsb2FkLlxuICovXG5cbmxldCBzZXR0aW5ncztcblxudHJ5IHtcbiAgICBzZXR0aW5ncyA9IHJlcXVpcmUoYC4uL2xvY2FsL3NldHRpbmdzLmpzb25gKTtcbn0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBzZXR0aW5ncyA9IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXR0aW5ncztcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJwb3J0XCI6IDMwMDEsXG4gIFwicHJvZHVjdGlvblwiOiBmYWxzZVxufVxuIl19
