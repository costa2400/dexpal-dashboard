import React, { useState } from 'react';

const DexPalDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Documentation Banner - Added to clearly indicate this is for documentation purposes only
  const DocumentationBanner = () => (
    <div className="documentation-banner">
      <h2>DexPal Documentation & Knowledge Center</h2>
      <p>This dashboard is for informational purposes only. It provides documentation about DexPal's features, vision, and roadmap. This is NOT a trading interface.</p>
    </div>
  );
  
  // Navigation items
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'market', label: 'Market Statistics' },
    { id: 'business', label: 'Business Model' },
    { id: 'customers', label: 'Target Customers' },
    { id: 'product', label: 'Product Roadmap' },
    { id: 'tech', label: 'Technical Stack' },
    { id: 'team', label: 'Team' },
    { id: 'token', label: 'Token Details' },
    { id: 'strategy', label: 'Go-to-Market' },
    // New sections based on documentation
    { id: 'analytics', label: 'Advanced Analytics' },
    { id: 'education', label: 'Educational Center' },
    { id: 'rewards', label: 'Points & Rewards' },
    { id: 'paper', label: 'Paper Trading' },
    { id: 'security', label: 'Security Center' },
    { id: 'compare', label: 'DEX Comparison' }
  ];
  
  // Simple content rendering function
  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">DexPal Overview</h2>
            <p className="mb-4">
              The ultimate data terminal and rewards hub for leverage trading on decentralized exchanges (DEXs).
              Bridging the gap between 100M+ CEX users and the growing DEX ecosystem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Core Metrics</h3>
                <div className="flex justify-between mb-2">
                  <span>Seed Round:</span>
                  <span className="font-semibold">$2.5M / $18.5M valuation</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Founder Ownership:</span>
                  <span className="font-semibold">13.51%</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Current Partners:</span>
                  <span className="font-semibold">12+ DEXs</span>
                </div>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Key Thesis</h3>
                <p>Since 2023, derivatives volumes on DEXs have increased 500%.</p>
                <p className="mt-2">
                  Out of nearly $100 trillion traded in crypto derivatives yearly, more is 
                  steadily moving to DEXs as DeFi infrastructure improves.
                </p>
              </div>
            </div>
          </div>
        );
      case 'market':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Market Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium text-blue-800 mb-1">Annual Crypto Derivatives</h3>
                <p className="text-2xl font-bold">$100T</p>
                <p className="text-sm">Total market size</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium text-green-800 mb-1">DEX Growth Since 2023</h3>
                <p className="text-2xl font-bold">+500%</p>
                <p className="text-sm">Trading volume increase</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium text-purple-800 mb-1">DEX Market Share</h3>
                <p className="text-2xl font-bold">~10%</p>
                <p className="text-sm">Of spot trading (growing)</p>
              </div>
            </div>
            <p className="mt-4">
              78% of CEX traders have expressed interest in self-custody options according to a Binance Survey,
              representing a massive potential market for DexPal.
            </p>
          </div>
        );
      case 'business':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Business Model</h2>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Revenue Streams</h3>
              <ul className="space-y-2">
                <li><span className="font-semibold">Affiliate Codes:</span> 20-30% of trading fees (Tested ✓)</li>
                <li><span className="font-semibold">Trade Router:</span> Fee on aggregator (2026)</li>
                <li><span className="font-semibold">Maintenance fees:</span> DEXs pay for support</li>
                <li><span className="font-semibold">Premium Features:</span> Subscription service (2026)</li>
                <li><span className="font-semibold">API Access:</span> For institutional clients (2026)</li>
                <li><span className="font-semibold">Advertising:</span> For DEXs & protocols (Tested ✓)</li>
                <li><span className="font-semibold">Ecosystem grants:</span> From blockchain networks (Tested ✓)</li>
              </ul>
            </div>
            <div className="mt-6 border p-4 rounded">
              <h3 className="font-medium mb-2">Token Economics</h3>
              <p>
                After establishing the points program, DexPal will launch a token with comprehensive utility
                including governance rights, revenue sharing for stakers, and fee discounts for holders.
              </p>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Target Customers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">1. Traders (Users)</h3>
                <ul className="space-y-1">
                  <li><span className="font-semibold">DeFi users (0.5M):</span> Existing traders using Perps DEXs</li>
                  <li><span className="font-semibold">CEX users (100M+):</span> Primary audience with little DEX experience</li>
                  <li><span className="font-semibold">Forex traders (20M+):</span> Currently using traditional FX exchanges</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">2. DEXs</h3>
                <p>Hundreds of perpetual DEXs across major blockchain networks</p>
                <p className="mt-2"><span className="font-semibold">Current:</span> Gains Network, Vertex Protocol, SynFutures, KiloEx, ApeX</p>
                <p><span className="font-semibold">Goal:</span> Partner with top 50 DEXs</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">3. Partners</h3>
                <p>Strategic partners across Web3: blockchains, dApps, wallets, bridges, fiat on-ramps</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">4. Institutional</h3>
                <p>Hedge funds, market makers, research firms, enterprise API customers</p>
              </div>
            </div>
          </div>
        );
      case 'product':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Product Roadmap</h2>
            <div className="space-y-6">
              <div className="border-2 border-blue-400 bg-blue-50 p-4 rounded">
                <h3 className="font-medium mb-2">V1 (Current)</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>• Aggregated Dashboard</div>
                  <div>• Trading History + CSV</div>
                  <div>• Active Positions View</div>
                  <div>• Pair Screener</div>
                  <div>• Trading Analytics</div>
                  <div>• Multi-Wallet Management</div>
                  <div>• Rewards/Earn Section</div>
                  <div>• DEX Profiles</div>
                </div>
              </div>
              
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Phase 2 (Next 6 Months)</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>• Leaderboards</div>
                  <div>• Enhanced Analytics</div>
                  <div>• Alerts System</div>
                  <div>• DexPal AI Assistant</div>
                  <div>• Educational Center</div>
                  <div>• DEX Comparison Tool</div>
                  <div>• Mobile Application</div>
                </div>
              </div>
              
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Long-Term Vision (Phase 3-4)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">Trade Execution</div>
                    <p className="text-sm">Direct trade execution with position protection</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">Copy Trading</div>
                    <p className="text-sm">Follow top traders with customizable parameters</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">Market Expansion</div>
                    <p className="text-sm">Expand to options and spot trading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'tech':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Technical Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Next.js 14 web application</li>
                  <li>• TypeScript development</li>
                  <li>• shadcn/ui + TailwindCSS</li>
                  <li>• RainbowKit wallet integration</li>
                  <li>• Context providers for data</li>
                  <li>• React Native mobile (planned)</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Backend</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Rust-based API server</li>
                  <li>• Modular DEX adapters</li>
                  <li>• AWS Cloud infrastructure</li>
                  <li>• Lambda + API Gateway</li>
                  <li>• DynamoDB for data storage</li>
                  <li>• Supabase for user data</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Data Processing</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Substreams by StreamingFast</li>
                  <li>• Subgraphs as secondary extraction</li>
                  <li>• BigQuery DB for transformed data</li>
                  <li>• Rust Transformer Core</li>
                  <li>• CQRS pattern</li>
                  <li>• Advanced caching strategies</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-medium mb-2">Supported Networks & DEXs</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Arbitrum</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Solana</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">dYdX Chain</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Hyperliquid</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Base</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">+ 15 more</span>
              </div>
            </div>
          </div>
        );
      case 'team':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Team</h2>
            <div className="mb-2 text-sm text-gray-600">
              Core team members have known each other for 10+ years and worked together at previous startups
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-blue-200 p-4 rounded">
                <h3 className="font-medium text-blue-800">Hamed Jabbar</h3>
                <p className="text-gray-600 text-sm mb-2">Founder, BD & Partnerships</p>
                <p className="text-sm">Serial founder and crypto expert with 10+ years growing tech startups</p>
              </div>
              <div className="border border-blue-200 p-4 rounded">
                <h3 className="font-medium text-blue-800">Eric Moran</h3>
                <p className="text-gray-600 text-sm mb-2">Co-Founder, Full-Stack Dev</p>
                <p className="text-sm">Second hand to CEO, operations expert with 10+ years in tech</p>
              </div>
              <div className="border border-blue-200 p-4 rounded">
                <h3 className="font-medium text-blue-800">Danil Panov</h3>
                <p className="text-gray-600 text-sm mb-2">PM & Full-Stack Dev</p>
                <p className="text-sm">Great PM and senior dev with 10 years across multiple tech stacks</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-medium mb-3">Funding Allocation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded">
                  <div className="flex justify-between mb-1">
                    <span>Engineering & Infrastructure</span>
                    <span className="font-bold">45%</span>
                  </div>
                  <div className="text-sm">DEX integrations, cloud optimization</div>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <div className="flex justify-between mb-1">
                    <span>Marketing</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="text-sm">Campaigns, points program, affiliates</div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="flex justify-between mb-1">
                    <span>Operations</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="text-sm">Overhead, contractors, legal</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'token':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Token Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium text-blue-800 mb-2">Funding Round</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total Round:</span>
                    <span className="font-semibold">$32.5M + Token Warrant</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valuation:</span>
                    <span className="font-semibold">$18.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-semibold">$2.5M Remaining</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Founder Ownership:</span>
                    <span className="font-semibold">13.51%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Entity:</span>
                    <span className="font-semibold">DP Analytics Inc.</span>
                  </div>
                </div>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Token Utility</h3>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-semibold">Governance:</span> Vote on fee splits (10-30%), DEX integrations</li>
                  <li><span className="font-semibold">Staking:</span> Earn significant share of platform revenue</li>
                  <li><span className="font-semibold">Fee Discounts:</span> Reduced rates on premium features</li>
                  <li><span className="font-semibold">Access:</span> Exclusive features and advanced tooling</li>
                </ul>
              </div>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-medium mb-2">Timeline</h3>
              <p>
                After raising this seed round, DexPal expects to move directly to a Token Generation 
                Event (TGE) without requiring additional funding rounds. The points program will serve 
                as a precursor to the token launch.
              </p>
            </div>
          </div>
        );
      case 'strategy':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Go-to-Market Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Launch Approach</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Focused integration with top 5 DEXs by volume</li>
                  <li>• Phased rollout to minimize infrastructure strain</li>
                  <li>• Early access waitlist to build anticipation</li>
                  <li>• Exclusive beta access for community contributors</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">User Acquisition</h3>
                <ul className="space-y-1 text-sm">
                  <li>• DEX partnerships as primary acquisition channel</li>
                  <li>• Cross-promotion with complementary DeFi services</li>
                  <li>• Targeted outreach to CEX derivatives traders</li>
                  <li>• Educational content marketing funnel</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">DEX Partner Onboarding</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Streamlined integration process with documentation</li>
                  <li>• Dedicated technical support for initial setup</li>
                  <li>• Co-marketing commitments</li>
                  <li>• Incentivized user migration programs</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Launch Timeline</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Private beta with select users and DEXs</li>
                  <li>• Public beta with limited feature set</li>
                  <li>• Full V1 release with core features (Q3 2024)</li>
                  <li>• Phased implementation of advanced features</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Advanced Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Performance Metrics</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Win rate percentage across DEXs</li>
                  <li>• Average trade duration</li>
                  <li>• Risk/reward ratio calculation</li>
                  <li>• Fee analysis and optimization suggestions</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Strategy Patterns</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Most profitable trading pairs</li>
                  <li>• Best performing time periods</li>
                  <li>• Position sizing effectiveness</li>
                  <li>• Leverage optimization analysis</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h3 className="font-medium mb-2">Cross-DEX Arbitrage Opportunities</h3>
              <p className="text-sm">Identify price discrepancies across different DEXs to capitalize on arbitrage opportunities.</p>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Educational Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border-2 border-green-200 p-4 rounded bg-green-50">
                <h3 className="font-medium mb-2">Beginner Resources</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Perpetual Futures Fundamentals</li>
                  <li>• CEX vs DEX Trading Differences</li>
                  <li>• Wallet Security Best Practices</li>
                  <li>• Understanding Funding Rates</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Intermediate Strategies</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Advanced Trading Strategies</li>
                  <li>• Risk Management Techniques</li>
                  <li>• Cross-DEX Arbitrage Methods</li>
                  <li>• Technical Analysis for Crypto</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Expert Content</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Market Making Techniques</li>
                  <li>• Advanced Order Types</li>
                  <li>• Portfolio Construction</li>
                  <li>• On-Chain Data Analysis</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 border p-4 rounded bg-blue-50">
              <h3 className="font-medium mb-2">DEX-Specific Guides</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <div className="p-2 bg-white rounded text-center text-sm">Gains Network</div>
                <div className="p-2 bg-white rounded text-center text-sm">Vertex Protocol</div>
                <div className="p-2 bg-white rounded text-center text-sm">SynFutures</div>
                <div className="p-2 bg-white rounded text-center text-sm">KiloEx</div>
                <div className="p-2 bg-white rounded text-center text-sm">ApeX Protocol</div>
              </div>
            </div>
          </div>
        );
      case 'rewards':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Points & Rewards Program</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium mb-2">Your Points: <span className="text-xl font-bold">2,450</span></h3>
              <div className="bg-white rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full w-3/5"></div>
              </div>
              <p className="text-xs mt-1">550 points until next tier: Silver</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Earning Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-3 rounded">
                  <h4 className="text-sm font-semibold mb-1">Trading Volume</h4>
                  <p className="text-xs mb-2">1 point per $100 traded</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Volume this month: $28,500</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">285 points</span>
                  </div>
                </div>
                <div className="border p-3 rounded">
                  <h4 className="text-sm font-semibold mb-1">Referrals</h4>
                  <p className="text-xs mb-2">100 points per active trader referred</p>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm rounded py-1">
                    Get Referral Link
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Point Utility</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Fee Discounts:</strong> 5% off premium features for every 1,000 points</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Trading Competitions:</strong> Exclusive access to enhanced prize pools</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Token Conversion:</strong> Future eligibility for token airdrops at 1:100 ratio</span>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'paper':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Paper Trading Simulator</h2>
            <div className="bg-yellow-50 p-3 rounded-lg mb-6 border border-yellow-200">
              <p className="text-sm">Practice trading with virtual funds. All trades are simulated - no real assets are at risk.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded bg-blue-50">
                <h3 className="font-medium mb-2">Portfolio Balance</h3>
                <p className="text-2xl font-bold">$10,000 USDC</p>
                <p className="text-xs text-gray-500">Starting capital</p>
              </div>
              <div className="p-4 rounded bg-green-50">
                <h3 className="font-medium mb-2">Open Positions</h3>
                <p className="text-2xl font-bold">0</p>
                <p className="text-xs text-gray-500">No active trades</p>
              </div>
              <div className="p-4 rounded bg-purple-50">
                <h3 className="font-medium mb-2">Profit/Loss</h3>
                <p className="text-2xl font-bold">$0.00</p>
                <p className="text-xs text-gray-500">Start trading to see P&L</p>
              </div>
            </div>
            
            <div className="border p-4 rounded">
              <h3 className="font-medium mb-3">Create Paper Trade</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Select DEX</label>
                  <select className="w-full p-2 border rounded text-sm">
                    <option>Gains Network</option>
                    <option>Vertex Protocol</option>
                    <option>SynFutures</option>
                    <option>KiloEx</option>
                    <option>ApeX Protocol</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Trading Pair</label>
                  <select className="w-full p-2 border rounded text-sm">
                    <option>BTC/USD</option>
                    <option>ETH/USD</option>
                    <option>SOL/USD</option>
                    <option>AVAX/USD</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Position Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-green-500 text-white text-sm py-2 rounded">Long</button>
                    <button className="bg-gray-200 text-gray-700 text-sm py-2 rounded">Short</button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Leverage</label>
                  <input type="range" min="1" max="20" className="w-full" />
                  <div className="flex justify-between text-xs">
                    <span>1x</span>
                    <span>5x</span>
                    <span>10x</span>
                    <span>20x</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                  Place Paper Trade
                </button>
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Security Center</h2>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
              <h3 className="font-medium text-green-800 mb-2">Non-Custodial Design</h3>
              <p className="text-sm">DexPal never takes custody of your assets. All trades execute directly via DEX smart contracts.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Data Protection</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Encrypted wallet connections</li>
                  <li>• Robust authentication safeguards</li>
                  <li>• Strict API key protection</li>
                  <li>• Rate limiting mechanisms</li>
                </ul>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Audit Strategy</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Quarterly security reviews by Halborn and CertiK</li>
                  <li>• Bug bounty program for vulnerability reporting</li>
                  <li>• Regular penetration testing</li>
                  <li>• Open-source components for community review</li>
                </ul>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-blue-50">
              <h3 className="font-medium mb-2">Insurance Options</h3>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm">Enable Nexus Mutual integration for smart contract coverage (1.5% fee)</label>
              </div>
              <p className="text-xs text-gray-600">Additional protection measures will be implemented in phases as the platform matures.</p>
            </div>
          </div>
        );
      case 'compare':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">DEX Comparison Tool</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm flex items-center">
                <span>Gains Network</span>
                <button className="ml-2 text-xs">&times;</button>
              </div>
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm flex items-center">
                <span>Vertex Protocol</span>
                <button className="ml-2 text-xs">&times;</button>
              </div>
              <div className="border border-dashed border-gray-300 px-2 py-1 rounded text-sm text-gray-500">
                + Add DEX to compare
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gains Network</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vertex Protocol</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Networks</td>
                    <td className="px-4 py-3 text-sm">Arbitrum, Polygon</td>
                    <td className="px-4 py-3 text-sm">Arbitrum</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Max Leverage</td>
                    <td className="px-4 py-3 text-sm">150x</td>
                    <td className="px-4 py-3 text-sm">100x</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Trading Fee</td>
                    <td className="px-4 py-3 text-sm">0.08%-0.1%</td>
                    <td className="px-4 py-3 text-sm">0.05%-0.1%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Collateral Types</td>
                    <td className="px-4 py-3 text-sm">DAI, USDC</td>
                    <td className="px-4 py-3 text-sm">USDC</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Current Incentives</td>
                    <td className="px-4 py-3 text-sm">Trading competition: 5,000 GNS</td>
                    <td className="px-4 py-3 text-sm">Fee discount: 20% for 30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-3 bg-blue-50 rounded text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">
                Generate Detailed Report
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Select a section</h2>
            <p>Please select a section from the navigation menu to view content.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">DexPal</h1>
            <span className="ml-2 text-sm text-gray-500">Interactive Dashboard</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Seed Round:</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">$2.5M / $18.5M</span>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row">
          {/* Navigation Sidebar */}
          <nav className="bg-white shadow-sm rounded-lg p-4 md:w-64 mb-6 md:mb-0 md:mr-6 flex-shrink-0">
            <div className="mb-4">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Dashboard Sections
              </h2>
            </div>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Content Area */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </main>
      
      <footer className="bg-white shadow-sm mt-8">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-sm text-gray-500 text-center">
            DexPal - The ultimate data terminal and rewards hub for leverage trading on DEXs
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DexPalDashboard; 