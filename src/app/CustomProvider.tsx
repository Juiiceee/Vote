"use client";
import '@rainbow-me/rainbowkit/styles.css';
import {
	getDefaultConfig,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
	mainnet,
	anvil,
	polygon,
	optimism,
	arbitrum,
	arbitrumSepolia,
	base,
	sepolia
} from 'wagmi/chains';
import {
	QueryClientProvider,
	QueryClient,
} from "@tanstack/react-query";
import React from 'react';

const config = getDefaultConfig({
	appName: 'My RainbowKit App',
	projectId: 'd8fb0d4c1c6aa1899c65cda0827d98a1',
	chains: [mainnet, arbitrum, sepolia, anvil, arbitrumSepolia],
	ssr: true,
});

const queryClient = new QueryClient();
const CustomProvider = ({ children, }: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider>
					{children}
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
};
export default CustomProvider;