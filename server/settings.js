/**
 * Loads, parses, exports local settings.cson file,
 * Or a plain object if it doesn't load.
 * Only called by main.js, which attaches it to `global`.
 */

const CSON = require('cson');
const path = `${process.cwd()}/local/settings.cson`;

let settings = CSON.load(path);
if (settings instanceof Error) settings = {};

export default settings;
