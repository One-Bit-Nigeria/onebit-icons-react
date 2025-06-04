# Onebit Icons React

Beautiful, homegrown icons crafted for your next UI project.

## Installation

```bash
npm install onebit-icon-react
# or
yarn add onebit-icon-react
```

## Quick Start

```jsx
import { OnebitHome, OnebitUser, OnebitSearch } from 'onebit-icon-react';

function App() {
  return (
    <div>
      <OnebitHome size={24} />
      <OnebitUser style={{ width: '32px', height: '32px', color: '#0088ff' }} />
      <OnebitSearch className="text-blue-500" />
    </div>
  );
}
```

## Features

- ✅ **React Components**: Pre-built React components for all icons
- ✅ **TypeScript Support**: Full TypeScript definitions included
- ✅ **Customizable**: Accept all standard SVG props (`style`, `width`, `height`, `className`)
- ✅ **Size Prop**: Convenient `size` prop for quick sizing
- ✅ **Tree Shakeable**: Only import the icons you need
- ✅ **SSR Compatible**: Works with Next.js and other SSR frameworks

## Browse All Icons

Visit **[icons.onebit.ng](https://icons.onebit.ng)** to browse the complete icon collection, copy code examples, and see live previews.

## Props

All icon components accept standard SVG props plus:

- `size?: string | number` - Sets both width and height
- `className?: string` - CSS classes
- `style?: CSSProperties` - Inline styles
- All other SVG attributes (`width`, `height`, `fill`, `stroke`, etc.)

## Examples

### Basic Usage
```jsx
<OnebitHome size={24} />
<OnebitUser size="2em" />
```

### Custom Styling
```jsx
<OnebitHome 
  style={{ 
    width: '48px', 
    height: '48px', 
    color: '#0088ff' 
  }} 
/>
```

### With CSS Classes
```jsx
<OnebitUser className="text-blue-500 hover:text-blue-700" />
```

## Documentation

For complete documentation, examples, and icon browsing, visit:

🌐 **[icons.onebit.ng](https://icons.onebit.ng)**

## Repository

[GitHub Repository](https://github.com/onebit-labs/onebit-icons)

## License

MIT License - see the [LICENSE](https://github.com/onebit-labs/onebit-icons/blob/main/LICENSE) file for details.
