import data from "@/app/content/about.json";
import NilaiData from "@/app/content/nilai-organisasi.json";
import tupoksiBapenda from "@/app/content/tupoksi-bapenda.json";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

export default function profil() {
    return (
        <>
            <main className="min-h-screen flex flex-col gap-10">
                <section className="flex flex-col items-center max-w-7xl mx-auto px-6 text-center">
                    <div className="mt-24">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                            Badan Pendapatan Daerah
                        </h1>
                        <div className="w-24 h-1 bg-blue-600 mt-3 rounded-full"></div>
                    </div>
                    <p className="mt-3 text-lg">{data.opening.content}</p>
                </section>

                {/* Visi Section */}
                <section className="relative container flex flex-col max-w-6xl mx-auto items-center text-center gap-5">
                    <h2 className="my-4 font-bold text-3xl md:my-6">
                        {data.Visi.heading}
                    </h2>
                    <p className="max-w-2xl text-muted-foreground">
                        {data.Visi.content}
                    </p>
                    <div className="container mt-12 gap-6  grid grid-cols-1 md:grid-cols-3 gap-5">
                        {data.Visi.list.map((item) => {
                            const Icon =
                                icons[item.icons as keyof typeof icons];
                            return (
                                <Card
                                    key={item.id}
                                    className="p-5 h-full relative flex flex-col items-center rounded-xl  bg-background/70 px-6 py-7 backdrop-blur-sm"
                                >
                                    <div className="mb-3 flex aspect-square rounded-full w-16 bg-gray-200 items-center justify-center md:w-20 ">
                                        {Icon && (
                                            <Icon className="h-10 w-10 text-primary" />
                                        )}
                                    </div>

                                    <CardContent className=" mb-auto text-md text-center text-muted-foreground">
                                        {item.description}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>
                {/* Misi Section */}
                <section className="relative container flex flex-col max-w-6xl mx-auto items-center text-center gap-5">
                    <h2 className="my-4 font-bold text-3xl md:my-6">
                        {data.Misi.heading}
                    </h2>
                    <p className="max-w-2xl text-muted-foreground">
                        {data.Misi.content}
                    </p>
                    <div className="container mt-12 gap-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {data.Misi.list.map((item) => {
                            const Icon =
                                icons[item.icons as keyof typeof icons];
                            return (
                                <Card
                                    key={item.id}
                                    className="p-5 h-full relative flex flex-col items-center rounded-xl  bg-background/70 px-6 py-7 backdrop-blur-sm"
                                >
                                    <div className="mb-3 flex aspect-square rounded-full w-16 bg-gray-200 items-center justify-center md:w-20 ">
                                        {Icon && (
                                            <Icon className="h-10 w-10 text-primary rounded-full" />
                                        )}
                                    </div>

                                    <CardContent className=" mb-auto text-md text-center text-muted-foreground">
                                        {item.description}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Tugas dan Fungsi */}
                <section className="relative container flex flex-col max-w-6xl mx-auto items-center text-center gap-5">
                    <h2 className="my-4 font-bold text-3xl md:my-6">
                        {tupoksiBapenda.title}
                    </h2>
                    <p className="max-w-2xl text-muted-foreground">
                        {tupoksiBapenda.description}
                    </p>
                    <div className="mt-12 flex flex-wrap justify-center gap-6">
                        {tupoksiBapenda.Tupoksi.map((item, index) => {
                            const Icon =
                                icons[item.icons as keyof typeof icons];
                            return (
                                <Card
                                    key={item.id}
                                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center rounded-xl bg-background/70 px-6 py-7 backdrop-blur-sm"
                                >
                                    <div className="mb-3 flex aspect-square rounded-full w-16 bg-gray-200 items-center justify-center md:w-20 ">
                                        {Icon && (
                                            <Icon className="h-8 w-8 text-primary rounded-full" />
                                        )}
                                    </div>

                                    <CardContent className=" mb-auto text-md text-center text-muted-foreground">
                                        {item.description}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Nilai Organisasi Section */}
                <section className="py-32 bg-muted/50">
                    <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3">
                        {/* Kolom 1 — Judul saja */}
                        <h2 className="text-3xl font-semibold">
                            {NilaiData.Nilai.title}
                        </h2>

                        {/* Kolom 2–3 — Konten */}
                        <div className="md:col-span-2 grid gap-8 sm:grid-cols-2">
                            {NilaiData.Nilai["nilai-nilai"].map(
                                (item, index) => (
                                    <div key={index} className="space-y-2">
                                        <h3 className="text-lg font-medium">
                                            {item.nilai}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
