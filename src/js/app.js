
const checkmark = document.querySelector('#js');
checkmark.innerHTML = "&#10004;";

var packageJson = require('../../package.json');
const version = document.querySelector('#version');
version.innerHTML = packageJson.version;