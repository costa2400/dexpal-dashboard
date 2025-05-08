import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import GoToMarketStrategy from './components/GoToMarketStrategy';
import CompanyInformation from './components/CompanyInformation';
import Tokenomics from './components/Tokenomics';

const DexPalDashboard = () => {
  // Enhanced state management
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedGroups, setExpandedGroups] = useState(['Company & Market']); // Default expanded group
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedCustomerSegment, setSelectedCustomerSegment] = useState('traders');
  const [selectedPartner, setSelectedPartner] = useState('all');
  const [analyticsTimeframe, setAnalyticsTimeframe] = useState('1m');
  
  const toggleGroup = (groupName) => {
    setExpandedGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(name => name !== groupName) 
        : [...prev, groupName]
    );
  };
  
  // Sample data for visualizations
  const userGrowthData = [
    { month: 'Jan', users: 12000 },
    { month: 'Feb', users: 19000 },
    { month: 'Mar', users: 32000 },
    { month: 'Apr', users: 47000 },
    { month: 'May', users: 68000 },
  ];
  
  const dexComposition = [
    { name: 'Gains Network', value: 35 },
    { name: 'Vertex', value: 25 },
    { name: 'GMX', value: 20 },
    { name: 'DYDX', value: 15 },
    { name: 'Others', value: 5 },
  ];
  
  const volumeData = [
    { name: 'Jan', Gains: 4000, Vertex: 2400, GMX: 1800, DYDX: 2200 },
    { name: 'Feb', Gains: 3000, Vertex: 1800, GMX: 2000, DYDX: 2500 },
    { name: 'Mar', Gains: 5000, Vertex: 2800, GMX: 2200, DYDX: 3000 },
    { name: 'Apr', Gains: 7000, Vertex: 3800, GMX: 2900, DYDX: 3500 },
    { name: 'May', Gains: 6500, Vertex: 4200, GMX: 3100, DYDX: 3800 },
  ];
  
  const customerSegmentData = [
    { name: 'DeFi Users', value: 6.5 },
    { name: 'CEX Users', value: 100 },
    { name: 'Forex Traders', value: 20 },
  ];
  
  const dexPartners = [
    {
      name: "Vela Exchange",
      status: "Paid",
      network: "Arbitrum",
      details: "Perps DEX that paid for a CSV extract function and was the first official participant of our launch campaign. 10k USD grant in tokens.",
      logo: "https://via.placeholder.com/50"
    },
    {
      name: "Helix",
      status: "Pipeline",
      network: "Injective",
      details: "They want our CSV extract function, wish to be first non-EVM DEX we integrate with and interested in us building subgraphs. Estimated grant: $50,000",
      logo: "https://via.placeholder.com/50"
    },
    {
      name: "Aark",
      status: "Pipeline",
      network: "Arbitrum",
      details: "We are offering a similar package to them as Vela, CSV extraction on their front end and joining our initial launch campaign for a 10k USD grant.",
      logo: "https://via.placeholder.com/50"
    },
    {
      name: "Gains",
      status: "Pipeline",
      network: "Arbitrum",
      details: "We are offering a similar package to them as Vela, CSV extraction on their front end and joining our initial launch campaign for a 10k USD grant.",
      logo: "https://via.placeholder.com/50"
    }
  ];
  
  const blockchainGrants = [
    {
      name: "Arbitrum Questbook",
      status: "Final stages",
      amount: "$25,000",
      details: "We are in the final stages of the process of receiving an Arbitrum quest book grant under new protocol & ideas."
    },
    {
      name: "Fuel Network",
      status: "Final stages",
      amount: "$40,000",
      details: "We are in the final stages of the process of receiving a grant from Fuel to integrate the DEXs on their network for their upcoming mainnet launch."
    },
    {
      name: "Injective Foundation",
      status: "Negotiation",
      amount: "$30,000 - $50,000",
      details: "We are in the negotiation process of receiving a grant from the Injective foundation to cover the development costs of a CSV extract function, integration to DexPal dashboard, and building substreams for Helix DEX."
    },
    {
      name: "Metis Dao",
      status: "Early stages",
      amount: "$25,000",
      details: "In the early stages of negotiation for a micro grant to add support for DEXs on their chain."
    }
  ];
  
  const strategicPartners = [
    {
      name: "LayerZero",
      type: "Bridge partner",
      details: "We will be partnering up with layer zero and stargate to make them our first bridge partner that will offer bridging services directly via our dashboard for a seamless experience for users."
    },
    {
      name: "Fun.xyz",
      type: "Fiat on-ramp",
      details: "Fiat on-ramp solution we are discussing a partnership deal with and a revenue share model. This fiat on-ramp will allow users to buy crypto with their debit/credit card to start trading on perps DEXs."
    },
    {
      name: "Pyth",
      type: "Oracle",
      details: "Pyth wants to be one of our partners to gain more visibility and be introduced to perps DEXs. We will be doing a marketing partnership and exploring the possibility of receiving a grant from one of their existing programs."
    },
    {
      name: "Thirdwave",
      type: "Analytics",
      details: "Thirdwave uses blockchain data to provide user analytics for enhanced marketing campaigns, they wanted to partner with us to offer a white label solution to our DEX partners."
    }
  ];
  
  const COLORS = ['#B47AEA', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  // Documentation Banner - Added to clearly indicate this is for documentation purposes only
  const DocumentationBanner = () => (
    <div className="bg-[#2A2A2A] border-l-4 border-[#B47AEA] p-4 mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-[#B47AEA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h2 className="text-lg font-medium text-white">DexPal Documentation & Knowledge Center</h2>
          <p className="mt-1 text-sm text-[#AAAAAA]">
            This dashboard is for informational purposes only. It provides documentation about DexPal's features, vision, and roadmap. This is NOT a functional trading interface or tool.
          </p>
        </div>
      </div>
    </div>
  );
  
  // Organized sidebar structure based on DexPal data room
  const sidebarStructure = [
    {
      groupName: "Company & Market",
      items: [
    { id: 'overview', label: 'Overview' },
    { id: 'market', label: 'Market Statistics' },
    { id: 'business', label: 'Business Model' },
        { id: 'target_customers', label: 'Target Customers' },
        { id: 'company_info', label: 'Company Information' }
      ]
    },
    {
      groupName: "Product Features",
      items: [
    { id: 'custom_dashboard', label: 'Custom Dashboard' },
    { id: 'pair_screener', label: 'Pair Screener' },
    { id: 'rewards', label: 'Rewards & Competitions' },
    { id: 'earn', label: 'Earn Opportunities' },
    { id: 'dex_profile', label: 'DEX Profiles' },
    { id: 'trading_history', label: 'Trading History' },
    { id: 'analytics', label: 'Trade Analytics' },
    { id: 'wallets', label: 'Wallets Manager' },
        { id: 'leaderboards', label: 'Leaderboards' }
      ]
    },
    {
      groupName: "Resources & Knowledge",
      items: [
    { id: 'education', label: 'Education & AI' },
    { id: 'news', label: 'Latest News' },
        { id: 'value_proposition', label: 'Value Proposition' },
        { id: 'benefits', label: 'Key Benefits' }
      ]
    },
    {
      groupName: "Company Information",
      items: [
    { id: 'tech', label: 'Technical Stack' },
    { id: 'team', label: 'Team' },
        { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'token', label: 'Token Details' },
    { id: 'strategy', label: 'Go-to-Market' },
        { id: 'partners', label: 'Strategic Partners' },
    { id: 'security', label: 'Security Center' }
      ]
    }
  ];
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev);
  };
  
  // Target Customers content
  const renderTargetCustomers = () => (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Target Customers</h2>
      
      <div className="mb-6">
        <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#444444] mb-6">
          <p className="text-sm font-medium text-[#E0E0E0]">
            DexPal serves four primary customer segments across the decentralized trading ecosystem.
          </p>
                </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { 
              title: "Traders", 
              count: "126.5M+", 
              color: "blue",
              percent: 85
            },
            { 
              title: "DEXs", 
              count: "100+", 
              color: "green",
              percent: 70 
            },
            { 
              title: "Strategic Partners", 
              count: "20+", 
              color: "purple",
              percent: 40
            },
            { 
              title: "Institutional", 
              count: "15+", 
              color: "indigo",
              percent: 25
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#2A2A2A] p-4 rounded-lg border border-[#444444] hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => document.getElementById(`customer-${index}`).scrollIntoView({ behavior: 'smooth' })}
            >
              <h3 className="font-medium text-[#B47AEA] mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.count}</p>
              <div className="w-full bg-[#333333] rounded-full h-2.5 mt-2">
                <div className="bg-[#B47AEA] h-2.5 rounded-full" style={{ width: `${stat.percent}%` }}></div>
                </div>
                </div>
          ))}
              </div>
              </div>
      
      <div className="space-y-6">
        <div id="customer-0" className="border border-[#444444] p-4 rounded-lg hover:shadow-md transition-shadow bg-[#2A2A2A]">
          <h3 className="font-medium text-[#B47AEA] mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
            </svg>
            Traders
          </h3>
          <div className="space-y-3">
            <div className="bg-[#333333] p-3 rounded-lg mb-3 cursor-pointer hover:bg-[#383838] transition-colors">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">DeFi users</span>
                <span className="text-sm bg-[#B47AEA]/20 text-[#B47AEA] px-2 py-0.5 rounded">6.5 million+</span>
            </div>
              <p className="text-sm mt-1">Initial focus on existing Perps DEX traders and crypto-native DeFi users who haven't yet traded perps. <span className="text-[#B47AEA]">(Low-hanging fruits)</span></p>
          </div>
            
            <div className="bg-[#333333] p-3 rounded-lg mb-3 cursor-pointer hover:bg-[#383838] transition-colors">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">CEX users</span>
                <span className="text-sm bg-[#B47AEA]/20 text-[#B47AEA] px-2 py-0.5 rounded">100 million+</span>
              </div>
              <p className="text-sm mt-1">Primary audience with little to no experience using dApps, having only traded on CEXs.</p>
              </div>
            
            <div className="bg-[#333333] p-3 rounded-lg mb-3 cursor-pointer hover:bg-[#383838] transition-colors">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">Forex traders</span>
                <span className="text-sm bg-[#B47AEA]/20 text-[#B47AEA] px-2 py-0.5 rounded">20 million+</span>
              </div>
              <p className="text-sm mt-1">Secondary audience targeting forex traders currently using traditional FX exchanges.</p>
            </div>
              </div>
            
          <div className="mt-3">
            <h4 className="text-sm font-medium text-white mb-2">Revenue Streams:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">DEX referral fees</span>
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Aggregator fees</span>
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Premium features</span>
              </div>
              </div>
            </div>
            
        <div id="customer-1" className="border border-[#444444] p-4 rounded-lg hover:shadow-md transition-shadow bg-[#2A2A2A]">
          <h3 className="font-medium text-[#B47AEA] mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            DEXs
          </h3>
          <p className="mb-3">Hundreds of different Perps DEXs across major blockchain networks. Currently supporting only Perps, with plans to expand into options and spot trading.</p>
          
          <div className="overflow-x-auto mb-3">
            <table className="min-w-full divide-y divide-[#444444]">
              <thead className="bg-[#333333]">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">DEX</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Status</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Grant</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#444444] bg-[#2A2A2A]">
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 text-sm">Vela Exchange</td>
                  <td className="px-3 py-2 text-sm"><span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">Paid</span></td>
                  <td className="px-3 py-2 text-sm">$10,000</td>
                    </tr>
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 text-sm">Helix</td>
                  <td className="px-3 py-2 text-sm"><span className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-0.5 rounded">Pipeline</span></td>
                  <td className="px-3 py-2 text-sm">$50,000</td>
                </tr>
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 text-sm">Aark</td>
                  <td className="px-3 py-2 text-sm"><span className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-0.5 rounded">Pipeline</span></td>
                  <td className="px-3 py-2 text-sm">$10,000</td>
                    </tr>
                  </tbody>
                </table>
          </div>
            
          <div className="mt-3">
            <h4 className="text-sm font-medium text-white mb-2">Revenue Streams:</h4>
            <div className="grid grid-cols-2 gap-2">
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Integration & maintenance fees</span>
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Custom APIs & data insights</span>
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Advertising packages</span>
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Custom work (subgraphs, etc.)</span>
            </div>
              </div>
            </div>
            
        <div id="customer-2" className="border border-[#444444] p-4 rounded-lg hover:shadow-md transition-shadow bg-[#2A2A2A]">
          <h3 className="font-medium text-[#B47AEA] mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
            </svg>
            Strategic & Advertising Partners
          </h3>
          <p className="mb-3">Blockchain networks, dApps, wallets, bridges, fiat on-ramps, and other strategic and advertising partners in the Web 3 space.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="bg-[#333333] p-3 rounded-lg flex items-center">
              <div className="flex-shrink-0 mr-3">
                <svg className="w-8 h-8 text-[#B47AEA]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7H7v6h6V7z" />
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                </svg>
          </div>
              <div>
                <h4 className="font-medium text-white">LayerZero</h4>
                <p className="text-xs text-[#AAAAAA]">Bridge partner for seamless cross-chain experience</p>
            </div>
                </div>
            <div className="bg-[#333333] p-3 rounded-lg flex items-center">
              <div className="flex-shrink-0 mr-3">
                <svg className="w-8 h-8 text-[#B47AEA]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                </div>
              <div>
                <h4 className="font-medium text-white">Fun.xyz</h4>
                <p className="text-xs text-[#AAAAAA]">Fiat on-ramp with revenue share model</p>
                </div>
              </div>
            </div>
            
          <div className="mt-3">
            <h4 className="text-sm font-medium text-white mb-2">Revenue Streams:</h4>
            <div className="grid grid-cols-2 gap-2">
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Performance-based grants</span>
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">User analytics & behavior</span>
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Revenue share partnerships</span>
              <span className="bg-[#333333] text-sm p-2 rounded text-[#AAAAAA]">Advertising partnerships</span>
                </div>
              </div>
            </div>
            
        <div id="customer-3" className="border p-4 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-medium text-indigo-700 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            Institutional & Enterprise
          </h3>
          <p className="mb-3">Hedge funds, market makers, research firms, and other enterprise customers interested in our APIs.</p>
          
          <div className="bg-indigo-50 p-4 rounded-lg mb-3">
            <h4 className="font-medium mb-2">API Services</h4>
            <p className="text-sm">Benefit from our APIs that provide data from multiple DEXs through a single API, eliminating the need to build custom APIs for each DEX.</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="bg-white p-2 rounded shadow-sm text-sm">
                <div className="font-medium">Standardized Data</div>
                <div className="text-xs text-gray-600">Uniform format across DEXs</div>
                </div>
              <div className="bg-white p-2 rounded shadow-sm text-sm">
                <div className="font-medium">Custom Filters</div>
                <div className="text-xs text-gray-600">Tailored data queries</div>
                </div>
                </div>
            </div>
            
          <div className="mt-3">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Revenue Streams:</h4>
            <div className="grid grid-cols-2 gap-2">
              <span className="bg-gray-100 text-sm p-2 rounded">API SaaS monthly packages</span>
              <span className="bg-gray-100 text-sm p-2 rounded">Pay-per-use API access</span>
              <span className="bg-gray-100 text-sm p-2 rounded">Custom API requests</span>
              <span className="bg-gray-100 text-sm p-2 rounded">Enterprise solutions</span>
              </div>
            </div>
        </div>
            </div>
          </div>
        );
  
  // Value Proposition content
  const renderValueProposition = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Value Proposition</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <h3 className="text-lg font-semibold mb-2 text-[#B47AEA]">Core Value Statement</h3>
        <p className="text-sm">
          DexPal solves the user experience and acquisition challenges for both traders and DEX platforms in the rapidly growing perpetual futures market.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#2A2A2A] p-5 rounded-lg border border-[#444444]">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">For Traders</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Unified Experience:</span> Trade across multiple DEXs from a single, intuitive dashboard</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Comprehensive Analytics:</span> Track performance across all DEXs with detailed metrics</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Information Advantage:</span> Real-time data and market insights in one place</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Rewards Maximization:</span> Optimize participation in incentive programs across platforms</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Decision Support:</span> Tools and data to improve trading decisions</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#2A2A2A] p-5 rounded-lg border border-[#444444]">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">For DEX Platforms</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">User Acquisition:</span> Tap into DexPal's growing user base of active traders</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Retention Driver:</span> Enhanced user experience leads to higher retention rates</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Reduced Costs:</span> Lower marketing and user acquisition expenses</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Incentive Program Management:</span> More effective trader reward distribution</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-medium text-white">Visibility:</span> Increased platform visibility in a crowded market</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Key Benefits content
  const renderBenefits = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Features & Benefits</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal delivers a comprehensive suite of features designed to solve real problems for both traders and DEX platforms.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#2A2A2A] rounded-lg shadow-sm overflow-hidden border border-[#444444]">
          <div className="bg-[#B47AEA] p-3">
            <h3 className="font-semibold text-white">Unified Dashboard</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white text-sm">Features</p>
                <ul className="pl-5 list-disc text-xs space-y-1 mt-1 text-[#AAAAAA]">
                  <li>Single login for multiple DEXs</li>
                  <li>Customizable layout and widgets</li>
                  <li>Cross-DEX search functionality</li>
                  <li>Real-time data synchronization</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-sm">Benefits</p>
                <ul className="pl-5 list-disc text-xs space-y-1 mt-1 text-[#AAAAAA]">
                  <li>Reduced tab-switching and mental load</li>
                  <li>Improved trading efficiency</li>
                  <li>Comprehensive market view</li>
                  <li>Time savings and reduced friction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2A2A2A] rounded-lg shadow-sm overflow-hidden border border-[#444444]">
          <div className="bg-[#B47AEA] p-3">
            <h3 className="font-semibold text-white">Performance Analytics</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white text-sm">Features</p>
                <ul className="pl-5 list-disc text-xs space-y-1 mt-1 text-[#AAAAAA]">
                  <li>Comprehensive P&L tracking</li>
                  <li>Trade journaling and analysis</li>
                  <li>Historical performance metrics</li>
                  <li>Position heatmaps and patterns</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-sm">Benefits</p>
                <ul className="pl-5 list-disc text-xs space-y-1 mt-1 text-[#AAAAAA]">
                  <li>Performance optimization</li>
                  <li>Improved decision-making</li>
                  <li>Pattern recognition</li>
                  <li>Risk management insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2A2A2A] rounded-lg shadow-sm overflow-hidden border border-[#444444]">
          <div className="bg-[#B47AEA] p-3">
            <h3 className="font-semibold text-white">Rewards Hub</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white text-sm">Features</p>
                <ul className="pl-5 list-disc text-xs space-y-1 mt-1 text-[#AAAAAA]">
                  <li>Trading competitions tracking</li>
                  <li>Unified rewards dashboard</li>
                  <li>Points program with tiers</li>
                  <li>Exclusive benefits access</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-sm">Benefits</p>
                <ul className="pl-5 list-disc text-xs space-y-1 mt-1 text-[#AAAAAA]">
                  <li>Maximized incentive earnings</li>
                  <li>Enhanced trading returns</li>
                  <li>Long-term platform loyalty</li>
                  <li>Community belonging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2A2A2A] p-5 rounded-lg border border-[#444444]">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">For Individual Traders</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#B47AEA]">1</span>
              </div>
              <div>
                <p className="font-medium text-white">Simplified Multi-DEX Experience</p>
                <p className="text-sm text-[#AAAAAA]">Trade across multiple DEXs without the complexity of managing separate interfaces</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#B47AEA]">2</span>
              </div>
              <div>
                <p className="font-medium text-white">Performance Optimization</p>
                <p className="text-sm text-[#AAAAAA]">Identify winning strategies and underperforming habits with detailed analytics</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#B47AEA]">3</span>
              </div>
              <div>
                <p className="font-medium text-white">Maximized Rewards</p>
                <p className="text-sm text-[#AAAAAA]">Never miss trading competitions or incentive programs across any integrated DEX</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2A2A2A] p-5 rounded-lg border border-[#444444]">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">For DEX Platforms</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#B47AEA]">1</span>
              </div>
              <div>
                <p className="font-medium text-white">User Acquisition</p>
                <p className="text-sm text-[#AAAAAA]">Connect with DexPal's growing user base to drive new platform adoption</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#B47AEA]">2</span>
              </div>
              <div>
                <p className="font-medium text-white">Enhanced Visibility</p>
                <p className="text-sm text-[#AAAAAA]">Stand out in a crowded market through featured listings and integration</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#B47AEA]">3</span>
              </div>
              <div>
                <p className="font-medium text-white">Cost-Effective Marketing</p>
                <p className="text-sm text-[#AAAAAA]">Lower user acquisition costs while increasing conversion rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Product Features - Custom Dashboard content
  const renderFeatures = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Custom Dashboard</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal's custom dashboard provides traders with a comprehensive overview of their trading activities across multiple DEXs, all in one place.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Dashboard Features</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Customizable Widgets</p>
                <p className="text-sm text-[#AAAAAA]">Arrange and resize widgets to create your ideal trading dashboard layout</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Cross-DEX Overview</p>
                <p className="text-sm text-[#AAAAAA]">Monitor positions, orders, and P&L across all connected DEX platforms</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Real-time Price Alerts</p>
                <p className="text-sm text-[#AAAAAA]">Set custom alerts for price movements, liquidation risks, and funding rates</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Multi-Wallet Support</p>
                <p className="text-sm text-[#AAAAAA]">Connect and monitor multiple wallets across different networks</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Available Widgets</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#333333] p-3 rounded-lg hover:bg-[#444444] transition-colors">
              <h4 className="font-medium text-white text-sm mb-1">Position Overview</h4>
              <p className="text-xs text-[#AAAAAA]">View all open positions with key metrics</p>
            </div>
            <div className="bg-[#333333] p-3 rounded-lg hover:bg-[#444444] transition-colors">
              <h4 className="font-medium text-white text-sm mb-1">Market Overview</h4>
              <p className="text-xs text-[#AAAAAA]">Top gainers, losers, and volume leaders</p>
            </div>
            <div className="bg-[#333333] p-3 rounded-lg hover:bg-[#444444] transition-colors">
              <h4 className="font-medium text-white text-sm mb-1">P&L Tracker</h4>
              <p className="text-xs text-[#AAAAAA]">Daily, weekly, and monthly performance</p>
            </div>
            <div className="bg-[#333333] p-3 rounded-lg hover:bg-[#444444] transition-colors">
              <h4 className="font-medium text-white text-sm mb-1">Rewards Monitor</h4>
              <p className="text-xs text-[#AAAAAA]">Active competitions and incentives</p>
            </div>
            <div className="bg-[#333333] p-3 rounded-lg hover:bg-[#444444] transition-colors">
              <h4 className="font-medium text-white text-sm mb-1">Watchlist</h4>
              <p className="text-xs text-[#AAAAAA]">Customizable asset tracking</p>
            </div>
            <div className="bg-[#333333] p-3 rounded-lg hover:bg-[#444444] transition-colors">
              <h4 className="font-medium text-white text-sm mb-1">News Feed</h4>
              <p className="text-xs text-[#AAAAAA]">DEX-specific announcements and updates</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Dashboard Presets</h3>
          <p className="text-sm mb-4">Choose from preset dashboard configurations or create your own custom layout:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#333333] p-4 rounded-lg border border-[#444444] hover:border-[#B47AEA] transition-colors">
              <h4 className="text-white font-medium mb-2">Trader View</h4>
              <ul className="text-xs space-y-1 text-[#AAAAAA]">
                <li>• Position Overview</li>
                <li>• P&L Tracker</li>
                <li>• Market Overview</li>
                <li>• Quick Trade Widget</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-[#444444]">
                <p className="text-xs text-[#B47AEA]">Most popular configuration</p>
              </div>
            </div>
            
            <div className="bg-[#333333] p-4 rounded-lg border border-[#444444] hover:border-[#B47AEA] transition-colors">
              <h4 className="text-white font-medium mb-2">Data Analyst</h4>
              <ul className="text-xs space-y-1 text-[#AAAAAA]">
                <li>• Advanced Charts</li>
                <li>• Volume Analysis</li>
                <li>• Historical Performance</li>
                <li>• Market Correlations</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-[#444444]">
                <p className="text-xs text-[#B47AEA]">For data-driven traders</p>
              </div>
            </div>
            
            <div className="bg-[#333333] p-4 rounded-lg border border-[#444444] hover:border-[#B47AEA] transition-colors">
              <h4 className="text-white font-medium mb-2">DEX Explorer</h4>
              <ul className="text-xs space-y-1 text-[#AAAAAA]">
                <li>• DEX Comparison</li>
                <li>• Funding Rate Monitor</li>
                <li>• Rewards Overview</li>
                <li>• DEX News Feed</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-[#444444]">
                <p className="text-xs text-[#B47AEA]">For opportunity hunters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Integration Capabilities</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#444444]">
              <thead className="bg-[#333333]">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">DEX</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Position Tracking</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Trading History</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Direct Trading</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-[#2A2A2A] divide-y divide-[#444444]">
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">GMX</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">Available</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">Available</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-0.5 rounded">Coming Soon</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-[#B47AEA]/20 text-[#B47AEA] text-xs px-2 py-0.5 rounded">Live</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">Hyperliquid</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">Available</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">Available</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-0.5 rounded">Coming Soon</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-[#B47AEA]/20 text-[#B47AEA] text-xs px-2 py-0.5 rounded">Live</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">Kwenta</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">Available</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-0.5 rounded">In Development</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-0.5 rounded">Planned</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-0.5 rounded">Beta</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">dYdX</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">Available</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">Available</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-0.5 rounded">Coming Soon</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <span className="bg-[#B47AEA]/20 text-[#B47AEA] text-xs px-2 py-0.5 rounded">Live</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-xs text-[#AAAAAA]">
            <p>* New DEX integrations are added regularly based on user demand and partnership opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Pair Screener content
  const renderPairScreener = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Pair Screener</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal's Pair Screener allows traders to easily discover and compare trading pairs across multiple DEXs with powerful filtering and search capabilities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Key Features</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Cross-DEX Search</p>
                <p className="text-sm text-[#AAAAAA]">Find the same trading pair across all supported DEXs to compare pricing and liquidity</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Advanced Filters</p>
                <p className="text-sm text-[#AAAAAA]">Filter by volume, price change, funding rates, liquidity, and more</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Market Anomalies</p>
                <p className="text-sm text-[#AAAAAA]">Identify pricing discrepancies and arbitrage opportunities across DEXs</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Custom Watchlists</p>
                <p className="text-sm text-[#AAAAAA]">Create and save personalized lists of pairs you're interested in</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Screener Types</h3>
          <div className="space-y-4">
            <div className="bg-[#333333] p-3 rounded-lg">
              <h4 className="font-medium text-white text-sm mb-1">Volatility Screener</h4>
              <p className="text-xs text-[#AAAAAA]">Find the most volatile pairs for potential trading opportunities</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <span className="bg-[#444444] text-xs p-1 rounded text-center">24h Change</span>
                <span className="bg-[#444444] text-xs p-1 rounded text-center">Volatility Index</span>
              </div>
            </div>
            <div className="bg-[#333333] p-3 rounded-lg">
              <h4 className="font-medium text-white text-sm mb-1">Funding Rate Screener</h4>
              <p className="text-xs text-[#AAAAAA]">Identify pairs with attractive funding rates for potential income</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <span className="bg-[#444444] text-xs p-1 rounded text-center">Current Rate</span>
                <span className="bg-[#444444] text-xs p-1 rounded text-center">Historical Average</span>
              </div>
            </div>
            <div className="bg-[#333333] p-3 rounded-lg">
              <h4 className="font-medium text-white text-sm mb-1">Liquidity Screener</h4>
              <p className="text-xs text-[#AAAAAA]">Find pairs with highest liquidity for reduced slippage</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <span className="bg-[#444444] text-xs p-1 rounded text-center">Total Liquidity</span>
                <span className="bg-[#444444] text-xs p-1 rounded text-center">Depth Analysis</span>
              </div>
            </div>
            <div className="bg-[#333333] p-3 rounded-lg">
              <h4 className="font-medium text-white text-sm mb-1">Volume Screener</h4>
              <p className="text-xs text-[#AAAAAA]">Discover pairs with highest trading volume and activity</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <span className="bg-[#444444] text-xs p-1 rounded text-center">24h Volume</span>
                <span className="bg-[#444444] text-xs p-1 rounded text-center">7d Trend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Sample Pair Screener</h3>
          
          <div className="mb-4 flex space-x-3 bg-[#333333] p-2 rounded-lg">
            <input type="text" placeholder="Search pairs..." className="bg-[#444444] text-white px-3 py-1 rounded flex-grow text-sm focus:outline-none focus:ring-1 focus:ring-[#B47AEA]" />
            <select className="bg-[#444444] text-white px-2 py-1 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#B47AEA]">
              <option>All DEXs</option>
              <option>GMX</option>
              <option>Hyperliquid</option>
              <option>dYdX</option>
            </select>
            <button className="bg-[#B47AEA] text-white px-3 py-1 rounded text-sm hover:bg-[#A35DD3]">Filter</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#444444]">
              <thead className="bg-[#333333]">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Pair</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">DEX</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Price</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">24h Chg</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Funding</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Volume</th>
                </tr>
              </thead>
              <tbody className="bg-[#2A2A2A] divide-y divide-[#444444]">
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">BTC-USD</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">GMX</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">$63,245</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-green-400">+2.4%</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">0.01%</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">$482M</td>
                </tr>
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">ETH-USD</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">dYdX</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">$3,142</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-green-400">+1.7%</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">0.007%</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">$312M</td>
                </tr>
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">SOL-USD</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">Hyperliquid</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">$145.32</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-red-400">-0.8%</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">0.012%</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">$98M</td>
                </tr>
                <tr className="hover:bg-[#383838]">
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">AVAX-USD</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">GMX</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">$28.76</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-green-400">+4.2%</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">0.015%</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">$46M</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div className="text-xs text-[#AAAAAA]">
              Showing 4 of 125 pairs
            </div>
            <div className="flex space-x-2">
              <button className="bg-[#333333] px-2 py-1 rounded text-sm hover:bg-[#444444]">Previous</button>
              <button className="bg-[#333333] px-2 py-1 rounded text-sm hover:bg-[#444444]">Next</button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Coming Soon</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-[#E0E0E0]">AI-powered pair suggestions based on your trading history and preferences</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-[#E0E0E0]">Community sentiment indicators showing bullish/bearish signals</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-[#E0E0E0]">One-click trading directly from the screener interface</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Strategic Partners content
  const renderPartners = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Partnerships & Integrations</h2>
      
      <div className="flex mb-4 space-x-4 bg-[#2A2A2A] p-3 rounded-lg overflow-x-auto">
        <button 
          onClick={() => setSelectedPartner('all')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedPartner === 'all' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          All Partners
        </button>
        <button 
          onClick={() => setSelectedPartner('dexs')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedPartner === 'dexs' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          DEX Partners
        </button>
        <button 
          onClick={() => setSelectedPartner('technology')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedPartner === 'technology' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          Technology
        </button>
        <button 
          onClick={() => setSelectedPartner('communities')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedPartner === 'communities' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          Communities
        </button>
        <button 
          onClick={() => setSelectedPartner('investors')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedPartner === 'investors' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          Investors
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* DEX Partners */}
        {(selectedPartner === 'all' || selectedPartner === 'dexs') && (
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h3 className="font-semibold">DEX Partners</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">GMX</p>
                    <p className="text-xs text-[#AAAAAA]">Revenue share integration live</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Hyperliquid</p>
                    <p className="text-xs text-[#AAAAAA]">Revenue share integration live</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Kwenta</p>
                    <p className="text-xs text-[#AAAAAA]">Integration in development</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Polynomial</p>
                    <p className="text-xs text-[#AAAAAA]">Partnership discussions</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Level Finance</p>
                    <p className="text-xs text-[#AAAAAA]">Partnership discussions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Technology Partners */}
        {(selectedPartner === 'all' || selectedPartner === 'technology') && (
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h3 className="font-semibold">Technology Partners</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Gelato</p>
                    <p className="text-xs text-[#AAAAAA]">Web3 automation integration</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">The Graph</p>
                    <p className="text-xs text-[#AAAAAA]">Data indexing solution</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Privy</p>
                    <p className="text-xs text-[#AAAAAA]">Auth & wallet connection</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Chainlink</p>
                    <p className="text-xs text-[#AAAAAA]">Oracle price feeds</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Community Partners */}
        {(selectedPartner === 'all' || selectedPartner === 'communities') && (
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h3 className="font-semibold">Community Partners</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Prop House</p>
                    <p className="text-xs text-[#AAAAAA]">DexPal community grants</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Trader Dao</p>
                    <p className="text-xs text-[#AAAAAA]">Educational partnership</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <div>
                    <p className="font-medium text-white">Perp Terminal</p>
                    <p className="text-xs text-[#AAAAAA]">Co-marketing events</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
  // Overview content
  const renderOverview = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">DexPal Overview</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <h3 className="text-lg font-semibold mb-2 text-[#B47AEA]">Mission Statement</h3>
        <p className="text-sm">
          DexPal's mission is to help onboard and guide a new generation of traders to disrupt the multi-trillion dollar crypto derivatives market towards a more decentralized future.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Core Value Proposition</h3>
          <p className="mb-3 text-sm">
            DexPal addresses critical inefficiencies in the current decentralized perpetual futures market:
          </p>
          <ul className="space-y-2 text-sm pl-5 list-disc">
            <li><span className="font-medium text-white">Data Fragmentation:</span> DEX traders must navigate multiple interfaces to access comprehensive market data</li>
            <li><span className="font-medium text-white">Limited Analytics:</span> Current platforms offer insufficient visualization and analysis tools</li>
            <li><span className="font-medium text-white">Absent Reward Structures:</span> Existing DEXs capture value from users without sufficient value return</li>
          </ul>
          <p className="mt-3 text-sm">
            As a unified data terminal and rewards hub, DexPal aggregates information across multiple DEXs and chains while creating a sustainable economic model that redistributes value to platform users.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Market Opportunity</h3>
          <p className="mb-3 text-sm">
            The crypto derivatives market presents a massive opportunity:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#444444] text-sm border border-[#444444]">
              <thead className="bg-[#2A2A2A]">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Time Period</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Revenue Projection</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Trading Volume</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Active Users</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-[#AAAAAA] uppercase">Integrated DEXs</th>
                </tr>
              </thead>
              <tbody className="bg-[#1E1E1E] divide-y divide-[#444444]">
                <tr>
                  <td className="px-3 py-2">2025</td>
                  <td className="px-3 py-2">$3 Million</td>
                  <td className="px-3 py-2">$16 Billion</td>
                  <td className="px-3 py-2">13,500+</td>
                  <td className="px-3 py-2">30</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">2026</td>
                  <td className="px-3 py-2">$15 Million</td>
                  <td className="px-3 py-2">$88 Billion</td>
                  <td className="px-3 py-2">30,000+</td>
                  <td className="px-3 py-2">40</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">2027</td>
                  <td className="px-3 py-2">$55 Million</td>
                  <td className="px-3 py-2">$283 Billion</td>
                  <td className="px-3 py-2">100,000+</td>
                  <td className="px-3 py-2">80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Product Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Current Build (V1)</h4>
            </div>
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li>Dashboard with key performance metrics</li>
                <li>DEX profiles with comprehensive data</li>
                <li>Pair screener across multiple DEXs</li>
                <li>Trading competitions and incentives tracker</li>
                <li>Latest news from supported DEXs</li>
                <li>Earn opportunities comparison</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Coming Soon Features</h4>
            </div>
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li>Trading history with CSV export</li>
                <li>Trading analytics and performance metrics</li>
                <li>Leaderboards across multiple DEXs</li>
                <li>Multi-wallet manager and tracking</li>
                <li>Open positions and limit orders aggregation</li>
                <li>DexPal points rewards program</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Future Roadmap</h4>
            </div>
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li>Paper trading simulator</li>
                <li>AI trading assistant</li>
                <li>DEX aggregator for direct trading</li>
                <li>Mobile application</li>
                <li>Copy trading functionality</li>
                <li>Fiat on-ramp integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Technology Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
            <h4 className="font-medium text-white mb-2">Frontend</h4>
            <ul className="space-y-1 text-sm">
              <li>Next.js 14 with TypeScript</li>
              <li>shadcn/ui components and TailwindCSS for styling</li>
              <li>Recharts for data visualization</li>
              <li>RainbowKit for Web3 wallet integration</li>
              <li>Context providers for user data and DEX information</li>
            </ul>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
            <h4 className="font-medium text-white mb-2">Backend & APIs</h4>
            <ul className="space-y-1 text-sm">
              <li>Rust-based API server using Axum framework</li>
              <li>AWS Lambda for serverless execution</li>
              <li>DynamoDB for pair volume data storage</li>
              <li>Supabase for user data and DEX information</li>
              <li>Modular DEX adapters for standardizing data</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="bg-[#2A2A2A] p-3 rounded-lg border border-[#444444] max-w-2xl">
          <h4 className="font-medium text-center text-[#B47AEA] mb-1">MVP Demo Available</h4>
          <p className="text-xs text-center text-[#AAAAAA]">
            A working demo of DexPal is available at <span className="font-mono">https://dexpal.vercel.app/</span> (access password: eclipse)
          </p>
        </div>
      </div>
    </div>
  );

  // Customer Segments content
  const renderCustomerSegments = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Target Customer Segments</h2>
      
      <div className="flex mb-4 space-x-4 bg-[#2A2A2A] p-3 rounded-lg overflow-x-auto">
        <button 
          onClick={() => setSelectedCustomerSegment('traders')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedCustomerSegment === 'traders' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          Traders
        </button>
        <button 
          onClick={() => setSelectedCustomerSegment('dexs')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedCustomerSegment === 'dexs' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          DEX Platforms
        </button>
        <button 
          onClick={() => setSelectedCustomerSegment('protocols')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedCustomerSegment === 'protocols' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          Crypto Protocols
        </button>
        <button 
          onClick={() => setSelectedCustomerSegment('advertisers')} 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${selectedCustomerSegment === 'advertisers' ? 'bg-[#B47AEA] text-white' : 'bg-[#333333] text-[#AAAAAA] hover:bg-[#444444]'}`}
        >
          Advertisers
        </button>
      </div>
      
      {selectedCustomerSegment === 'traders' && (
        <div className="bg-[#2A2A2A] p-5 rounded-lg border border-[#444444]">
          <h3 className="text-lg font-semibold mb-4 text-[#B47AEA]">Trader Demographics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium text-white mb-3">Primary User Types</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#B47AEA]">A</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Advanced Traders (40%)</p>
                    <p className="text-sm text-[#AAAAAA]">Experienced traders who use multiple DEXs and seek advanced analytics and portfolio tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#B47AEA]">M</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Mid-Level Traders (35%)</p>
                    <p className="text-sm text-[#AAAAAA]">Part-time traders who understand DEXs but want a better UX and consolidated view</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#B47AEA]">N</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">New-to-DEX Traders (25%)</p>
                    <p className="text-sm text-[#AAAAAA]">CEX users transitioning to DEXs who need simplified onboarding and education</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-3">Key Demographics</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Age Range:</span>
                  <span className="font-medium text-white">25-45</span>
                </li>
                <li className="flex justify-between">
                  <span>Gender Split:</span>
                  <span className="font-medium text-white">85% Male / 15% Female</span>
                </li>
                <li className="flex justify-between">
                  <span>Trading Frequency:</span>
                  <span className="font-medium text-white">3-15 trades weekly</span>
                </li>
                <li className="flex justify-between">
                  <span>Average Position Size:</span>
                  <span className="font-medium text-white">$1,000 - $25,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Leverage Used:</span>
                  <span className="font-medium text-white">2x - 10x typically</span>
                </li>
                <li className="flex justify-between">
                  <span>Top User Locations:</span>
                  <span className="font-medium text-white">SE Asia, Eastern Europe, Latin America</span>
                </li>
                <li className="flex justify-between">
                  <span>Technical Expertise:</span>
                  <span className="font-medium text-white">Intermediate to Advanced</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-3">User Pain Points Addressed</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#333333] p-3 rounded-lg">
                <p className="font-medium text-white mb-1">Complexity Management</p>
                <p className="text-xs text-[#AAAAAA]">Simplified interface to navigate many DEX platforms</p>
              </div>
              <div className="bg-[#333333] p-3 rounded-lg">
                <p className="font-medium text-white mb-1">Data Consolidation</p>
                <p className="text-xs text-[#AAAAAA]">Unified view of trading history and performance</p>
              </div>
              <div className="bg-[#333333] p-3 rounded-lg">
                <p className="font-medium text-white mb-1">Information Overload</p>
                <p className="text-xs text-[#AAAAAA]">Simplified market data and insights</p>
              </div>
              <div className="bg-[#333333] p-3 rounded-lg">
                <p className="font-medium text-white mb-1">Incentive Tracking</p>
                <p className="text-xs text-[#AAAAAA]">Monitoring trading competitions and rewards</p>
              </div>
              <div className="bg-[#333333] p-3 rounded-lg">
                <p className="font-medium text-white mb-1">Market Comparison</p>
                <p className="text-xs text-[#AAAAAA]">Easy cross-platform price and liquidity comparison</p>
              </div>
              <div className="bg-[#333333] p-3 rounded-lg">
                <p className="font-medium text-white mb-1">Learning Curve</p>
                <p className="text-xs text-[#AAAAAA]">Educational resources and simplified UX</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {selectedCustomerSegment === 'dexs' && (
        <div className="bg-[#2A2A2A] p-5 rounded-lg border border-[#444444]">
          <h3 className="text-lg font-semibold mb-4 text-[#B47AEA]">DEX Platform Partners</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium text-white mb-3">Platform Profile</h4>
              <ul className="space-y-2">
                <li>
                  <p className="text-white">Target DEXs:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-sm text-[#AAAAAA]">
                    <li>Established perpetual DEXs (GMX, Hyperliquid, etc.)</li>
                    <li>Growing mid-tier platforms (Kwenta, Polynomial)</li>
                    <li>Emerging new protocols with novel features</li>
                  </ul>
                </li>
                <li className="mt-3">
                  <p className="text-white">Key Pain Points:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-sm text-[#AAAAAA]">
                    <li>High cost of user acquisition </li>
                    <li>Trader retention challenges</li>
                    <li>Limited marketing resources</li>
                    <li>Competition from both CEX and other DEXs</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-3">Revenue Opportunities</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-[#333333] rounded-lg">
                  <p className="font-medium text-white">Affiliate Revenue</p>
                  <p className="text-[#AAAAAA] mt-1">20-30% of trading fees generated through DexPal</p>
                </div>
                <div className="p-3 bg-[#333333] rounded-lg">
                  <p className="font-medium text-white">Featured Listings</p>
                  <p className="text-[#AAAAAA] mt-1">Premium visibility in pair screener and analytics</p>
                </div>
                <div className="p-3 bg-[#333333] rounded-lg">
                  <p className="font-medium text-white">User Acquisition</p>
                  <p className="text-[#AAAAAA] mt-1">Dedicated onboarding programs for new users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Revenue content
  const renderRevenue = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Revenue Streams</h2>
      <p className="mb-4">DexPal implements a diversified approach to revenue generation through multiple channels.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#B47AEA] p-3 text-white">
            <h3 className="font-semibold">Affiliate Fee Structure</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium text-white">Revenue Share:</span> 20-30% of trading fees</li>
              <li><span className="font-medium text-white">Implementation:</span> API-level DEX integration</li>
              <li><span className="font-medium text-white">User Experience:</span> Transparent fee pass-through</li>
              <li><span className="font-medium text-white">Settlement:</span> Native tokens or stablecoins (T+1)</li>
            </ul>
          </div>
        </div>
            
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#B47AEA] p-3 text-white">
            <h3 className="font-semibold">Premium Subscriptions</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-white">Basic Tier</p>
                <p>Core functionality, free access</p>
              </div>
              <div>
                <p className="font-medium text-white">Advanced Tier</p>
                <p>Enhanced analytics, custom alerts, subscription model</p>
              </div>
              <div>
                <p className="font-medium text-white">Professional Tier</p>
                <p>Advanced APIs, data exports, subscription + usage</p>
              </div>
            </div>
          </div>
        </div>
            
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#B47AEA] p-3 text-white">
            <h3 className="font-semibold">Strategic Ad Monetization</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium text-white">Ad Inventory:</span> Non-intrusive dashboard placements</li>
              <li><span className="font-medium text-white">Advertiser Focus:</span> DEX partners and complementary services</li>
              <li><span className="font-medium text-white">Revenue Model:</span> CPM, CPC, and fixed-placement packages</li>
              <li><span className="font-medium text-white">User Controls:</span> Premium subscribers can opt out</li>
            </ul>
          </div>
        </div>
      </div>
            
      <div className="bg-[#2A2A2A] p-5 rounded-lg border border-[#444444]">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Revenue Flow Mechanics</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3">
              <span className="text-[#B47AEA] font-bold">1</span>
            </div>
            <div>
              <p className="font-medium text-white">Generation</p>
              <p className="text-sm text-[#AAAAAA]">Revenue accumulates through the three primary channels</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3">
              <span className="text-[#B47AEA] font-bold">2</span>
            </div>
            <div>
              <p className="font-medium text-white">Collection</p>
              <p className="text-sm text-[#AAAAAA]">Smart contracts aggregate revenue in designated treasury wallets</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3">
              <span className="text-[#B47AEA] font-bold">3</span>
            </div>
            <div>
              <p className="font-medium text-white">Allocation</p>
              <p className="text-sm text-[#AAAAAA]">Revenue is algorithmically distributed according to the value share framework</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#B47AEA]/20 flex items-center justify-center mr-3">
              <span className="text-[#B47AEA] font-bold">4</span>
            </div>
            <div>
              <p className="font-medium text-white">Distribution</p>
              <p className="text-sm text-[#AAAAAA]">Various mechanisms deliver value to token holders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Analytics content
  const renderAnalytics = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Trade Analytics</h2>
      <p className="mb-4">DexPal provides comprehensive analytics to help traders understand their performance and optimize their trading strategies.</p>
            
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-[#B47AEA]">Performance Metrics</h3>
          <div className="flex space-x-2">
            {['1w', '1m', '3m', 'all'].map(period => (
              <button
                key={period}
                onClick={() => setAnalyticsTimeframe(period)}
                className={`px-2 py-1 text-xs rounded ${
                  analyticsTimeframe === period 
                    ? 'bg-[#B47AEA] text-white' 
                    : 'bg-[#2A2A2A] text-[#AAAAAA] hover:bg-[#444444]'
                }`}
              >
                {period}
              </button>
            ))}
                </div>
                </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
            <h4 className="font-medium text-white mb-2">Daily P&L</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userGrowthData} className="text-[#AAAAAA]">
                  <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
                  <XAxis dataKey="month" stroke="#AAAAAA" />
                  <YAxis stroke="#AAAAAA" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#1E1E1E", borderColor: "#444444", color: "#E0E0E0" }}
                    labelStyle={{ color: "#E0E0E0" }}
                    itemStyle={{ color: "#E0E0E0" }}
                  />
                  <Bar dataKey="users" fill="#B47AEA" name="P&L ($)" />
                </BarChart>
              </ResponsiveContainer>
                </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
            <h4 className="font-medium text-white mb-2">Cumulative P&L</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={volumeData} className="text-[#AAAAAA]">
                  <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
                  <XAxis dataKey="name" stroke="#AAAAAA" />
                  <YAxis stroke="#AAAAAA" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#1E1E1E", borderColor: "#444444", color: "#E0E0E0" }}
                    labelStyle={{ color: "#E0E0E0" }}
                    itemStyle={{ color: "#E0E0E0" }}
                  />
                  <Line type="monotone" dataKey="Gains" stroke="#B47AEA" name="Cumulative P&L" />
                </LineChart>
              </ResponsiveContainer>
            </div>
                </div>
              </div>
            </div>
            
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <h4 className="font-medium text-white mb-1">Total Trades</h4>
          <p className="text-2xl font-bold text-white">142</p>
          <p className="text-xs text-[#AAAAAA]">Last 30 days</p>
        </div>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <h4 className="font-medium text-white mb-1">Win Rate</h4>
          <p className="text-2xl font-bold text-white">68.3%</p>
          <p className="text-xs text-[#AAAAAA]">Profitable trades</p>
        </div>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <h4 className="font-medium text-white mb-1">Avg. Leverage</h4>
          <p className="text-2xl font-bold text-white">4.2x</p>
          <p className="text-xs text-[#AAAAAA]">Across all positions</p>
        </div>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <h4 className="font-medium text-white mb-1">Fees Paid</h4>
          <p className="text-2xl font-bold text-white">$1,245</p>
          <p className="text-xs text-[#AAAAAA]">Trading + network fees</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <h4 className="font-medium text-white mb-2">Trading Breakdown by DEX</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dexComposition}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {dexComposition.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1E1E1E", borderColor: "#444444", color: "#E0E0E0" }}
                  labelStyle={{ color: "#E0E0E0" }}
                  itemStyle={{ color: "#E0E0E0" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <h4 className="font-medium text-white mb-2">Performance by Asset</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData} className="text-[#AAAAAA]">
                <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
                <XAxis dataKey="name" stroke="#AAAAAA" />
                <YAxis stroke="#AAAAAA" />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1E1E1E", borderColor: "#444444", color: "#E0E0E0" }}
                  labelStyle={{ color: "#E0E0E0" }}
                  itemStyle={{ color: "#E0E0E0" }}
                />
                <Legend wrapperStyle={{ color: "#AAAAAA" }} />
                <Bar dataKey="Gains" name="BTC" fill="#B47AEA" />
                <Bar dataKey="Vertex" name="ETH" fill="#00C49F" />
                <Bar dataKey="GMX" name="SOL" fill="#FFBB28" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

  // Company Information content
  const renderCompanyInfo = () => (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Company Information</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
              <p className="text-sm">
          DexPal is positioned as the premier data terminal and rewards hub for leverage trading across decentralized exchanges (DEXs), with a multi-faceted approach to revenue generation and value distribution.
              </p>
            </div>
            
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Core Mission</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <p className="mb-4">
            DexPal addresses critical inefficiencies in the current decentralized perpetual futures market through:
          </p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-white">Data Unification:</span> Aggregating fragmented data across DEXs</li>
            <li><span className="font-medium text-white">Enhanced Analytics:</span> Providing sophisticated visualization and analysis tools</li>
            <li><span className="font-medium text-white">Value Redistribution:</span> Creating a sustainable economic model that returns value to platform users</li>
          </ul>
                </div>
                </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Company Structure</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Legal Entity:</span> Registered corporate entity with a focus on regulatory compliance</li>
              <li><span className="font-medium text-white">Team Size:</span> Core team of experienced builders with DeFi and CeFi backgrounds</li>
              <li><span className="font-medium text-white">Location:</span> Globally distributed team with primary operations based in a crypto-friendly jurisdiction</li>
              <li><span className="font-medium text-white">Funding Status:</span> Seed round of $2.5M raised out of $18.5M valuation</li>
            </ul>
                </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Tokenomics Model</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Token Type:</span> Native $DP utility token with governance features</li>
              <li><span className="font-medium text-white">Value Accrual:</span> Multiple mechanisms including buybacks, revenue sharing, and staking rewards</li>
              <li><span className="font-medium text-white">Distribution:</span> Balanced allocation across team, investors, community, and treasury</li>
              <li><span className="font-medium text-white">Initial Strategy:</span> Points-to-token transition with gradual rollout</li>
            </ul>
                </div>
              </div>
            </div>
            
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Leadership Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">CEO & Co-Founder</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Experienced DeFi entrepreneur with background in:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Previous successful Web3 ventures</li>
                <li>Trading infrastructure development</li>
                <li>Crypto-native product design</li>
                <li>Strategic partnerships in DeFi</li>
              </ul>
              </div>
            </div>
            
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">CTO & Co-Founder</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Technical lead with expertise in:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Trading system architecture</li>
                <li>Blockchain data infrastructure</li>
                <li>Rust and Next.js development</li>
                <li>DEX integration technology</li>
              </ul>
          </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Head of Business Development</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Strategic leader responsible for:</p>
                <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>DEX partnerships (15+ established)</li>
                <li>Blockchain foundation grants</li>
                <li>Revenue model execution</li>
                <li>Growth strategy implementation</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Market Positioning</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Current Market</h4>
                <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Derivatives Market: $100+ trillion annual volume</li>
                <li>DEX Market Share: Currently only 3% but growing</li>
                <li>Growth Trajectory: 500% increase since 2023</li>
                <li>Target Users: 126.5M+ potential users</li>
                </ul>
              </div>
            <div>
              <h4 className="font-medium text-white mb-2">Competitive Advantage</h4>
                <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>First comprehensive terminal for DEX traders</li>
                <li>Unified rewards system across platforms</li>
                <li>Strong strategic partnerships with DEXs</li>
                <li>Experienced team with trading background</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Funding & Investor Information</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="mb-4">
            <h4 className="font-medium text-white mb-2">Current Funding Round</h4>
            <div className="flex items-center">
              <div className="w-full bg-[#333333] rounded-full h-4">
                <div className="bg-[#B47AEA] h-4 rounded-full" style={{ width: '13.5%' }}></div>
              </div>
              <span className="ml-3 text-sm font-medium text-white">$2.5M / $18.5M</span>
            </div>
            <p className="text-xs text-[#AAAAAA] mt-1">Seed round at $18.5M valuation</p>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-2">Strategic Investors</h4>
            <p className="text-sm mb-2 text-[#E0E0E0]">Backed by industry-leading investors in the DeFi and trading infrastructure space, with participation from:</p>
            <ul className="space-y-1 text-sm text-[#AAAAAA]">
              <li>Crypto-native venture capital firms</li>
              <li>Angel investors with trading expertise</li>
              <li>Strategic DEX partners</li>
              <li>Web3 ecosystem funds</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Legal & Compliance</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <p className="text-sm mb-4 text-[#E0E0E0]">
            DexPal prioritizes regulatory compliance and operates with a focus on sustainable, legal growth in the evolving DeFi landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Approach</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Proactive regulatory engagement</li>
                <li>Transparent business practices</li>
                <li>Jurisdiction selection for crypto compliance</li>
                <li>Regular legal reviews of platform operations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Commitments</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>User data protection and privacy</li>
                <li>Transparent token model and distribution</li>
                <li>Clear terms of service for all users</li>
                <li>Ongoing compliance monitoring</li>
              </ul>
            </div>
          </div>
              </div>
            </div>
          </div>
        );

  // Tokenomics content
  const renderTokenomics = () => (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">DexPal Tokenomics</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal's tokenomics model is designed to align incentives between the platform, token holders, and users through revenue-driven token utility, sustainable emission schedules, and multiple value accrual mechanisms.
        </p>
            </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">$DP Token Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <h4 className="font-medium text-white mb-3">Token Fundamentals</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium text-white">Token Name:</span> DexPal Token</li>
              <li><span className="font-medium text-white">Symbol:</span> $DP</li>
              <li><span className="font-medium text-white">Token Type:</span> ERC-20 Utility & Governance</li>
              <li><span className="font-medium text-white">Initial Chains:</span> Ethereum + Layer 2 networks</li>
              <li><span className="font-medium text-white">Max Supply:</span> 1,000,000,000 (1 billion) tokens</li>
            </ul>
              </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <h4 className="font-medium text-white mb-3">Token Utility</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium text-white">Governance:</span> Voting on key platform parameters</li>
              <li><span className="font-medium text-white">Staking:</span> Earn share of platform revenues</li>
              <li><span className="font-medium text-white">Feature Access:</span> Premium features through token-gating</li>
              <li><span className="font-medium text-white">Fee Discounts:</span> Reduced platform fees for holders</li>
              <li><span className="font-medium text-white">Points Boost:</span> Enhanced points earning rate</li>
            </ul>
              </div>
              </div>
            </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Token Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Community', value: 40 },
                      { name: 'Team & Advisors', value: 20 },
                      { name: 'Investors', value: 15 },
                      { name: 'Treasury', value: 15 },
                      { name: 'Liquidity', value: 5 },
                      { name: 'Marketing', value: 5 }
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {COLORS.map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
                  </div>
                </div>
          
          <div className="col-span-2">
            <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5 h-full">
              <h4 className="font-medium text-white mb-2">Allocation Details</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-white">Community Rewards (40%)</span>
                    <span className="text-xs text-[#AAAAAA]">400,000,000 $DP</span>
                  </div>
                  <div className="w-full bg-[#333333] rounded-full h-2">
                    <div className="bg-[#B47AEA] h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                  <p className="text-xs text-[#AAAAAA] mt-1">Allocated to users, stakers, and liquidity providers over 5 years</p>
                  </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-white">Team & Advisors (20%)</span>
                    <span className="text-xs text-[#AAAAAA]">200,000,000 $DP</span>
                </div>
                  <div className="w-full bg-[#333333] rounded-full h-2">
                    <div className="bg-[#B47AEA] h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
                  <p className="text-xs text-[#AAAAAA] mt-1">4-year vesting with 1-year cliff</p>
            </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-white">Investors (15%)</span>
                    <span className="text-xs text-[#AAAAAA]">150,000,000 $DP</span>
          </div>
                  <div className="w-full bg-[#333333] rounded-full h-2">
                    <div className="bg-[#B47AEA] h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <p className="text-xs text-[#AAAAAA] mt-1">Strategic and seed investors with appropriate lockups</p>
                  </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-white">Treasury (15%)</span>
                    <span className="text-xs text-[#AAAAAA]">150,000,000 $DP</span>
                  </div>
                  <div className="w-full bg-[#333333] rounded-full h-2">
                    <div className="bg-[#B47AEA] h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <p className="text-xs text-[#AAAAAA] mt-1">Controlled by governance for ecosystem growth initiatives</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Value Accrual Mechanisms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Revenue Sharing</h4>
          </div>
            <div className="p-4">
              <p className="text-sm mb-3 text-[#E0E0E0]">A portion of all platform revenues is distributed to token stakers:</p>
                <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Affiliate fees from DEX trading</li>
                <li>Premium subscription payments</li>
                <li>Ad placement revenues</li>
                <li>Data API service fees</li>
                </ul>
              </div>
              </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Token Buybacks</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-3 text-[#E0E0E0]">Periodic token repurchasing from the open market:</p>
                <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>30% of quarterly profits allocated</li>
                <li>Purchased tokens partially burned</li>
                <li>Remainder goes to reward pools</li>
                <li>Transparent buyback schedule</li>
                </ul>
              </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Staking Rewards</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-3 text-[#E0E0E0]">Multi-tiered staking mechanism with benefits:</p>
                <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Revenue-based baseline APY</li>
                <li>Boosted rewards for long-term staking</li>
                <li>Enhanced platform features access</li>
                <li>Governance weight proportional to stake</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Points-to-Token Transition</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <p className="text-sm mb-4 text-[#E0E0E0]">
            DexPal will initially launch with a points system that will later be convertible to tokens, enabling regulatory compliance and gradual rollout:
          </p>
          
          <div className="relative">
            <div className="absolute h-full w-1 bg-[#333333] left-3 top-0"></div>
            <div className="space-y-6 relative">
              <div className="flex">
                <div className="flex-shrink-0 w-7">
                  <div className="w-7 h-7 rounded-full bg-[#B47AEA] text-white flex items-center justify-center font-bold text-sm">1</div>
                </div>
                <div className="ml-6">
                  <h4 className="text-sm font-medium text-white">Points Accumulation Phase</h4>
                  <p className="text-xs text-[#AAAAAA] mt-1">Users earn points through platform activity, referrals, and trading volume</p>
                </div>
            </div>
            
              <div className="flex">
                <div className="flex-shrink-0 w-7">
                  <div className="w-7 h-7 rounded-full bg-[#B47AEA] text-white flex items-center justify-center font-bold text-sm">2</div>
                </div>
                <div className="ml-6">
                  <h4 className="text-sm font-medium text-white">Non-Transferable Utility</h4>
                  <p className="text-xs text-[#AAAAAA] mt-1">Points enable premium features and tiers but cannot be transferred between users</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-7">
                  <div className="w-7 h-7 rounded-full bg-[#B47AEA] text-white flex items-center justify-center font-bold text-sm">3</div>
                </div>
                <div className="ml-6">
                  <h4 className="text-sm font-medium text-white">Token Genesis</h4>
                  <p className="text-xs text-[#AAAAAA] mt-1">Token launch with partial conversion of accumulated points at a predetermined ratio</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-7">
                  <div className="w-7 h-7 rounded-full bg-[#B47AEA] text-white flex items-center justify-center font-bold text-sm">4</div>
                </div>
                <div className="ml-6">
                  <h4 className="text-sm font-medium text-white">Full Tokenomics Implementation</h4>
                  <p className="text-xs text-[#AAAAAA] mt-1">Complete transition to token-based ecosystem with all mechanisms activated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Governance Model</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <p className="text-sm mb-4 text-[#E0E0E0]">
            $DP holders have governance rights proportional to their token holdings, allowing them to vote on:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Governance Parameters</h4>
                <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Revenue distribution mechanisms</li>
                <li>Fee structures and rates</li>
                <li>Platform feature prioritization</li>
                <li>Partnership approvals</li>
                <li>Treasury fund allocations</li>
                </ul>
              </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Voting Mechanism</h4>
                <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>1 token = 1 vote (base level)</li>
                <li>Staked tokens receive voting multiplier</li>
                <li>Proposal threshold: 1M tokens required</li>
                <li>Time-weighted voting power option</li>
                <li>On-chain execution of passed proposals</li>
                </ul>
              </div>
            </div>
              </div>
            </div>
          </div>
        );

  // Go-to-Market Strategy content is now in a separate component
  // Remove the local renderStrategy function
  
  // Market Statistics content
  const renderMarketStats = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Market Statistics</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          The crypto derivatives market represents a massive opportunity for DexPal, with DEX platforms capturing an increasing share of trading volume.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Market Size & Potential</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-4">
              <li>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white">Total Derivatives Volume (Annual)</span>
                  <span className="text-[#B47AEA] font-semibold">$97 Trillion</span>
                </div>
                <div className="w-full bg-[#333333] rounded-full h-2">
                  <div className="bg-[#B47AEA] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white">DEX Share of Total Volume</span>
                  <span className="text-[#B47AEA] font-semibold">5.2%</span>
                </div>
                <div className="w-full bg-[#333333] rounded-full h-2">
                  <div className="bg-[#B47AEA] h-2 rounded-full" style={{ width: '5.2%' }}></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white">DEX Perps Daily Volume</span>
                  <span className="text-[#B47AEA] font-semibold">$14 Billion</span>
                </div>
                <div className="w-full bg-[#333333] rounded-full h-2">
                  <div className="bg-[#B47AEA] h-2 rounded-full" style={{ width: '14%' }}></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white">DEX User Growth (YoY)</span>
                  <span className="text-[#B47AEA] font-semibold">+143%</span>
                </div>
                <div className="w-full bg-[#333333] rounded-full h-2">
                  <div className="bg-[#B47AEA] h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Market Trends</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><span className="font-medium text-white">500% Growth:</span> DEX perpetual futures volumes have grown 5x since early 2023</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><span className="font-medium text-white">User Migration:</span> Significant shift of traders moving from CEX to DEX platforms after FTX collapse</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><span className="font-medium text-white">Competition:</span> Rapid increase in the number of perps DEXs, from 12 in 2022 to over 45 today</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><span className="font-medium">Expansion:</span> Perpetual DEXs moving beyond major assets to support a broader range of trading pairs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><span className="font-medium">Retention:</span> DEX trader retention rates improving from 25% to over 40% in the past year</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
          </div>
        );

  // Education & AI content
  const renderEducation = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Education & AI</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal offers comprehensive educational resources and AI-powered tools to help traders improve their skills and make more informed decisions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Learning Resources</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Interactive Tutorials</p>
                <p className="text-sm text-[#AAAAAA]">Step-by-step guides for all experience levels on perpetual futures trading</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Video Library</p>
                <p className="text-sm text-[#AAAAAA]">Comprehensive collection of educational videos covering trading strategies and platform features</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">DEX-Specific Guides</p>
                <p className="text-sm text-[#AAAAAA]">Detailed guides for each supported DEX platform with unique features explained</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">AI Trading Assistant</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Market Analysis</p>
                <p className="text-sm text-[#AAAAAA]">AI-powered insights on market trends and potential opportunities</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Performance Insights</p>
                <p className="text-sm text-[#AAAAAA]">Personalized feedback on trading patterns and suggestions for improvement</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-[#B47AEA] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-white">Risk Management</p>
                <p className="text-sm text-[#AAAAAA]">AI tools to help optimize position sizing and manage risk exposure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-3">
            <svg className="h-6 w-6 text-[#B47AEA] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <h4 className="font-medium text-white">Beginner Courses</h4>
          </div>
          <p className="text-sm text-[#AAAAAA]">Fundamentals of perpetual futures and DEX trading for newcomers</p>
        </div>
        
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-3">
            <svg className="h-6 w-6 text-[#B47AEA] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <h4 className="font-medium text-white">Community Workshops</h4>
          </div>
          <p className="text-sm text-[#AAAAAA]">Live training sessions with experienced traders and community experts</p>
        </div>
        
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-3">
            <svg className="h-6 w-6 text-[#B47AEA] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <h4 className="font-medium text-white">Trading Journal</h4>
          </div>
          <p className="text-sm text-[#AAAAAA]">AI-assisted journaling to track and learn from your trading decisions</p>
        </div>
      </div>
      
      <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Coming Soon</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <svg className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-[#E0E0E0]">Trading simulator with AI-based feedback for risk-free practice</p>
          </div>
          <div className="flex items-start">
            <svg className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-[#E0E0E0]">Strategy builder tool for creating and backtesting custom trading strategies</p>
          </div>
          <div className="flex items-start">
            <svg className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-[#E0E0E0]">Personalized learning paths based on your experience level and goals</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Latest News content 
  const renderNews = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Latest News</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          Stay updated with the latest news and announcements from DexPal and our partner DEXs.
        </p>
      </div>
      
      <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-8 flex items-center justify-center">
        <p className="text-[#B47AEA] text-lg">Latest News page coming soon</p>
      </div>
    </div>
  );

  // Simple content rendering function with new content added
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'market':
        return renderMarketStats();
      case 'target_customers':
        return renderCustomerSegments();
      case 'value_proposition':
        return renderValueProposition();
      case 'benefits':
        return renderBenefits();
      case 'partners':
        return renderPartners();
      case 'partnerships':
        return renderPartners();
      case 'analytics':
        return renderAnalytics();
      case 'custom_dashboard':
        return renderFeatures();
      case 'pair_screener':
        return renderPairScreener();
      case 'education':
        return renderEducation();
      case 'news':
        return renderNews();
      case 'tech':
        return renderTechStack();
      case 'team':
        return renderTeam();
      case 'token':
        return renderToken();
      case 'security':
        return renderSecurity();
      case 'rewards':
        return (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
            <h2 className="text-xl font-bold mb-4 text-white">Rewards & Competitions</h2>
            <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
              <p className="text-sm">
                DexPal aggregates and tracks rewards and trading competitions across all integrated DEXs, helping you maximize your incentives.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-8 flex items-center justify-center">
              <p className="text-[#B47AEA] text-lg">Rewards & Competitions page coming soon</p>
            </div>
          </div>
        );
      case 'earn':
        return (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
            <h2 className="text-xl font-bold mb-4 text-white">Earn Opportunities</h2>
            <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
              <p className="text-sm">
                Discover and compare various earning opportunities across DEXs, including referral programs, liquidity provision, and more.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-8 flex items-center justify-center">
              <p className="text-[#B47AEA] text-lg">Earn Opportunities page coming soon</p>
            </div>
          </div>
        );
      case 'dex_profile':
        return (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
            <h2 className="text-xl font-bold mb-4 text-white">DEX Profiles</h2>
            <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
              <p className="text-sm">
                Comprehensive profiles of all integrated DEXs with key metrics, supported assets, and unique features.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-8 flex items-center justify-center">
              <p className="text-[#B47AEA] text-lg">DEX Profiles page coming soon</p>
            </div>
          </div>
        );
      case 'trading_history':
        return (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
            <h2 className="text-xl font-bold mb-4 text-white">Trading History</h2>
            <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
              <p className="text-sm">
                View and analyze your complete trading history across all connected DEXs in one unified interface.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-8 flex items-center justify-center">
              <p className="text-[#B47AEA] text-lg">Trading History page coming soon</p>
            </div>
          </div>
        );
      case 'wallets':
        return (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
            <h2 className="text-xl font-bold mb-4 text-white">Wallets Manager</h2>
            <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
              <p className="text-sm">
                Connect and manage multiple wallets across different networks, with portfolio tracking and asset management.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-8 flex items-center justify-center">
              <p className="text-[#B47AEA] text-lg">Wallets Manager page coming soon</p>
            </div>
          </div>
        );
      case 'leaderboards':
        return (
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
            <h2 className="text-xl font-bold mb-4 text-white">Leaderboards</h2>
            <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
              <p className="text-sm">
                Track the top-performing traders across different DEXs and trading competitions, with performance metrics and analytics.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-8 flex items-center justify-center">
              <p className="text-[#B47AEA] text-lg">Leaderboards page coming soon</p>
            </div>
          </div>
        );
      case 'business':
        return renderRevenue();
      case 'customer_segments':
        return renderCustomerSegments();
      case 'strategy':
        return <GoToMarketStrategy />;
      case 'company_info':
        return <CompanyInformation />;
      case 'tokenomics':
        return <Tokenomics />;
      default:
        return renderOverview();
    }
  };

  // Navigation items
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'customer-segments', label: 'Customer Segments' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'features', label: 'Features & Benefits' },
    { id: 'revenue', label: 'Revenue Streams' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'tokenomics', label: 'Tokenomics' },
  ];

  // Technical Stack content
  const renderTechStack = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Technical Stack</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal is built on a robust, scalable architecture designed to handle real-time data from multiple DEXs across various blockchain networks.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Frontend Technologies</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Framework:</span> Next.js with React for responsive, SEO-friendly interfaces</li>
              <li><span className="font-medium text-white">Styling:</span> Tailwind CSS for consistent design system</li>
              <li><span className="font-medium text-white">State Management:</span> React Context API with custom hooks</li>
              <li><span className="font-medium text-white">Data Visualization:</span> D3.js and TradingView charting libraries</li>
              <li><span className="font-medium text-white">Web3 Integration:</span> ethers.js and wagmi for blockchain connectivity</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Backend & Infrastructure</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">API Layer:</span> Node.js with Express for RESTful endpoints</li>
              <li><span className="font-medium text-white">Data Processing:</span> Rust services for high-performance data aggregation</li>
              <li><span className="font-medium text-white">Database:</span> TimescaleDB for time-series data, MongoDB for user profiles</li>
              <li><span className="font-medium text-white">Caching:</span> Redis for high-speed data caching and real-time updates</li>
              <li><span className="font-medium text-white">Deployment:</span> Docker containers with Kubernetes orchestration</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Blockchain Integration</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Supported Networks</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Ethereum, Arbitrum, Optimism</li>
                <li>Base, zkSync Era, Polygon</li>
                <li>Avalanche, BNB Chain, Solana</li>
                <li>Sei, Injective, Fuel</li>
                <li>Layer Zero cross-chain infrastructure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Data Sources</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Direct DEX API integrations</li>
                <li>Blockchain RPC node connections</li>
                <li>Subgraphs and indexers</li>
                <li>Oracle price feeds (Pyth Network)</li>
                <li>WebSocket connections for real-time updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Development Practices</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Code Quality</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Test-driven development methodology</li>
                <li>Comprehensive unit and integration tests</li>
                <li>CI/CD pipelines for automated testing</li>
                <li>Code reviews and pair programming</li>
                <li>Static analysis and linting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Security Measures</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Regular security audits</li>
                <li>Encrypted data storage and transmission</li>
                <li>Rate limiting and DDoS protection</li>
                <li>Secure wallet connectivity options</li>
                <li>Bug bounty program implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Team content
  const renderTeam = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Team</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal is built by an experienced team of developers, traders, and business leaders with deep expertise in DeFi, blockchain technology, and trading infrastructure.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Hamed Jahazi</h4>
              <p className="text-xs">Founder, BD & Partnerships</p>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Serial founder and crypto expert with:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>10+ years growing tech startups</li>
                <li>Extensive crypto industry connections</li>
                <li>Experience in business development</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Eric Moran</h4>
              <p className="text-xs">Co-Founder & COO</p>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Full-Stack developer with expertise in:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Second hand to CEO</li>
                <li>Expert in operations</li>
                <li>10+ years experience in tech</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Daniil Karpov</h4>
              <p className="text-xs">PM & Full-Stack Dev</p>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Senior developer responsible for:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Product management</li>
                <li>Full stack development</li>
                <li>10 years of experience across multiple tech stacks</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Ahmed Hojares</h4>
              <p className="text-xs">Fractional CTO</p>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Technical expert with:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Ex-founder with successful exits</li>
                <li>Expert in cloud infrastructure</li>
                <li>Blockchain data specialist</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Haseeb Saeed</h4>
              <p className="text-xs">Back End Dev</p>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Developer specializing in:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Multiple hackathon winner</li>
                <li>Expert in math & smart contracts</li>
                <li>Building DeFi dApps</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Filip Kordanovski</h4>
              <p className="text-xs">UI & Design</p>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Creative talent focused on:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Web3 UX/UI expertise</li>
                <li>Talented creator</li>
                <li>Former work for top DeFi protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Advisors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <h4 className="text-md font-medium mb-2 text-white">DEX Industry Experts</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium text-white">Vertex Protocol Founder:</span> Strategic advisor on DEX integration and market trends</li>
              <li><span className="font-medium text-white">Former GMX Core Dev:</span> Technical advisor on DEX infrastructure</li>
            </ul>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <h4 className="text-md font-medium mb-2 text-white">Business & Growth Advisors</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium text-white">DeFi Venture Partner:</span> Guidance on fundraising and tokenomics strategies</li>
              <li><span className="font-medium text-white">Trading Infrastructure Expert:</span> Advisor on product roadmap and feature prioritization</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Open Positions</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <p className="text-sm mb-3">DexPal is actively recruiting for the following positions:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-white">Senior Rust Developer:</span> For high-performance data processing systems</li>
            <li><span className="font-medium text-white">Blockchain Data Specialist:</span> For DEX integration and data normalization</li>
            <li><span className="font-medium text-white">Growth Marketing Manager:</span> To lead user acquisition and community growth</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Token Details content
  const renderToken = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Token Details</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          The DexPal token ($DP) is designed as a utility and governance token that captures value from platform activity and redistributes it to stakeholders.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Token Utility</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Staking:</span> Stake $DP to unlock premium features and earn a share of protocol revenue</li>
              <li><span className="font-medium text-white">Governance:</span> Vote on important protocol decisions and feature prioritization</li>
              <li><span className="font-medium text-white">Fee Discounts:</span> Reduced fees for token holders based on staking tier</li>
              <li><span className="font-medium text-white">Rewards Boost:</span> Enhanced rewards for trading activities across integrated DEXs</li>
              <li><span className="font-medium text-white">Liquidity Mining:</span> Additional incentives for providing liquidity to $DP pools</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Token Economics</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Total Supply:</span> 100,000,000 $DP tokens</li>
              <li><span className="font-medium text-white">Initial Circulating Supply:</span> 15,000,000 $DP (15% at TGE)</li>
              <li><span className="font-medium text-white">Emission Schedule:</span> 4-year linear vesting for team and investor allocations</li>
              <li><span className="font-medium text-white">Value Accrual:</span> 70% of protocol revenue used for token buybacks and burns</li>
              <li><span className="font-medium text-white">Treasury Management:</span> Multi-sig controlled treasury for sustainable development</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Token Allocation</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">Team & Advisors</span>
              <span className="text-sm text-white">20%</span>
            </div>
            <div className="w-full bg-[#333333] rounded-full h-3">
              <div className="bg-[#B47AEA] h-3 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">Investors</span>
              <span className="text-sm text-white">15%</span>
            </div>
            <div className="w-full bg-[#333333] rounded-full h-3">
              <div className="bg-[#8257B3] h-3 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
          
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">Community Rewards</span>
              <span className="text-sm text-white">35%</span>
            </div>
            <div className="w-full bg-[#333333] rounded-full h-3">
              <div className="bg-[#6A45A1] h-3 rounded-full" style={{ width: '35%' }}></div>
            </div>
          </div>
          
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">Treasury</span>
              <span className="text-sm text-white">15%</span>
            </div>
            <div className="w-full bg-[#333333] rounded-full h-3">
              <div className="bg-[#53358F] h-3 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
          
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">Liquidity & Partnerships</span>
              <span className="text-sm text-white">10%</span>
            </div>
            <div className="w-full bg-[#333333] rounded-full h-3">
              <div className="bg-[#3C257D] h-3 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">Initial DEX Offering</span>
              <span className="text-sm text-white">5%</span>
            </div>
            <div className="w-full bg-[#333333] rounded-full h-3">
              <div className="bg-[#25156B] h-3 rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Token Launch Plan</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Pre-Launch Phase</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Points system for early users</li>
                <li>Community-building activities</li>
                <li>Strategic partnerships formation</li>
                <li>Product functionality validation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Launch Strategy</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Initial DEX Offering (IDO)</li>
                <li>Retroactive rewards for early users</li>
                <li>Liquidity bootstrapping on major DEXs</li>
                <li>Staking contract deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Security Center content
  const renderSecurity = () => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Security Center</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal implements comprehensive security measures across all aspects of the platform to protect user data, funds, and ensure system integrity.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Platform Security</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Infrastructure:</span> Cloud security best practices with regular penetration testing</li>
              <li><span className="font-medium text-white">Authentication:</span> Multi-factor authentication and role-based access controls</li>
              <li><span className="font-medium text-white">Monitoring:</span> 24/7 automated system monitoring with alert systems</li>
              <li><span className="font-medium text-white">Data Protection:</span> End-to-end encryption for sensitive data storage and transmission</li>
              <li><span className="font-medium text-white">DDoS Protection:</span> Enterprise-grade DDoS mitigation services</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Smart Contract Security</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Audits:</span> Multiple independent security audits before deployment</li>
              <li><span className="font-medium text-white">Bug Bounty:</span> Ongoing bug bounty program with competitive rewards</li>
              <li><span className="font-medium text-white">Time Locks:</span> Admin functions secured behind time-locked multisig controls</li>
              <li><span className="font-medium text-white">Upgradability:</span> Transparent upgrade mechanisms with community governance</li>
              <li><span className="font-medium text-white">Open Source:</span> Verified contract code with documentation</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Security Partners</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <p className="text-sm mb-4">DexPal partners with industry-leading security firms for ongoing assessment and protection:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#222222] p-4 rounded-lg text-center">
              <div className="h-12 flex items-center justify-center mb-2">
                <svg className="h-8 w-8 text-[#B47AEA]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 className="font-medium text-white mb-1">Trail of Bits</h4>
              <p className="text-xs text-[#AAAAAA]">Smart contract audits</p>
            </div>
            
            <div className="bg-[#222222] p-4 rounded-lg text-center">
              <div className="h-12 flex items-center justify-center mb-2">
                <svg className="h-8 w-8 text-[#B47AEA]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 className="font-medium text-white mb-1">Hacken</h4>
              <p className="text-xs text-[#AAAAAA]">Platform security assessment</p>
            </div>
            
            <div className="bg-[#222222] p-4 rounded-lg text-center">
              <div className="h-12 flex items-center justify-center mb-2">
                <svg className="h-8 w-8 text-[#B47AEA]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 className="font-medium text-white mb-1">Immunefi</h4>
              <p className="text-xs text-[#AAAAAA]">Bug bounty program</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">User Security Resources</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Security Guide</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Best practices for wallet security</li>
                <li>How to verify contract addresses</li>
                <li>Avoiding phishing and social engineering</li>
                <li>Using hardware wallets with DexPal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Incident Response</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>24/7 security monitoring</li>
                <li>Rapid response security team</li>
                <li>Emergency communication channels</li>
                <li>Comprehensive incident report protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="bg-[#B47AEA] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">DexPal Dashboard</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#overview" onClick={() => setActiveTab('overview')} className="text-white hover:text-white/75 px-3 py-2 rounded-md text-sm font-medium">Overview</a>
            <a href="#features" onClick={() => setActiveTab('custom_dashboard')} className="text-white hover:text-white/75 px-3 py-2 rounded-md text-sm font-medium">Features</a>
            <a href="#business" onClick={() => setActiveTab('business')} className="text-white hover:text-white/75 px-3 py-2 rounded-md text-sm font-medium">Business Model</a>
            <a href="#partners" onClick={() => setActiveTab('partners')} className="text-white hover:text-white/75 px-3 py-2 rounded-md text-sm font-medium">Partners</a>
            <a href="#tokenomics" onClick={() => setActiveTab('tokenomics')} className="text-white hover:text-white/75 px-3 py-2 rounded-md text-sm font-medium">Tokenomics</a>
          </nav>
          <button 
            className="md:hidden p-2 rounded-md text-white hover:text-white/75 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Mobile menu, show/hide based on menu state */}
      {showMobileMenu && (
        <div className="md:hidden bg-[#1E1E1E] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#overview" onClick={() => { setActiveTab('overview'); setShowMobileMenu(false); }} className="hover:bg-[#2A2A2A] block px-3 py-2 rounded-md text-base font-medium text-white">Overview</a>
            <a href="#features" onClick={() => { setActiveTab('custom_dashboard'); setShowMobileMenu(false); }} className="hover:bg-[#2A2A2A] block px-3 py-2 rounded-md text-base font-medium text-white">Features</a>
            <a href="#business" onClick={() => { setActiveTab('business'); setShowMobileMenu(false); }} className="hover:bg-[#2A2A2A] block px-3 py-2 rounded-md text-base font-medium text-white">Business Model</a>
            <a href="#partners" onClick={() => { setActiveTab('partners'); setShowMobileMenu(false); }} className="hover:bg-[#2A2A2A] block px-3 py-2 rounded-md text-base font-medium text-white">Partners</a>
            <a href="#tokenomics" onClick={() => { setActiveTab('tokenomics'); setShowMobileMenu(false); }} className="hover:bg-[#2A2A2A] block px-3 py-2 rounded-md text-base font-medium text-white">Tokenomics</a>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DocumentationBanner />
        
        <div className="md:flex gap-6">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0">
            <div className="bg-[#1E1E1E] rounded-lg shadow p-4 border border-[#333333]">
              <h2 className="text-lg font-medium mb-4 text-white">Dashboard Navigation</h2>
              
              {/* Navigation Tree */}
              <nav>
                <ul className="space-y-2">
                  {sidebarStructure.map((group, groupIndex) => (
                    <li key={groupIndex} className="border-b border-[#333333] pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                      <button
                        className="w-full flex justify-between items-center font-medium text-left mb-1 text-[#E0E0E0] hover:text-[#B47AEA]"
                        onClick={() => toggleGroup(group.groupName)}
                      >
                        <span>{group.groupName}</span>
                        <svg className={`h-5 w-5 transform ${expandedGroups.includes(group.groupName) ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {expandedGroups.includes(group.groupName) && (
                        <ul className="pl-4 space-y-1 text-sm">
                          {group.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <button 
                                className={`w-full text-left p-1 hover:bg-[#2A2A2A] rounded-md ${activeTab === item.id ? 'text-[#B47AEA] font-medium bg-[#2A2A2A]' : 'text-[#AAAAAA]'}`}
                                onClick={() => setActiveTab(item.id)}
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content - Use dark theme styling for content sections */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DexPalDashboard; 