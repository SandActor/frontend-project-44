#!/usr/bin/env node

import gameEngine from '../src/index.js';
import startProgressionGame from '../src/progression.js';

const gameQuestion = 'What number is missing in the progression?';
gameEngine(startProgressionGame, gameQuestion);
