import data from "@/app/content/tugas-fungsi.json";
export default function TugasFungsi() {
    const merged = data.tugas.map((tugas) => {
        const fungsiItem = data.fungsi.find(
            (f) => f.department === tugas.department
        );

        return {
            department: tugas.department,
            duty: tugas.duty,
            description: fungsiItem?.description || null,
            functions: fungsiItem?.function || [],
        };
    });

    return (
        <>
            <main className="min-h-screen flex flex-col items-center max-w-7xl mx-auto gap-6 px-6">
                <div className="mt-24">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                        Tugas dan Fungsi
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mt-3 rounded-full"></div>
                </div>
                <section className="space-y-6">
                    {merged.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8"
                        >
                            {/* Department */}
                            <h3 className="text-xl font-semibold text-blue-800 tracking-tight">
                                {item.department}
                            </h3>

                            {/* Department Duties */}
                            <p className="text-gray-700 leading-relaxed mt-3">
                                {item.duty}
                            </p>

                            {/* Department Functions */}
                            {item.functions.length > 0 && (
                                <div className="mt-5">
                                    <p className="font-medium text-gray-900">
                                        {item.description}
                                    </p>

                                    <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
                                        {item.functions.map((fn, i) => (
                                            <li key={i}>{fn}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}
