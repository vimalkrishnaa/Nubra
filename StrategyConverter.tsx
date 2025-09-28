import React, { useState } from 'react';

interface Trade {
  id: string;
  symbol: string;
  action: 'Buy' | 'Sell';
  price: number;
  quantity: number;
  pnl: number;
  status: 'success' | 'pending' | 'error';
}

interface StrategyRule {
  id: string;
  type: 'entry' | 'exit' | 'risk';
  condition: string;
  confidence: number;
  enabled: boolean;
}

const StrategyConverter: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [trades, setTrades] = useState<Trade[]>([
    { id: '1', symbol: 'RELIANCE', action: 'Buy', price: 2450.50, quantity: 100, pnl: 2.5, status: 'success' },
    { id: '2', symbol: 'TCS', action: 'Sell', price: 3200.00, quantity: 50, pnl: -1.2, status: 'success' },
    { id: '3', symbol: 'HDFC', action: 'Buy', price: 1680.25, quantity: 75, pnl: 0.8, status: 'success' },
  ]);
  const [rules, setRules] = useState<StrategyRule[]>([
    { id: '1', type: 'entry', condition: 'RSI < 30 (Oversold)', confidence: 85, enabled: true },
    { id: '2', type: 'entry', condition: 'Volume > 2x Average', confidence: 78, enabled: true },
    { id: '3', type: 'entry', condition: 'Price above 20-day MA', confidence: 92, enabled: true },
    { id: '4', type: 'exit', condition: 'Stop Loss: 2% below entry', confidence: 95, enabled: true },
    { id: '5', type: 'exit', condition: 'Take Profit: 5% above entry', confidence: 88, enabled: true },
    { id: '6', type: 'risk', condition: 'Max position: 10% of portfolio', confidence: 90, enabled: true },
  ]);
  const [strategyName, setStrategyName] = useState('My RSI Strategy');
  const [deploymentMode, setDeploymentMode] = useState<'paper' | 'live' | null>(null);

  const steps = [
    { id: 1, title: 'Capture Trades', icon: '📊', description: 'Import your manual trades' },
    { id: 2, title: 'Convert Rules', icon: '🔧', description: 'AI suggests trading rules' },
    { id: 3, title: 'Backtest', icon: '📈', description: 'Test strategy performance' },
    { id: 4, title: 'Deploy', icon: '🚀', description: 'Launch your algorithm' },
  ];

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📊 Step 1: Capture Your Manual Trades</h2>
        <p className="text-gray-600">Choose how you'd like to import your trading data</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CSV Upload */}
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-6 text-center hover:border-blue-300 transition-colors">
          <div className="text-4xl mb-4">📁</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">CSV Upload</h3>
          <p className="text-gray-600 text-sm mb-4">Upload your trading data from Excel/CSV</p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Choose File
          </button>
        </div>

        {/* Text Input */}
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-6 text-center hover:border-blue-300 transition-colors">
          <div className="text-4xl mb-4">✏️</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Text Input</h3>
          <p className="text-gray-600 text-sm mb-4">Manually enter trade details one by one</p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add Trade
          </button>
        </div>

        {/* Import from Orders */}
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-6 text-center hover:border-blue-300 transition-colors">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Import from Orders</h3>
          <p className="text-gray-600 text-sm mb-4">Import from your order history</p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Connect API
          </button>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Recent Trades Captured ({trades.length} trades)</h3>
        <div className="space-y-3">
          {trades.map((trade) => (
            <div key={trade.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">{trade.symbol}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  trade.action === 'Buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {trade.action}
                </span>
                <span className="text-gray-600">₹{trade.price.toLocaleString()}</span>
                <span className="text-gray-600">{trade.quantity} shares</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`font-medium ${
                  trade.pnl > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trade.pnl > 0 ? '+' : ''}{trade.pnl}%
                </span>
                <span className="text-green-600">✅</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-3 mt-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Edit Trades
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Add More
          </button>
          <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">🔧 Step 2: Convert Trades into Trading Rules</h2>
        <p className="text-gray-600">Our AI has analyzed your trades and suggests these patterns</p>
      </div>

      {/* Entry Conditions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Entry Conditions (Auto-detected)</h3>
        <div className="space-y-3">
          {rules.filter(rule => rule.type === 'entry').map((rule) => (
            <div key={rule.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <input type="checkbox" checked={rule.enabled} className="rounded" />
                <span className="text-gray-900">{rule.condition}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Confidence: {rule.confidence}%</span>
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add Condition
        </button>
      </div>

      {/* Exit Conditions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🛡️ Exit Conditions (Auto-detected)</h3>
        <div className="space-y-3">
          {rules.filter(rule => rule.type === 'exit').map((rule) => (
            <div key={rule.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <input type="checkbox" checked={rule.enabled} className="rounded" />
                <span className="text-gray-900">{rule.condition}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Confidence: {rule.confidence}%</span>
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add Condition
        </button>
      </div>

      {/* Risk Management */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Risk Management Rules</h3>
        <div className="space-y-3">
          {rules.filter(rule => rule.type === 'risk').map((rule) => (
            <div key={rule.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <input type="checkbox" checked={rule.enabled} className="rounded" />
                <span className="text-gray-900">{rule.condition}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Confidence: {rule.confidence}%</span>
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add Rule
        </button>
      </div>

      {/* Strategy Details */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Strategy Name</label>
            <input
              type="text"
              value={strategyName}
              onChange={(e) => setStrategyName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <input
              type="text"
              placeholder="Auto-generated description of the strategy"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📈 Step 3: Backtest Your Strategy</h2>
        <p className="text-gray-600">Test your strategy on historical data</p>
      </div>

      {/* Backtest Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">⚙️ Backtest Settings</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Last 6 months</option>
              <option>Last 1 year</option>
              <option>Last 2 years</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Capital</label>
            <input type="text" defaultValue="₹1,00,000" className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Run Backtest
          </button>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Performance Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">+24.5%</div>
            <div className="text-sm text-gray-600">Total Return</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">1.8</div>
            <div className="text-sm text-gray-600">Sharpe Ratio</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">-8.2%</div>
            <div className="text-sm text-gray-600">Max Drawdown</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">68%</div>
            <div className="text-sm text-gray-600">Win Rate</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">+1.2%</div>
            <div className="text-sm text-gray-600">Avg Trade</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-600">45</div>
            <div className="text-sm text-gray-600">Total Trades</div>
          </div>
        </div>
      </div>

      {/* Equity Curve */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Equity Curve</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <div>Chart showing portfolio value over time</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-green-600">Strategy: +24.5%</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-blue-600">NIFTY: +12.3%</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-purple-600">Alpha: +12.2%</div>
          </div>
        </div>
      </div>

      {/* Trade Analysis */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Trade Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Best Trade:</span>
              <span className="font-semibold text-green-600">+8.5% (RELIANCE)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Worst Trade:</span>
              <span className="font-semibold text-red-600">-2.1% (TCS)</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Win:</span>
              <span className="font-semibold text-green-600">+2.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Loss:</span>
              <span className="font-semibold text-red-600">-1.4%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">🚀 Step 4: Deploy Your Strategy</h2>
        <p className="text-gray-600">Choose your deployment mode</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Paper Trading */}
        <div className={`rounded-xl border-2 p-6 transition-colors ${
          deploymentMode === 'paper' 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-200 bg-white hover:border-blue-300'
        }`}>
          <div className="text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Paper Trading</h3>
            <p className="text-sm text-gray-600 mb-4">(Recommended for beginners)</p>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✅</span>
              Test with virtual money first
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✅</span>
              Real-time notifications
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✅</span>
              No risk to your capital
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✅</span>
              Full performance tracking
            </li>
          </ul>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Capital</label>
              <input type="text" defaultValue="₹1,00,000" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <button 
              onClick={() => setDeploymentMode('paper')}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Paper Trading
            </button>
          </div>
        </div>

        {/* Live Trading */}
        <div className={`rounded-xl border-2 p-6 transition-colors ${
          deploymentMode === 'live' 
            ? 'border-red-500 bg-red-50' 
            : 'border-gray-200 bg-white hover:border-red-300'
        }`}>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Trading</h3>
            <p className="text-sm text-gray-600 mb-4">(Advanced users)</p>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm text-gray-600">
              <span className="text-red-500 mr-2">⚠️</span>
              Real money at risk
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✅</span>
              Fully automated execution
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✅</span>
              Real-time monitoring
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✅</span>
              Emergency stop controls
            </li>
          </ul>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Daily Loss</label>
              <input type="text" defaultValue="₹5,000" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Position</label>
              <input type="text" defaultValue="₹25,000" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <button 
              onClick={() => setDeploymentMode('live')}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Start Live Trading
            </button>
          </div>
        </div>
      </div>

      {/* Safety Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🛡️ Safety Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" defaultChecked className="rounded mr-3" />
              <span className="text-sm text-gray-700">Daily loss limit: ₹5,000</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" defaultChecked className="rounded mr-3" />
              <span className="text-sm text-gray-700">Position size limit: ₹25,000</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" defaultChecked className="rounded mr-3" />
              <span className="text-sm text-gray-700">Manual override: Always available</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" defaultChecked className="rounded mr-3" />
              <span className="text-sm text-gray-700">Email alerts: All trades</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="rounded mr-3" />
              <span className="text-sm text-gray-700">SMS alerts: Large trades only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">Nubra</div>
            </div>
            <div className="text-xl font-semibold text-gray-900">Strategy Converter</div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.id ? '✓' : step.id}
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg font-medium ${
              currentStep === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            ◀ Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
            disabled={currentStep === 4}
            className={`px-6 py-2 rounded-lg font-medium ${
              currentStep === 4 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next Step ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyConverter;
