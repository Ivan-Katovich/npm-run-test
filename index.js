var myVoice = process.env.npm_config_say || 'Hi'; //gets value from comand line: --say=Hello

var myRoar = process.env.npm_package_config_roar || 'RRRR'; //gets value from Package.json config

console.log(myVoice);

setTimeout(function(){
    console.log(myRoar);
},2000);