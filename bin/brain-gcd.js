#!/usr/bin/env node

import gameEngine from '../src/index.js';
import getQuestionAndAnswer from '../src/gcd.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';
gameEngine(getQuestionAndAnswer, gameQuestion);
