(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _foo = require("../common/foo");

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _foo2.default)("brackishwise i wroghtlich"));

},{"../common/foo":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = foo;
function foo(string) {
    if (string && typeof string !== 'string') {
        throw new Error("Param is not a string.");
    }
    return string || "bar";
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvaW5kZXguanMiLCJjb21tb24vZm9vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNDQSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFJLDJCQUEyQixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7a0JDRHRCLEdBQUc7QUFBWixTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUU7QUFDaEMsUUFBSSxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO0FBQ3RDLGNBQU0sSUFBSSxLQUFLLDBCQUEwQixDQUFDO0tBQzdDO0FBQ0QsV0FBTyxNQUFNLElBQUksS0FBSyxDQUFDO0NBQzFCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBmb28gZnJvbSAnLi4vY29tbW9uL2Zvbyc7XG5jb25zb2xlLmxvZyhmb28oXCJicmFja2lzaHdpc2UgaSB3cm9naHRsaWNoXCIpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvbyhzdHJpbmcpIHtcbiAgICBpZiAoc3RyaW5nICYmIHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW0gaXMgbm90IGEgc3RyaW5nLmApO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nIHx8IFwiYmFyXCI7XG59XG4iXX0=
