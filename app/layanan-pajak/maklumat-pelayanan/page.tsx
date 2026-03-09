import Image from "next/image";
export default function Maklumat() {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center max-w-5xl mx-auto gap-6 mt-20 px-6">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                    Maklumat Pelayanan
                </h1>
                <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                <div className="relative w-full h-[600px]">
                    <Image
                        src="/maklumat-pelayanan.png"
                        alt="Maklumat Pelayanan"
                        fill
                        className="object-contain"
                        sizes="100vw"
                    />
                </div>
            </main>
        </>
    );
}
