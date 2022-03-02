import Board from '../board';
import Canvas from '../shapes/canvas';
import Line from '../shapes/line';

let board;
let mockInterface;

beforeEach(() => {
  mockInterface = {
    write: jest.fn().mockImplementation(() => 42),
  };
  board = new Board(mockInterface);
});

test('addElem should add a Canvas when the element is a canvas', () => {
  const canvas = new Canvas(1, 1);
  board = board.addShape(canvas);
  expect(board.canvas).toBe(canvas);
});

test('addElem should add a shape to the stack of shapes when the element is a shape', () => {
  const canvas = new Canvas(5, 5);
  const shape = new Line(1, 1, 2, 1);
  board = board.addShape(canvas).addShape(shape);
  expect(board.shapes[0]).toBe(shape);
});

test('render should write each point of the canvas to the board. A (3x3) canvas should render 30 points (and 5 line returns).', () => {
  const canvas = new Canvas(3, 3);
  board = board.addShape(canvas);
  board.render();
  expect(mockInterface.write).toBeCalledTimes(canvas.heigth * canvas.width + 5);
});

test('render should stack shapes on top of each other with the last added on top', () => {
  const canvas = new Canvas(3, 3);
  const shape = new Line(1, 1, 2, 1);
  board.addShape(canvas).addShape(shape).render();
  expect(mockInterface.write).toBeCalledTimes(30);
});

test('addShape should throw if element is outside of canvas', () => {
  const canvas = new Canvas(3, 3);
  board = board.addShape(canvas);
  const shape = new Line(2, 2, 4, 2);
  expect(() => board.addShape(shape)).toThrow();
});
