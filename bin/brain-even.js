#!/usr/bin/env node

import gameEngine from '../src/index.js';
import getQuestionAndAnswer from '../src/even.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(getQuestionAndAnswer, gameQuestion);
