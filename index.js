var say = process.env.npm_config_say || 'Hi'; //gets value from comand line: --say=Hello

var roar = process.env.npm_package_config_roar || 'RRRR'; //gets value from Package.json config

console.log(say);

console.log(roar);