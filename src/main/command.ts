import CanvasCommand from './commands/canvas';

export default class Command {
  static create(str) {
    const strTrimmed = str.replace('Enter command: ', '');
    const action = strTrimmed[0].toUpperCase();
    switch (action) {
      case 'C':
        return new CanvasCommand(strTrimmed);
      case 'Q':
        return process.exit();
      default:
        return null;
    }
  }
}
