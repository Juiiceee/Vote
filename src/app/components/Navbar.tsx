"use client";
import { Navbar as Navo, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Connect from "./Connect";
import Button from "./Button";
import { useAccount } from "wagmi";


export default function Navbar() {
	const { address } = useAccount();
	return (
		<Navo>
			{address && (
				<>
					<NavbarBrand>
						<Button className="font-bold text-inherit" path="/">Vote</Button>
					</NavbarBrand>
					<NavbarContent className="hidden sm:flex gap-4" justify="center">
						<NavbarItem>
							<Button path="/Create">
								Create Vote
							</Button>
						</NavbarItem>
						<NavbarItem isActive>
							<Button path="/See">
								See all Vote
							</Button>
						</NavbarItem>
					</NavbarContent>
				</>
			)}
			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<NavbarItem>
					<Connect />
				</NavbarItem>
			</NavbarContent>
		</Navo>
	);
}