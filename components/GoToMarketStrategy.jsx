import React from 'react';

const GoToMarketStrategy = () => (
  <div className="bg-[#1E1E1E] p-6 rounded-lg shadow border border-[#333333] text-[#E0E0E0]">
    <h2 className="text-xl font-bold mb-4 text-white">Go-to-Market Strategy</h2>
    
    <div className="mb-6">
      <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <p className="text-sm">
          DexPal's growth strategy focuses on building strategic partnerships with DEXs, offering valuable integration benefits, and creating a comprehensive ecosystem for traders.
        </p>
      </div>
    </div>

    {/* DEX Integration Guide */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">DEX Integration Framework</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h4 className="font-semibold text-white mb-3">Protocol Information Requirements</h4>
          <ul className="space-y-2 text-sm text-[#AAAAAA]">
            <li>Basic exchange details (name, ticker, networks, description)</li>
            <li>Supported collateral assets and maximum leverage</li>
            <li>Trading minimums and jurisdiction restrictions</li>
            <li>Market types (crypto, forex, commodities)</li>
            <li>Liquidity sources and margin types</li>
            <li>Withdrawal procedures and token information</li>
            <li>Latest versions and code audit dates</li>
            <li>Price oracle mechanisms and security measures</li>
          </ul>
        </div>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm p-5">
          <h4 className="font-semibold text-white mb-3">Data API Specifications</h4>
          <ul className="space-y-2 text-sm text-[#AAAAAA]">
            <li>Exchange statistics (users, volume, trades, fees)</li>
            <li>Market data (pairs, open interest, funding rates)</li>
            <li>Live exchange stats (active users, positions)</li>
            <li>Trading history with wallet filtering</li>
            <li>Open positions and limit order data</li>
            <li>Wallet holdings and exchange balances</li>
            <li>Earn mechanism metrics (TVL, APY, pools)</li>
            <li>Leaderboard data for top traders</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Genesis Program */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Genesis Program</h3>
      <div className="bg-[#2A2A2A] p-5 rounded-lg border border-[#444444] mb-4">
        <p className="text-sm mb-3">
          <span className="font-medium text-white">The DexPal Genesis Program</span> is our pre-launch initiative designed to partner with 10-20 leading DEXs. This exclusive program offers early access to our platform and creates a strong foundation for our ecosystem before the full public launch.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#333333] p-3 rounded shadow-sm">
            <p className="text-sm text-[#AAAAAA]">Selected Partners</p>
            <p className="font-bold text-[#B47AEA]">10-20 Leading DEXs</p>
          </div>
          <div className="bg-[#333333] p-3 rounded shadow-sm">
            <p className="text-sm text-[#AAAAAA]">Integration Fee</p>
            <p className="font-bold text-[#B47AEA]">$5,000 (returned as giveaways)</p>
          </div>
          <div className="bg-[#333333] p-3 rounded shadow-sm">
            <p className="text-sm text-[#AAAAAA]">Early Access Users</p>
            <p className="font-bold text-[#B47AEA]">Up to 100 per DEX</p>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-sm text-white mb-2">Genesis Partner Benefits:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1 text-[#AAAAAA]">
            <li>Early access to DexPal beta for your community</li>
            <li>SoulBound NFTs for top traders with OG status</li> 
            <li>Detailed referral tracking to measure trading volume</li>
            <li>Collaborative incentive programs and shared rewards</li>
            <li>Marketing materials to promote the partnership</li>
            <li>Integration fee fully returned as user giveaways</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Partnership Opportunities */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-[#B47AEA]">Partnership Opportunities</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#B47AEA] p-3 text-white">
            <h4 className="font-semibold">Integration Partnerships</h4>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm text-[#AAAAAA]">
              <li>Data integration for trading analytics</li>
              <li>Trading pair/liquidity visibility</li>
              <li>API enhancements for seamless UX</li>
              <li>CSV extraction for trading history</li>
              <li>Custom analytics dashboards</li>
              <li>Subgraph and substream development</li>
              <li>User onboarding optimization</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#B47AEA] p-3 text-white">
            <h4 className="font-semibold">Marketing & Promotion</h4>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm text-[#AAAAAA]">
              <li>Joint campaigns and trading contests</li>
              <li>Featured DEX spotlights and profiles</li>
              <li>Educational content and tutorials</li>
              <li>Co-branded webinars and AMAs</li>
              <li>Referral program amplification</li>
              <li>Cross-promotion to targeted users</li>
              <li>Exclusive quests and achievements</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#B47AEA] p-3 text-white">
            <h4 className="font-semibold">Technical Development</h4>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm text-[#AAAAAA]">
              <li>Feature development (FELOs, etc.)</li>
              <li>Token incentives and staking</li>
              <li>Custom dashboards and analytics</li>
              <li>Gasless transaction solutions</li>
              <li>Advanced trade routing options</li>
              <li>Performance analytics integrations</li>
              <li>Community-building initiatives</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-[#2A2A2A] p-4 rounded-lg border border-[#444444]">
        <h4 className="font-semibold text-white mb-2">Revenue Share Models</h4>
        <p className="text-sm mb-3">DexPal utilizes multiple revenue streams from DEX partnerships:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-sm font-medium text-white mb-1">Trading Fees & Referrals</h5>
            <p className="text-xs text-[#AAAAAA]">20-30% of trading fees generated via DexPal referral codes, with T+1 settlement in native tokens or stablecoins.</p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-white mb-1">Premium Services</h5>
            <p className="text-xs text-[#AAAAAA]">Subscription-based advanced analytics, custom alerts, and APIs for trading firms and institutions.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GoToMarketStrategy; 