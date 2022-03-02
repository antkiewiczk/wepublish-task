import { createInterface } from 'readline';

import Command from './main/command';
import Board from './main/board';

const start = () => {
  let pause = false;
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let board = new Board(readline);

  const pauseReadLine = (fn) => {
    pause = true;
    readline.pause();
    try {
      fn();
    } catch (err) {
      readline.write(err.message);
      readline.write('\n');
    }
    readline.resume();
    pause = false;
  };

  const promptAgain = () => {
    throw new Error('Invalid command action \n Enter command: ');
  };

  const handleInvalidAction = (input) => {
    const strTrimmed = input.replace('Enter command: ', '');
    if (!strTrimmed || strTrimmed.length < 1) {
      promptAgain();
    }

    const action = strTrimmed[0].toUpperCase();
    if (!['C', 'Q'].includes(action)) {
      promptAgain();
    }
  };

  readline.on('line', (input) => {
    if (pause) return;
    pauseReadLine(() => {
      handleInvalidAction(input);
      const command = Command.create(input);
      console.log('command', command);
      if (command) {
        const result = command.render();
        if (result.renderAt) {
          board = board.addShape(result);
          board.render();
          readline.write('\n');
          readline.write('Enter command: ');
        }
      }
    });
  });

  pauseReadLine(() => {
    readline.write('Enter command: ');
  });
};

start();
