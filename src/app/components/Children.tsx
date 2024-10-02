"use client";

import { useAccount } from "wagmi";

export default function Children({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { address } = useAccount();
	return (
		<>
			{address && {children}};
		</>
	);
}