import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/BPHTB.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
	title: "Layanan BPHTB",
	description:
		"Panduan layanan BPHTB BAPENDA Kabupaten Garut berisi persyaratan, alur, dan informasi penting untuk bea perolehan hak atas tanah dan bangunan.",
	path: "/layanan-pajak/BPHTB",
	keywords: ["BPHTB Garut", "layanan BPHTB", "pajak perolehan hak tanah bangunan"],
});


export default function BPHTB() {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center max-w-7xl mx-auto gap-6 mt-20 px-6">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                    BPHTB
                </h1>
                <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                {Object.entries(data).map(([key, layanan]) => (
                    <section key={key}>
                        <div className="w-full h-px bg-gray-200 mb-6" />

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                            {/* KIRI */}
                            <div className="flex flex-col p-6 rounded-xl gap-5">
                                <h2 className="font-semibold text-2xl mb-2">
                                    {layanan.title}
                                </h2>
                                <p className="text-lg text-gray-600">
                                    {layanan.description}
                                </p>
                            </div>

                            {/* KANAN */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                                {layanan.requirements.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                        <span className="text-gray-700">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full h-px bg-gray-200 mt-6" />
                    </section>
                ))}
            </main>
        </>
    );
}
