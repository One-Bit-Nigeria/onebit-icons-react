// packages/onebit-icon-react/rollup.config.js
const path        = require('path');
const resolve     = require('@rollup/plugin-node-resolve').nodeResolve;
const commonjs    = require('@rollup/plugin-commonjs');
let svgr = require('@svgr/rollup');
if (svgr && typeof svgr !== 'function' && svgr.default) {
  svgr = svgr.default;
}
const typescript  = require('@rollup/plugin-typescript');
const postcss     = require('rollup-plugin-postcss');

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.svg'];

// Better external function to handle React and its internals
const external = (id) => {
  return /^react($|\/)|^react-dom($|\/)/.test(id);
};

// Common SVGR configuration to ensure consistent behavior across builds
const svgrConfig = {
  icon: true, // This makes SVG more responsive to size changes
  exportType: 'default',
  svgProps: { 
    fill: "currentColor",
    width: "1em",
    height: "1em"
  }
};

module.exports = [
  // ESM build (with .d.ts)
  {
    input: 'src/index.ts',
    external,
    output: {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: false,
      exports: 'named'
    },
    plugins: [
      postcss({ extract: true, inject: false, minimize: false }),
      resolve({ extensions, browser: true }),
      commonjs(),
      svgr(svgrConfig),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/esm',
        rootDir: 'src',
        outDir: 'dist/esm'
      })
    ]
  },
  // CJS build (no .d.ts)
  {
    input: 'src/index.ts',
    external,
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    plugins: [
      postcss({ extract: true, inject: false, minimize: false }),
      resolve({ extensions, browser: true }),
      commonjs(),
      svgr(svgrConfig),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        rootDir: 'src',
        outDir: 'dist/cjs'
      })
    ]
  }
];
