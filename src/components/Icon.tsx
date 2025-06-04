// This component will wrap all SVG icons to provide consistent styling and behavior
import React, { forwardRef } from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height)
   */
  size?: string | number;
}

export const createIconComponent = (
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>,
  displayName: string
) => {
  const WrappedIcon = forwardRef<SVGSVGElement, IconProps>(
    ({ size, width, height, style, className = '', ...props }, ref) => {
      // Calculate final size values, with defaults
      const finalWidth = width || size || '1em';
      const finalHeight = height || size || '1em';
      
      const finalStyle = {
        display: 'inline-block',
        lineHeight: 1,
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      };

      return (
        <IconComponent
          ref={ref}
          width={finalWidth}
          height={finalHeight}
          className={`onebit-icon ${className}`}
          style={finalStyle}
          aria-hidden={props['aria-label'] ? false : true}
          {...props}
        />
      );
    }
  );

  WrappedIcon.displayName = displayName;
  return WrappedIcon;
};
