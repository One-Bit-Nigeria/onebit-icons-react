/// <reference types="node" />
import { readdirSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, basename } from 'path';

const localSvgDir = join(__dirname, '../src/svg');
const outIndex   = join(__dirname, '../src/index.ts');

// Ensure local svg dir exists
if (!existsSync(localSvgDir)) {
  mkdirSync(localSvgDir, { recursive: true });
}

// Use existing SVGs from the src/svg directory
const svgs = readdirSync(localSvgDir).filter(f => f.endsWith('.svg'));

function toPascal(name: string) {
  return name
    .split(/[^a-zA-Z0-9]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// Build the React-friendly index.ts with local svg imports
const lines = [
  `import './onebit-icon.css';`,
  `import { createIconComponent } from './components/Icon';`,
  ``,
  ...svgs.map(file => {
    const name = basename(file, '.svg');
    const Comp = toPascal(name);
    return `import ${Comp}Svg from './svg/${name}.svg';`;
  }),
  ``,
  ...svgs.map(file => {
    const name = basename(file, '.svg');
    const Comp = toPascal(name);
    return `export const ${Comp} = createIconComponent(${Comp}Svg, '${Comp}');`;
  }),
  ``,
].join('\n');

writeFileSync(outIndex, lines);
