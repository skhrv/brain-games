#!/usr/bin/env node

import askUsername from '..';
import askIsEven from '../askIsEven';

console.log('Welcome to The Brain Games');
console.log('Answer "yes" if number even otherwise answer "no".');

const username = askUsername();

askIsEven(username);

