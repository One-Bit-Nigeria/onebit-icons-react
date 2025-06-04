import React from 'react';

export interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

// This wrapper component ensures proper handling of icon sizing and colors
export const IconWrapper = React.forwardRef<SVGSVGElement, IconWrapperProps>(
  ({ children, width = "1em", height = "1em", className = "", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={`onebit-icon ${className}`}
        viewBox="0 0 24 24"
        {...props}
      >
        {children}
      </svg>
    );
  }
);

IconWrapper.displayName = 'IconWrapper';

export default IconWrapper;
