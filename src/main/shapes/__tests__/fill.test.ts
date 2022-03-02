import Fill from '../fill';

test('empty test placeholder', () => {
  expect(true).toBeTruthy();
});

test('Should paint using the specified color', () => {
  const grid = [
    ['-', '|', '|', '-'],
    ['-', ' ', ' ', '-'],
    ['-', ' ', ' ', '-'],
    ['-', ' ', ' ', '-'],
    ['-', '|', '|', '-'],
  ];
  const expected = [
    ['-', '|', '|', '-'],
    ['-', '.', '.', '-'],
    ['-', '.', '.', '-'],
    ['-', '.', '.', '-'],
    ['-', '|', '|', '-'],
  ];
  const x = 1;
  const y = 1;
  const color = '.';
  const fill = new Fill(x, y, color);
  const actual = fill.paint(grid);
  expect(actual).toEqual(expected);
});
