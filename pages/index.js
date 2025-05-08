import Head from 'next/head';
import DexPalDashboard from '../DexPalDashboard';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>DexPal - Interactive Dashboard</title>
        <meta name="description" content="The ultimate data terminal and rewards hub for leverage trading on decentralized exchanges (DEXs)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DexPalDashboard />
    </>
  );
} 