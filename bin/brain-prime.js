#!/usr/bin/env node

import gameEngine from '../src/index.js';
import getQuestionAndAnswer from '../src/prime.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameEngine(getQuestionAndAnswer, gameQuestion);
