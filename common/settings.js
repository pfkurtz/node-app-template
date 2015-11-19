/**
 * Loads, parses, exports local settings.cson file,
 * Or a plain object if it doesn't load.
 * Only called by main.js, which attaches it to `global`.
 */

let settings;

try {
    settings = require(`../local/settings.json`);
} catch (err) {
    console.error(err);
    settings = {};
}

export default settings;
