/**
 * Loads local settings.json file,
 * Or a plain object if it doesn't load.
 */

let settings;

try {
    settings = require(`../local/settings.json`);
} catch (err) {
    console.error(err);
    settings = {};
}

export default settings;
