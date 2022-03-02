interface ValidateShapesType {
  coords?: number[];
  fillSymbol?: string;
  isLine?: boolean;
  color?: string;
}

interface ValudateCommandsType {
  command: string;
  type?: 'canvas' | 'fill' | 'line' | 'rectangle';
  params: string[];
}

const types = {
  canvas: 2,
  fill: 3,
  line: 4,
  rectangle: 4,
};

const validateShapes = ({ coords, color, isLine }: ValidateShapesType) => {
  if (coords) {
    coords.forEach((n) => {
      if (typeof n !== 'number' || Number.isNaN(n) || n < 0 || n > 100)
        throw new Error('Coords must be between 0 and 100.');
    });

    if (isLine) {
      if (coords[0] !== coords[2] && coords[1] !== coords[3])
        throw new Error('Line must be horizontal or vertical.');
    }
  }
  if (color && color.length !== 1)
    throw new Error('Color must be a single character.');
};

const validateCommands = ({ command, type, params }: ValudateCommandsType) => {
  if (!command) throw new Error(`Please provide a command`);

  if (type) {
    if (params.length !== types[type])
      throw new Error(
        `Invalid number of parameters. Please provide ${types[type]} parameters.`,
      );
  }
};

export { validateShapes, validateCommands };
