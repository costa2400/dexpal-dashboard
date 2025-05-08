import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Tokenomics = () => {
  const COLORS = ['#B47AEA', '#8257B3', '#6A45A1', '#53358F', '#3C257D', '#25156B'];
  
  const tokenDistributionData = [
    { name: 'Community', value: 40 },
    { name: 'Team & Advisors', value: 20 },
    { name: 'Investors', value: 15 },
    { name: 'Treasury', value: 15 },
    { name: 'Liquidity', value: 5 },
    { name: 'Marketing', value: 5 }
  ];
  
  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
      <h2 className="text-xl font-bold mb-4 text-white">DexPal Tokenomics</h2>
      
      <div className="mb-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal's tokenomics model is designed to align incentives between the platform, token holders, and users through revenue-driven token utility, sustainable emission schedules, and multiple value accrual mechanisms.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Token Overview</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-medium text-white">Token Name:</span> DexPal Token</li>
              <li><span className="font-medium text-white">Symbol:</span> $DP</li>
              <li><span className="font-medium text-white">Total Supply:</span> 100,000,000 $DP</li>
              <li><span className="font-medium text-white">Initial Circulating Supply:</span> 15,000,000 $DP</li>
              <li><span className="font-medium text-white">Blockchain:</span> Ethereum (ERC-20) with multi-chain bridges</li>
              <li><span className="font-medium text-white">Initial Token Price:</span> $0.15 USD</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Token Distribution</h3>
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5 flex flex-col items-center">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {tokenDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Allocation']}
                    contentStyle={{ backgroundColor: '#2A2A2A', borderColor: '#444444', color: '#E0E0E0' }}
                    itemStyle={{ color: '#E0E0E0' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-xs w-full">
              {tokenDistributionData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Token Utility</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Governance</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Protocol decision-making rights:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Revenue sharing parameters</li>
                <li>Feature roadmap prioritization</li>
                <li>Fee structure adjustments</li>
                <li>Partnership approvals</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Platform Benefits</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Enhanced trading experience:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Premium features access</li>
                <li>Trading fee discounts</li>
                <li>Advanced analytics tools</li>
                <li>API rate limit increases</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Rewards & Incentives</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Platform participation bonuses:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Trading competition bonuses</li>
                <li>Enhanced referral rewards</li>
                <li>Community contribution rewards</li>
                <li>Airdrops for active members</li>
              </ul>
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
              <p className="text-sm mb-2 text-[#E0E0E0]">Direct value distribution:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>70% of platform revenue to $DP stakers</li>
                <li>Proportional distribution based on stake</li>
                <li>Auto-compounding options</li>
                <li>Multiple token payment options</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Token Burns</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Deflationary mechanisms:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Quarterly buyback and burn events</li>
                <li>Portion of fees used for buybacks</li>
                <li>Transparent burn schedule</li>
                <li>Governance-approved burn rate</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#B47AEA] p-3 text-white">
              <h4 className="font-semibold">Staking Incentives</h4>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#E0E0E0]">Rewards for committing tokens to the ecosystem:</p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Revenue-based staking rewards</li>
                <li>Tiered benefits based on stake size</li>
                <li>Governance weight multipliers</li>
                <li>Feature access unlocks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Points-to-Token Transition Strategy</h3>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-2">Initial Points System</h4>
              <p className="text-sm mb-3 text-[#AAAAAA]">
                DexPal will launch with a points system to reward early users and activity before the token generation event (TGE).
              </p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Points for platform activity and engagement</li>
                <li>Transparent points-earning mechanisms</li>
                <li>Leaderboards showing point accumulation</li>
                <li>Points serve as proof of participation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Token Launch Process</h4>
              <p className="text-sm mb-3 text-[#AAAAAA]">
                Following successful product-market fit validation, points will be converted to tokens at a pre-determined ratio.
              </p>
              <ul className="space-y-1 text-sm text-[#AAAAAA]">
                <li>Points-to-token conversion event</li>
                <li>Initial DEX offering (IDO) for public participants</li>
                <li>Strategic exchange listings</li>
                <li>Liquidity bootstrapping procedures</li>
              </ul>
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
};

export default Tokenomics; 