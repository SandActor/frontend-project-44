#!/usr/bin/env node

import gameEngine from '../src/index.js';
import startCalcGame from '../src/calc.js';

const gameQuestion = 'What is the result of the expression?';
gameEngine(startCalcGame, gameQuestion);
