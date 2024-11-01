#!/usr/bin/env node

import gameEngine from '../src/index.js';
import getQuestionAndAnswer from '../src/progression.js';

const gameQuestion = 'What number is missing in the progression?';
gameEngine(getQuestionAndAnswer, gameQuestion);
