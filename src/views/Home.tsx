import Card from "@/components/Card";

    type Features = {
        title: string;
        desc: string;
    }

export default function Home(){

    const feature: Features[] = [
        { title: "Beneficio 1", desc: "Texto larguisimo 1"},
        { title: "Beneficio 2", desc: "Texto larguisimo 2"},
        { title: "Beneficio 3", desc: "Texto larguisimo 3"}
      
    ];

    return(
    <>
   
            <h2 className="text-3xl">Organiza tus tareas de forma eficiente</h2>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full">
                { feature.map((item) => (
                    <Card
                        key={item.title}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
                </section>

    </>

    );
}