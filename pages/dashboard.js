import Head from 'next/head';
import React from 'react';

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>DexPal - Interactive Dashboard</title>
        <meta name="description" content="The ultimate data terminal and rewards hub for leverage trading on decentralized exchanges (DEXs)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">DexPal Dashboard</h1>
          <p className="text-center mb-6">
            There was an issue loading the interactive dashboard. We're working on fixing this.
          </p>
          <div className="text-sm bg-yellow-50 p-4 rounded border border-yellow-200">
            <p>Technical details:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Syntax error in DexPalDashboard.jsx</li>
              <li>The error message indicates an issue with the export statement</li>
              <li>Likely a duplicated closing curly brace or export statement</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
} 