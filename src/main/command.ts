import Canvas from './commands/canvas';
import Rectangle from './commands/rectangle';
import Line from './commands/line';
import Fill from './commands/fill';

export default class Command {
  static create(str) {
    const strTrimmed = str.replace('Enter command: ', '');
    const action = strTrimmed[0].toUpperCase();
    switch (action) {
      case 'C':
        return new Canvas(strTrimmed);
      case 'R':
        return new Rectangle(strTrimmed);
      case 'L':
        return new Line(strTrimmed);
      case 'B':
        return new Fill(strTrimmed);
      case 'Q':
        return process.exit();
      default:
        return null;
    }
  }
}
