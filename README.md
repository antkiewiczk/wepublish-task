# Coding problem - drawing program

This is a recruitment task for We.Publish.

The goal of this task is to create a console drawing program that will allow user to create a board with x and y
dimensions and later allow the user to "draw" a shape on the same board. Supported shapes: rectangle and line.
The user can also "fill" the space similarily as the bucket fill tool in ms paint.

The project was bootstrapped from [this boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)
to speed up setting up the environment as well as typescript, eslint, jest and prettier support.

To run the application, clone the repo, go to the folder and type

```
yarn
```
or
```
npm install
```
After installing the packages, you need to build the project using either
```
yarn build
```
or
```
yarn build:watch
```
When the project is built, simply run
```
yarn start
```
To play with the functionality!

## Supported commands

```
C w h           Create a new canvas of width w and height h.
L x1 y1 x2 y2   Create a new line of 'x' from (x1,y1) to (x2,y2). Only support 
                horizontal or vertical lines.
R x1 y1 x2 y2   Create a new rectangle, (x1,y1) is upper left corner & (x2,y2) is 
                lower right corner.
B x y c         Fill the entire area around (x,y) with "colour" c.
                Same as that of the "bucket fill" tool in paint programs.
Q               Quit.
```

User input is prefixed with `Enter command: `

Author: Kamil Antkiewicz https://github.com/antkiewiczk