#!/usr/bin/env node

import gameEngine from '../src/index.js';
import startEvenGame from '../src/even.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(startEvenGame, gameQuestion);
