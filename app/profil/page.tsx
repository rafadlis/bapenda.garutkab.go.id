import data from "@/app/content/about.json";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { icons } from "@/lib/icons";

export default function Profil() {
    return (
        <>
            <main className="min-h-screen flex flex-col gap-10">
                <section className="max-w-5xl mx-auto px-6 mt-10 text-center">
                    <h1 className="font-bold text-xl">
                        {data.opening.heading}
                    </h1>
                    <p className="mt-3 text-lg">{data.opening.content}</p>
                </section>

                {/* Visi Section */}
                <section className="flex flex-col max-w-5xl mx-auto items-center gap-5">
                    <h1 className="font-bold text-xl">{data.Visi.heading}</h1>
                    <p className=" text-center mt-3 text-lg">
                        {data.Visi.content}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {data.Visi.list.map((item) => {
                            const Icon = icons[item.icons as keyof typeof icons];
                            return (
                                <Card
                                    key={item.id}
                                    className="p-5 h-full flex flex-col"
                                >
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        {Icon && (
                                            <Icon className="w-8 h-8 text-primary" />
                                        )}
                                        <CardTitle>{item.title}</CardTitle>
                                    </div>

                                    <CardContent className="text-md text-muted-foreground flex-grow">
                                        {item.description}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>
                {/* Misi Section */}
                <section className="flex flex-col max-w-6xl mx-auto items-center gap-5">
                    <h1 className="font-bold text-xl">{data.Misi.heading}</h1>
                    <p className=" text-center mt-3 text-lg">
                        {data.Misi.content}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {data.Misi.list.map((item) => {
                            const Icon =
                                icons[item.icons as keyof typeof icons];
                            return (
                                <Card
                                    key={item.id}
                                    className="p-5 h-full flex flex-col"
                                >
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        {Icon && (
                                            <Icon className="w-8 h-8 text-primary" />
                                        )}
                                    </div>

                                    <CardContent className="text-md text-center text-muted-foreground flex-grow">
                                        {item.description}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>
            </main>
        </>
    );
}
