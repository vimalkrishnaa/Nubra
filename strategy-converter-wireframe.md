# Strategy Converter Wireframe

## Overall Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Nubra Logo]                    Strategy Converter                    [Profile] │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    Strategy Converter                               │   │
│  │              Convert Manual Trades to Algorithms                   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  Step 1: Capture Trades    Step 2: Convert Rules    Step 3: Test    │   │
│  │  Step 4: Deploy            [Progress: 25%]                          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │                    MAIN CONTENT AREA                                │   │
│  │                    (Changes per step)                               │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  [Previous]                    [Next Step]                          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step 1: Capture Manual Trades

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📊 Step 1: Capture Your Manual Trades                                      │
│                                                                             │
│  Choose how you'd like to import your trading data:                        │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │   📁 CSV Upload │  │   ✏️  Text Input │  │   📋 Import     │             │
│  │                 │  │                 │  │   from Orders   │             │
│  │ Upload your     │  │ Manually enter  │  │ Import from     │             │
│  │ trading data    │  │ trade details   │  │ your order      │             │
│  │ from Excel/CSV  │  │ one by one     │  │ history         │             │
│  │                 │  │                 │  │                 │             │
│  │ [Choose File]   │  │ [Add Trade]     │  │ [Connect API]   │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  📈 Recent Trades Captured (3 trades)                              │   │
│  │                                                                     │   │
│  │  RELIANCE  |  Buy  |  2,450.50  |  100 shares  |  +2.5%  |  ✅     │   │
│  │  TCS       |  Sell |  3,200.00  |   50 shares  |  -1.2%  |  ✅     │   │
│  │  HDFC      |  Buy  |  1,680.25  |   75 shares  |  +0.8%  |  ✅     │   │
│  │                                                                     │   │
│  │  [Edit Trades] [Add More] [Clear All]                              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step 2: Convert into Rules

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🔧 Step 2: Convert Trades into Trading Rules                               │
│                                                                             │
│  Our AI has analyzed your trades and suggests these patterns:               │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  🎯 Entry Conditions (Auto-detected)                                │   │
│  │                                                                     │   │
│  │  ✅ RSI < 30 (Oversold)                    Confidence: 85%          │   │
│  │  ✅ Volume > 2x Average                     Confidence: 78%          │   │
│  │  ✅ Price above 20-day MA                   Confidence: 92%         │   │
│  │                                                                     │   │
│  │  [Add Condition] [Edit] [Remove]                                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  🛡️ Exit Conditions (Auto-detected)                                 │   │
│  │                                                                     │   │
│  │  ✅ Stop Loss: 2% below entry price                                  │   │
│  │  ✅ Take Profit: 5% above entry price                                 │   │
│  │  ✅ Time-based exit: 5 trading days                                  │   │
│  │                                                                     │   │
│  │  [Add Condition] [Edit] [Remove]                                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  📊 Risk Management Rules                                           │   │
│  │                                                                     │   │
│  │  ✅ Max position size: 10% of portfolio                             │   │
│  │  ✅ Max daily loss: 2% of portfolio                                  │   │
│  │  ✅ Avoid trading during high volatility                            │   │
│  │                                                                     │   │
│  │  [Add Rule] [Edit] [Remove]                                         │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Strategy Name: [My RSI Strategy]                                          │
│  Description: [Auto-generated description of the strategy]                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step 3: Backtest & Performance

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📈 Step 3: Backtest Your Strategy                                         │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  ⚙️ Backtest Settings                                               │   │
│  │                                                                     │   │
│  │  Period: [Last 6 months ▼]  Capital: [₹1,00,000]  [Run Backtest]   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  📊 Performance Summary                                             │   │
│  │                                                                     │   │
│  │  Total Return: +24.5%    Sharpe Ratio: 1.8    Max Drawdown: -8.2%   │   │
│  │  Win Rate: 68%           Avg Trade: +1.2%      Total Trades: 45     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  📈 Equity Curve                                                    │   │
│  │                                                                     │   │
│  │  [Chart showing portfolio value over time]                          │   │
│  │                                                                     │   │
│  │  Your Strategy vs NIFTY 50                                          │   │
│  │  Strategy: +24.5%    NIFTY: +12.3%    Alpha: +12.2%                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  📋 Trade Analysis                                                  │   │
│  │                                                                     │   │
│  │  Best Trade: +8.5% (RELIANCE)    Worst Trade: -2.1% (TCS)            │   │
│  │  Avg Win: +2.8%                  Avg Loss: -1.4%                     │   │
│  │  Profit Factor: 2.1              Recovery Factor: 3.0                │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step 4: Deploy Strategy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🚀 Step 4: Deploy Your Strategy                                            │
│                                                                             │
│  Choose your deployment mode:                                               │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  📝 Paper Trading (Recommended for beginners)                       │   │
│  │                                                                     │   │
│  │  ✅ Test with virtual money first                                   │   │
│  │  ✅ Real-time notifications                                         │   │
│  │  ✅ No risk to your capital                                         │   │
│  │  ✅ Full performance tracking                                       │   │
│  │                                                                     │   │
│  │  Capital: [₹1,00,000]  [Start Paper Trading]                        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  💰 Live Trading (Advanced users)                                   │   │
│  │                                                                     │   │
│  │  ⚠️  Real money at risk                                              │   │
│  │  ✅ Fully automated execution                                        │   │
│  │  ✅ Real-time monitoring                                             │   │
│  │  ✅ Emergency stop controls                                          │   │
│  │                                                                     │   │
│  │  Max Daily Loss: [₹5,000]  Max Position: [₹25,000]                   │   │
│  │  [Enable Safety Controls] [Start Live Trading]                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  🛡️ Safety Controls                                                 │   │
│  │                                                                     │   │
│  │  ✅ Daily loss limit: ₹5,000                                        │   │
│  │  ✅ Position size limit: ₹25,000                                    │   │
│  │  ✅ Manual override: Always available                                │   │
│  │  ✅ Email alerts: All trades                                         │   │
│  │  ✅ SMS alerts: Large trades only                                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Navigation & Progress

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Progress: Step 2 of 4                                                      │
│                                                                             │
│  [◀ Previous]                    [Next Step ▶]                             │
│                                                                             │
│  Step 1: ✅ Capture    Step 2: 🔧 Convert    Step 3: 📈 Test    Step 4: 🚀 Deploy │
└─────────────────────────────────────────────────────────────────────────────┘
```
