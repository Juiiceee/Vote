import { useRouter } from "next/navigation";
export default function Button({
	children, path, className
}: Readonly<{
	children: React.ReactNode;
	path: string;
	className?: string;
}>) {
	const router = useRouter();
	return (
		<button className={className} onClick={() => {router.push(path)}}>
			{children}
		</button>
	);
}
