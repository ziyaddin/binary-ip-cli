#!/usr/bin/env node
'use strict';
const meow = require('meow');
const binaryIp = require('binary-ip');

const cli = meow(`
	Usage
	  $ binary-ip <string>

	Examples
	  $ binary-ip 192.168.43.8
	  11000000.10101000.00101011.00001000
`);

const input = cli.input;

if(input.length > 0){
	console.log(binaryIp(input[0]));
}
