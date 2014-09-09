var path = "./last-mod.js";

var stats = require('fs').statSync(path);

console.log(stats.mtime);