// This file will be used by rollup.config.js to configure how SVGs are processed

export default {
  // Remove width and height attributes from SVG
  svgrOptions: {
    icon: true, // This tells svgr to remove size attributes and set the viewBox attribute
    dimensions: false, // This tells svgr to remove width and height attributes
    svgProps: {
      fill: 'currentColor', // This ensures icons inherit color from parent
    },
  },
  
  // Additional svgo configuration to optimize SVGs
  svgoConfig: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // Keep viewBox attribute
            removeViewBox: false
          }
        }
      },
      'removeDimensions',
      {
        name: 'removeAttrs',
        params: {
          attrs: ['width', 'height']
        }
      }
    ]
  }
};
