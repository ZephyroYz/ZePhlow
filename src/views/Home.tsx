import Card from "@/components/Card";

    type Features = {
        title: string;
        desc: string;
    }

export default function Home(){

    const feature: Features[] = [
        { title: "Kanban Clarity", desc: "Visualiza el progreso de tus proyectos sin esfuerzo."},
        { title: "Focus Mode", desc: "Prioriza tareas urgentes al instante."},
        { title: "Team Synergy", desc: "Colaboración en tiempo real."}
      
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