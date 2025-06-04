#!/usr/bin/env node
// This script has been converted to CommonJS format to avoid ESM import issues

const fs = require('fs');
const path = require('path');

// Path to source SVG files and destination directory
const srcDir = path.join(__dirname, '../src/svg');
const indexFile = path.join(__dirname, '../src/index.ts');

// Read all SVG files from the src directory
const svgFiles = fs.readdirSync(srcDir).filter(file => file.endsWith('.svg'));

// Generate import statements
let imports = [
  `import './onebit-icon.css';`, 
  `import { createIconComponent } from './components/Icon';`,
  ``
];

// Generate icon import statements
const iconImports = svgFiles.map(file => {
  const iconName = path.basename(file, '.svg');
  return `import ${iconName}Svg from './svg/${iconName}.svg';`;
});

// Generate icon exports with HOC wrapping (adding "Onebit" prefix to prevent naming conflicts)
const iconExports = svgFiles.map(file => {
  const iconName = path.basename(file, '.svg');
  return `export const Onebit${iconName} = createIconComponent(${iconName}Svg, '${iconName}');`;
});

// Create the index file content
const fileContent = [
  ...imports,
  ...iconImports,
  '',  // Empty line for readability
  ...iconExports,
  '',  // Empty line at end of file
].join('\n');

// Write the new index.ts file
fs.writeFileSync(indexFile, fileContent);
console.log(`Generated ${indexFile} with ${svgFiles.length} icon components`);
