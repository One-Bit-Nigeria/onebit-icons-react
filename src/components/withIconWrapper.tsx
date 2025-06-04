import React from 'react';

// Higher-order component to wrap SVG icons and ensure they handle styling properly
export function withIconWrapper<T extends React.SVGProps<SVGSVGElement>>(
  WrappedIcon: React.FC<React.SVGProps<SVGSVGElement>>
): React.FC<T> {
  const WithIconWrapper = React.forwardRef<SVGSVGElement, T>((props, ref) => {
    const {
      width = "1em",
      height = "1em",
      className = "",
      ...restProps
    } = props;

    return (
      <WrappedIcon
        ref={ref}
        width={width}
        height={height}
        className={`onebit-icon ${className}`}
        fill="currentColor"
        {...restProps}
      />
    );
  });

  WithIconWrapper.displayName = `withIconWrapper(${WrappedIcon.displayName || 'Icon'})`;
  
  // Cast to unknown first, then to FC<T> to avoid TypeScript error
  return WithIconWrapper as unknown as React.FC<T>;
}

export default withIconWrapper;
