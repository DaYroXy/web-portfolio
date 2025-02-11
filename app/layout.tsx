import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import "./globals.css";

const anonymousFont = Anonymous_Pro({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "DaYroXy's portfolio",
	description: "Developed by DaYroXy in Nextjs 15",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${anonymousFont.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
