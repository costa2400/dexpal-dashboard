import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CompanyInformation = () => {
  // Sample data for visualizations
  const userGrowthData = [
    { month: 'Jan', users: 12000 },
    { month: 'Feb', users: 19000 },
    { month: 'Mar', users: 32000 },
    { month: 'Apr', users: 47000 },
    { month: 'May', users: 68000 },
  ];

  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">Company Information</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal is positioned as the premier data terminal and rewards hub for leverage trading across decentralized exchanges (DEXs), with a multi-faceted approach to revenue generation and value distribution.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Core Mission and Value Proposition</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <p className="mb-4">
            <span className="font-medium text-white">Mission:</span> Help onboard and guide a new generation of traders to disrupt the multi-trillion-dollar crypto derivatives market toward a more decentralized future.
          </p>
          <p className="mb-4">
            <span className="font-medium text-white">Vision:</span> Become the essential companion for all traders choosing DEXs over CEXs, starting with perpetual futures before expanding to options and spot trading.
          </p>
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
              <li><span className="font-medium text-white">Legal Entity:</span> DP Analytics Inc.</li>
              <li><span className="font-medium text-white">Team Size:</span> Core team of 6 with additional contractors</li>
              <li><span className="font-medium text-white">Location:</span> Globally distributed team</li>
              <li><span className="font-medium text-white">Funding Status:</span> Seeking to raise $2.5M at $18.5M valuation</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Business Model</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Trading Fees:</span> 20-30% of fees paid by users who use DexPal's affiliate codes</li>
              <li><span className="font-medium text-white">Maintenance Fees:</span> Yearly support and maintenance fees from DEXs</li>
              <li><span className="font-medium text-white">Premium Features:</span> Subscription or token staking for advanced functionality</li>
              <li><span className="font-medium text-white">APIs:</span> Standardized data access for market makers and institutions</li>
              <li><span className="font-medium text-white">Advertising & Grants:</span> Revenue from marketing opportunities and ecosystem grants</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Leadership Team</h3>
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
              <p className="text-xs">Co-Founder</p>
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
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Market Positioning</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Current Market</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Derivatives Market: ~$50 trillion annually</li>
                <li>Derivatives portion: ~$40.73 trillion (81.54%)</li>
                <li>Current DEX derivatives volume: ~$1.15 trillion annually</li>
                <li>Spot trading on DEXs: Now over 10% of total volume</li>
                <li>Projected DEX derivatives: Potential to capture 10% of market</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Competitive Advantage</h4>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>First-mover advantage as comprehensive DEX derivatives solution</li>
                <li>Robust data infrastructure for multiple DEXs across networks</li>
                <li>Network effects from multi-sided platform model</li>
                <li>Strong strategic partnerships with DEXs and infrastructure providers</li>
                <li>Diversified revenue model with multiple customer segments</li>
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
            <p className="text-xs text-[#AAAAAA] mt-1">Seed round at $18.5M valuation (13.51% ownership)</p>
            <p className="text-xs text-[#AAAAAA] mt-2">
              <span className="font-medium text-white">Future Funding Plans:</span> No additional rounds planned unless required. Expected to move toward a token generation event (TGE) after this round.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-2">Traction & Recent Updates</h4>
            <ul className="space-y-1 text-sm text-[#AAAAAA]">
              <li>First paying DEX customer secured (Vela Exchange - $10k grant)</li>
              <li>Multiple blockchain foundation grants in progress (Arbitrum, Fuel, Injective, Metis)</li>
              <li>Strategic partnerships developing with LayerZero, Fun.xyz, Pyth, and Thirdwave</li>
              <li>Team driven by sweat equity and shared vision</li>
              <li>Major DEX founder (Vertex) on advisory board</li>
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
};

export default CompanyInformation; 