import type { Metadata } from "next";

const siteName = "Badan Pendapatan Daerah Kabupaten Garut";
const siteTitle = "BAPENDA Kabupaten Garut";
const siteDescription =
	"Portal resmi Badan Pendapatan Daerah Kabupaten Garut untuk informasi profil, layanan pajak daerah, regulasi, laporan kinerja, dan informasi publik.";
const siteUrl = "https://bapenda.garutkab.go.id";
const defaultImage = "/LogoBappenda.png";

export const defaultKeywords = [
	"BAPENDA Garut",
	"Badan Pendapatan Daerah Kabupaten Garut",
	"pajak daerah Garut",
	"layanan pajak Garut",
	"informasi publik BAPENDA",
];

export const defaultMetadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: siteTitle,
		template: "%s | BAPENDA Kabupaten Garut",
	},
	description: siteDescription,
	applicationName: siteTitle,
	keywords: defaultKeywords,
	authors: [{ name: siteName }],
	creator: siteName,
	publisher: siteName,
	category: "government",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "id_ID",
		url: siteUrl,
		siteName,
		title: siteTitle,
		description: siteDescription,
		images: [
			{
				url: defaultImage,
				alt: siteTitle,
			},
		],
	},
	twitter: {
		card: "summary",
		title: siteTitle,
		description: siteDescription,
		images: [defaultImage],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
};

type PageMetadataOptions = {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
};

export function createPageMetadata({
	title,
	description,
	path,
	keywords = [],
}: PageMetadataOptions): Metadata {
	const absoluteUrl = new URL(path, siteUrl).toString();

	return {
		title,
		description,
		keywords: [...defaultKeywords, ...keywords],
		alternates: {
			canonical: path,
		},
		openGraph: {
			type: "website",
			locale: "id_ID",
			url: absoluteUrl,
			siteName,
			title: `${title} | BAPENDA Kabupaten Garut`,
			description,
			images: [
				{
					url: defaultImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary",
			title: `${title} | BAPENDA Kabupaten Garut`,
			description,
			images: [defaultImage],
		},
	};
}
