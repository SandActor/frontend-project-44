#!/usr/bin/env node

import gameEngine from '../src/index.js';
import startGcdGame from '../src/gcd.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';
gameEngine(startGcdGame, gameQuestion);
