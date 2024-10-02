import { useRouter } from "next/navigation";

type ButtonPropsWithPath = {
	children: React.ReactNode;
	path: string;
	className?: string;
	isPush: true;
};

type ButtonPropsWithoutPath = {
	children: React.ReactNode;
	className?: string;
	isPush?: false;
	path?: string;
};

type ButtonProps = ButtonPropsWithPath | ButtonPropsWithoutPath;

export default function Button({
	children, path, className, isPush = true
}: ButtonProps) {
	const router = useRouter();
	return (
		<button className={className} onClick={() => { isPush ? router.push(path!) : router.back() }}>
			{children}
		</button>
	);
}