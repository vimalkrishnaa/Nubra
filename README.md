# Nubra Strategy Converter

A React component for converting manual trades into automated algorithmic strategies. Built with React, TypeScript, and Tailwind CSS.

## Features

- **4-Step Guided Process**: Capture → Convert → Test → Deploy
- **Modern UI**: Clean, card-based design with rounded corners
- **Responsive Design**: Works on desktop and mobile
- **Interactive Elements**: Drag-and-drop, real-time feedback
- **Safety Controls**: Built-in risk management features

## Demo Video

Watch the demo of Nubra Strategy Converter here:  
[Demo Video on Google Drive](https://drive.google.com/file/d/1xDH5fjV32oC84VTWHhQy-WqzyiCql5iq/view?usp=sharing)


## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Usage

```tsx
import StrategyConverter from './StrategyConverter';

function App() {
  return (
    <div className="App">
      <StrategyConverter />
    </div>
  );
}

export default App;
```

## Component Structure

### Step 1: Capture Trades
- CSV upload functionality
- Manual trade entry
- Import from order history
- Trade validation and preview

### Step 2: Convert Rules
- AI-powered pattern recognition
- Entry/exit condition suggestions
- Risk management rules
- Confidence scoring

### Step 3: Backtest
- Historical data testing
- Performance metrics
- Risk analysis
- Comparison with benchmarks

### Step 4: Deploy
- Paper trading mode
- Live trading with safety controls
- Risk limits and alerts
- Monitoring dashboard

## Styling

The component uses Tailwind CSS with custom design tokens:

- **Colors**: Primary blue, success green, warning yellow, danger red
- **Shadows**: Soft, medium, and strong shadow variants
- **Animations**: Fade-in, slide-up, and pulse effects
- **Typography**: Inter font family

## Customization

### Theme Colors
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: { /* custom primary colors */ },
      success: { /* custom success colors */ },
      // ... other color palettes
    }
  }
}
```

### Component Props
```tsx
interface StrategyConverterProps {
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onComplete?: (strategy: Strategy) => void;
  theme?: 'light' | 'dark';
}
```

## Development

### Running the Component
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## File Structure

```
├── StrategyConverter.tsx    # Main component
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── README.md               # Documentation
└── strategy-converter-wireframe.md  # Wireframe documentation
```

## Key Features

### 1. Trade Capture
- Multiple import methods (CSV, manual, API)
- Real-time validation
- Trade history management

### 2. Rule Generation
- AI-powered pattern analysis
- Confidence scoring
- Customizable conditions
- Risk management rules

### 3. Backtesting
- Historical data analysis
- Performance metrics
- Risk assessment
- Benchmark comparison

### 4. Deployment
- Paper trading simulation
- Live trading with controls
- Safety mechanisms
- Monitoring and alerts

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For questions or issues, please contact the Nubra development team.
