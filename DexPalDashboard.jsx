import React, { useState } from 'react';

const DexPalDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Documentation Banner - Added to clearly indicate this is for documentation purposes only
  const DocumentationBanner = () => (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h2 className="text-lg font-medium text-yellow-800">DexPal Documentation & Knowledge Center</h2>
          <p className="mt-1 text-sm text-yellow-700">
            This dashboard is for informational purposes only. It provides documentation about DexPal's features, vision, and roadmap. This is NOT a functional trading interface or tool.
          </p>
        </div>
      </div>
    </div>
  );
  
  // Navigation items updated based on DexPal's actual features
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'market', label: 'Market Statistics' },
    { id: 'business', label: 'Business Model' },
    { id: 'custom_dashboard', label: 'Custom Dashboard' },
    { id: 'pair_screener', label: 'Pair Screener' },
    { id: 'rewards', label: 'Rewards & Competitions' },
    { id: 'earn', label: 'Earn Opportunities' },
    { id: 'dex_profile', label: 'DEX Profiles' },
    { id: 'trading_history', label: 'Trading History' },
    { id: 'analytics', label: 'Trade Analytics' },
    { id: 'wallets', label: 'Wallets Manager' },
    { id: 'leaderboards', label: 'Leaderboards' },
    { id: 'education', label: 'Education & AI' },
    { id: 'news', label: 'Latest News' },
    { id: 'tech', label: 'Technical Stack' },
    { id: 'team', label: 'Team' },
    { id: 'token', label: 'Token Details' },
    { id: 'strategy', label: 'Go-to-Market' },
    { id: 'security', label: 'Security Center' }
  ];
  
  // Simple content rendering function
  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">DexPal Overview</h2>
            <p className="mb-4">
              The first data dashboard and rewards hub for leverage trading on decentralized exchanges (DEXs).
              Supercharge your DEXperience and unlock the full potential of decentralized trading.
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
                  <span className="font-semibold">20+ DEXs</span>
                </div>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Key Thesis</h3>
                <p>DexPal bridges the gap between 100M+ CEX users and the growing DEX ecosystem.</p>
                <p className="mt-2">
                  Out of nearly $500 billion traded in crypto derivatives, more is 
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
                <h3 className="font-medium text-blue-800 mb-1">Active Networks</h3>
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Blockchain networks supported</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium text-green-800 mb-1">Partner DEXs</h3>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm">Decentralized exchanges</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium text-purple-800 mb-1">Total Users</h3>
                <p className="text-2xl font-bold">500,000+</p>
                <p className="text-sm">In the DEX ecosystem</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-yellow-50 p-4 rounded">
                <h3 className="font-medium text-yellow-800 mb-1">Tradeable Assets</h3>
                <p className="text-2xl font-bold">300+</p>
                <p className="text-sm">Trading pairs available</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded">
                <h3 className="font-medium text-indigo-800 mb-1">Active Competitions</h3>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm">Ongoing trading contests</p>
              </div>
              <div className="bg-pink-50 p-4 rounded">
                <h3 className="font-medium text-pink-800 mb-1">Available Rewards</h3>
                <p className="text-2xl font-bold">$10M+</p>
                <p className="text-sm">In incentives and rewards</p>
              </div>
            </div>
            <p className="mt-4">
              The decentralized landscape is growing rapidly, with over $500 billion in volume traded on DEXs.
              DexPal aims to be the central hub for all DEX trading activity.
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
              <h3 className="font-medium mb-2">Grant Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-3">
                <div className="p-2 bg-gray-50 rounded text-center text-sm">Arbitrum DAO</div>
                <div className="p-2 bg-gray-50 rounded text-center text-sm">Fuel Network</div>
                <div className="p-2 bg-gray-50 rounded text-center text-sm">Vertex Protocol</div>
                <div className="p-2 bg-gray-50 rounded text-center text-sm">Gains Network</div>
                <div className="p-2 bg-gray-50 rounded text-center text-sm">Vela Exchange</div>
              </div>
            </div>
          </div>
        );
      case 'custom_dashboard':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Custom Dashboard</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> The Custom Dashboard feature aggregates all user trading activity across multiple wallets, DEXs, and networks in one unified interface.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Key Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Multi-Wallet Aggregation</h4>
                  <p className="text-sm">Connect and view multiple wallets in one dashboard, with data automatically organized and categorized.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Cross-DEX Overview</h4>
                  <p className="text-sm">See positions and activity across all supported DEXs rather than switching between multiple platforms.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Customizable Widgets</h4>
                  <p className="text-sm">Arrange and personalize dashboard elements based on your preference and trading priorities.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Real-Time Data</h4>
                  <p className="text-sm">Get up-to-the-minute information on positions, balances, and market movements.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">Dashboard Elements</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Active positions widget with P&L tracking</li>
                <li>Historical performance charts</li>
                <li>Recent transactions log</li>
                <li>Market overview with watchlist</li>
                <li>Account balances across wallets</li>
                <li>Alerts and notifications center</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Custom Dashboard feature. The actual dashboard is accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'pair_screener':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Pair Screener</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> The Pair Screener allows users to discover and analyze over 300 tradable assets across 20+ supported DEXs.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Feature Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Comprehensive Listings</h4>
                  <p className="text-sm">Browse all available trading pairs from supported DEXs in one consolidated view.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Advanced Filtering</h4>
                  <p className="text-sm">Filter assets by network, DEX, trading volume, price action, and more to find the perfect trading opportunity.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Market Data</h4>
                  <p className="text-sm">View key metrics including 24h volume, funding rates, open interest, and available leverage for each pair.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Comparison Tools</h4>
                  <p className="text-sm">Compare the same trading pair across multiple DEXs to find the best trading conditions.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">Screener Components</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Asset</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">DEX</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">24h %</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Volume</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Funding</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-sm">
                      <td className="px-4 py-2">BTC-USD</td>
                      <td className="px-4 py-2">Gains Network</td>
                      <td className="px-4 py-2">$71,455</td>
                      <td className="px-4 py-2 text-green-600">+2.5%</td>
                      <td className="px-4 py-2">$157M</td>
                      <td className="px-4 py-2">0.01%</td>
                    </tr>
                    <tr className="text-sm bg-gray-50">
                      <td className="px-4 py-2">ETH-USD</td>
                      <td className="px-4 py-2">Vertex Protocol</td>
                      <td className="px-4 py-2">$3,885</td>
                      <td className="px-4 py-2 text-red-600">-1.2%</td>
                      <td className="px-4 py-2">$98M</td>
                      <td className="px-4 py-2">0.02%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">Example visualization - actual data available in the DexPal application</p>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Pair Screener feature. The actual screener is accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'rewards':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Rewards & Competitions</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal offers comprehensive tracking and alerts for trading competitions, incentives, and giveaways across supported DEXs.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">DexPal Points Program</h3>
              <p className="text-sm mb-4">The DexPal Points system rewards users for their activity on the platform and when trading with our partner DEXs using referral codes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Earning Points</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Using DexPal referral codes on partner DEXs</li>
                    <li>Inviting friends through the referral program</li>
                    <li>Participating in trading competitions</li>
                    <li>Contributing to the community</li>
                  </ul>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Point Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Access to exclusive features</li>
                    <li>Eligibility for special rewards</li>
                    <li>Enhanced rewards during trading competitions</li>
                    <li>Potential for token airdrops (future)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Trading Competitions Tracker</h3>
              <div className="border p-4 rounded bg-gray-50">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Competition</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">DEX</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Prize Pool</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">End Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="text-sm">
                        <td className="px-4 py-2">Summer Trading Championship</td>
                        <td className="px-4 py-2">Gains Network</td>
                        <td className="px-4 py-2">$50,000</td>
                        <td className="px-4 py-2">Aug 30, 2025</td>
                      </tr>
                      <tr className="text-sm bg-gray-50">
                        <td className="px-4 py-2">Weekly Leaderboard</td>
                        <td className="px-4 py-2">Vertex Protocol</td>
                        <td className="px-4 py-2">$10,000</td>
                        <td className="px-4 py-2">Every Sunday</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">Example visualization - active competitions are updated regularly in the app</p>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Rewards & Competitions feature. The actual rewards program is accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'earn':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Earn Opportunities</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal offers various opportunities for users to earn rewards and benefits through trading and participation on the platform.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Earning Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Trading Volume</h4>
                  <p className="text-sm">Earn points for trading volume on supported DEXs.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Referrals</h4>
                  <p className="text-sm">Refer friends to earn rewards and benefits.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Competitions</h4>
                  <p className="text-sm">Participate in trading competitions for additional rewards.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Education</h4>
                  <p className="text-sm">Earn points by participating in educational content and events.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Earn Opportunities feature. The actual earning opportunities are accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'dex_profile':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">DEX Profiles</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal provides detailed profiles for each supported DEX, including key metrics, trading pairs, and user activity.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Feature Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Network Information</h4>
                  <p className="text-sm">View network details, including blockchain type and mainnet/testnet status.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Trading Activity</h4>
                  <p className="text-sm">See trading volume, liquidity, and recent activity on the DEX.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Token Information</h4>
                  <p className="text-sm">View token details, including supply, market capitalization, and tokenomics.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Governance</h4>
                  <p className="text-sm">Learn about the governance structure of the DEX.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">DEX Profiles</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">DEX</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Network</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Trading Pairs</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Liquidity</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Activity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-sm">
                      <td className="px-4 py-2">Gains Network</td>
                      <td className="px-4 py-2">Arbitrum</td>
                      <td className="px-4 py-2">300+</td>
                      <td className="px-4 py-2">$157M</td>
                      <td className="px-4 py-2">High</td>
                    </tr>
                    <tr className="text-sm bg-gray-50">
                      <td className="px-4 py-2">Vertex Protocol</td>
                      <td className="px-4 py-2">Arbitrum</td>
                      <td className="px-4 py-2">200+</td>
                      <td className="px-4 py-2">$98M</td>
                      <td className="px-4 py-2">Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the DEX Profiles feature. The actual profiles are accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'trading_history':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Trading History</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal provides a comprehensive trading history feature for users to track their trading activity and performance.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Feature Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Historical Data</h4>
                  <p className="text-sm">View detailed trading history for all supported DEXs.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Performance Analysis</h4>
                  <p className="text-sm">Analyze trading performance and identify trends.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Trade Analytics</h4>
                  <p className="text-sm">Get insights into trading strategies and performance.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">CSV Export</h4>
                  <p className="text-sm">Export trading history data to CSV for further analysis.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">Trading History Components</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Trade ID</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Asset</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">DEX</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Volume</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">P&L</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-sm">
                      <td className="px-4 py-2">12345</td>
                      <td className="px-4 py-2">BTC-USD</td>
                      <td className="px-4 py-2">Gains Network</td>
                      <td className="px-4 py-2">$71,455</td>
                      <td className="px-4 py-2">$157M</td>
                      <td className="px-4 py-2 text-green-600">$1,000</td>
                      <td className="px-4 py-2">Aug 1, 2025</td>
                    </tr>
                    <tr className="text-sm bg-gray-50">
                      <td className="px-4 py-2">12346</td>
                      <td className="px-4 py-2">ETH-USD</td>
                      <td className="px-4 py-2">Vertex Protocol</td>
                      <td className="px-4 py-2">$3,885</td>
                      <td className="px-4 py-2">$98M</td>
                      <td className="px-4 py-2 text-red-600">-$500</td>
                      <td className="px-4 py-2">Aug 2, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Trading History feature. The actual history is accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Trade Analytics</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal provides advanced analytics and insights to help users make informed trading decisions.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Analytics Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Performance Metrics</h4>
                  <p className="text-sm">Analyze trading performance and identify key indicators.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Strategy Patterns</h4>
                  <p className="text-sm">Identify trading patterns and trends.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Risk Management</h4>
                  <p className="text-sm">Assess and manage trading risks.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Fee Analysis</h4>
                  <p className="text-sm">Analyze trading fees and optimize costs.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">Analytics Tools</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tool</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-sm">
                      <td className="px-4 py-2">Trade Analytics Dashboard</td>
                      <td className="px-4 py-2">Visualize trading performance and activity.</td>
                      <td className="px-4 py-2">Used daily for monitoring and analysis.</td>
                    </tr>
                    <tr className="text-sm bg-gray-50">
                      <td className="px-4 py-2">API Integration</td>
                      <td className="px-4 py-2">Access real-time trading data and analytics through API.</td>
                      <td className="px-4 py-2">Used for automated trading strategies and integration with other platforms.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Trade Analytics feature. The actual analytics tools are accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'wallets':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Wallets Manager</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal provides a wallets manager feature to manage and organize multiple wallets.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Feature Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Multi-Wallet Management</h4>
                  <p className="text-sm">Connect and manage multiple wallets in one centralized interface.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Token Balances</h4>
                  <p className="text-sm">View token balances and transaction history for each wallet.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Transaction History</h4>
                  <p className="text-sm">Track all transactions and transfers for each wallet.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Wallet Security</h4>
                  <p className="text-sm">Set up and manage security features for each wallet.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">Wallets Manager Components</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Wallet</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Network</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tokens</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Transactions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-sm">
                      <td className="px-4 py-2">Wallet 1</td>
                      <td className="px-4 py-2">Arbitrum</td>
                      <td className="px-4 py-2">BTC, ETH, USDC</td>
                      <td className="px-4 py-2">$10,000</td>
                      <td className="px-4 py-2">100</td>
                    </tr>
                    <tr className="text-sm bg-gray-50">
                      <td className="px-4 py-2">Wallet 2</td>
                      <td className="px-4 py-2">Polygon</td>
                      <td className="px-4 py-2">MATIC, USDT</td>
                      <td className="px-4 py-2">$5,000</td>
                      <td className="px-4 py-2">50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Wallets Manager feature. The actual wallets manager is accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'leaderboards':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Leaderboards</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal offers leaderboards for various trading competitions and activities across supported DEXs.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Leaderboard Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Trading Leaderboards</h4>
                  <p className="text-sm">Compete against other traders for top rankings.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Education Leaderboards</h4>
                  <p className="text-sm">Compete against other users in educational activities.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Community Leaderboards</h4>
                  <p className="text-sm">Participate in community-driven leaderboards.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Rewards Leaderboards</h4>
                  <p className="text-sm">Compete for special rewards and incentives.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">Leaderboards</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Leaderboard</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">DEX</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-sm">
                      <td className="px-4 py-2">Summer Trading Championship</td>
                      <td className="px-4 py-2">Gains Network</td>
                      <td className="px-4 py-2">1st</td>
                      <td className="px-4 py-2">10,000</td>
                    </tr>
                    <tr className="text-sm bg-gray-50">
                      <td className="px-4 py-2">Weekly Leaderboard</td>
                      <td className="px-4 py-2">Vertex Protocol</td>
                      <td className="px-4 py-2">2nd</td>
                      <td className="px-4 py-2">5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Leaderboards feature. The actual leaderboards are accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Education & AI</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal offers educational content and AI-powered tools to enhance trading knowledge and skills.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Education Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Beginner Resources</h4>
                  <p className="text-sm">Learn the basics of decentralized trading.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Intermediate Strategies</h4>
                  <p className="text-sm">Explore advanced trading strategies.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Expert Content</h4>
                  <p className="text-sm">Access expert insights and analysis.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">AI-Powered Tools</h4>
                  <p className="text-sm">Use AI for automated trading and decision-making.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">Education Resources</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Resource</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Access</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-sm">
                      <td className="px-4 py-2">Trading Basics Course</td>
                      <td className="px-4 py-2">Video Course</td>
                      <td className="px-4 py-2">Free</td>
                    </tr>
                    <tr className="text-sm bg-gray-50">
                      <td className="px-4 py-2">Advanced Trading Strategies</td>
                      <td className="px-4 py-2">E-Book</td>
                      <td className="px-4 py-2">Paid</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the Education & AI feature. The actual educational content and AI tools are accessible through the DexPal application.
              </p>
            </div>
          </div>
        );
      case 'news':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Latest News</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Feature Documentation:</span> DexPal provides a news section to stay updated on the latest developments in the decentralized finance space.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">News Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Latest Articles</h4>
                  <p className="text-sm">Read the latest articles and insights.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Market Updates</h4>
                  <p className="text-sm">Stay informed about market trends and developments.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Community Events</h4>
                  <p className="text-sm">Find upcoming events and meetups.</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-2">Regulatory Updates</h4>
                  <p className="text-sm">Stay updated on regulatory changes affecting the industry.</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium mb-2">News</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-sm">
                      <td className="px-4 py-2">New DEX Integration</td>
                      <td className="px-4 py-2">Aug 1, 2025</td>
                      <td className="px-4 py-2">DexPal Blog</td>
                    </tr>
                    <tr className="text-sm bg-gray-50">
                      <td className="px-4 py-2">Upcoming Trading Competition</td>
                      <td className="px-4 py-2">Aug 15, 2025</td>
                      <td className="px-4 py-2">DexPal Announcement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                Note: This is documentation of the News feature. The actual news section is accessible through the DexPal application.
              </p>
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
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Select a section</h2>
            <p>Please select a section from the navigation menu to view documentation.</p>
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
            <span className="ml-2 text-sm text-gray-500">Documentation Center</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Seed Round:</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">$2.5M / $18.5M</span>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <DocumentationBanner />
        
        <div className="flex flex-col md:flex-row">
          {/* Navigation Sidebar */}
          <nav className="bg-white shadow-sm rounded-lg p-4 md:w-64 mb-6 md:mb-0 md:mr-6 flex-shrink-0">
            <div className="mb-4">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Documentation Sections
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
            DexPal - The first data dashboard and rewards hub for leverage trading on DEXs
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DexPalDashboard; 