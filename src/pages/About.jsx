import { HeroPanel } from "../components/HeroPanel";

export const About = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <HeroPanel photoId="120" title="Acerca de Nosotros" subtitle="Una pokedex moderna, minimalista y diseñada para ti" />

            <section className="mt-10 max-w-3xl mx-auto bg-white/60 backdrop-blur-xl shadow-lg rounded-3xl p-10 text-center border border-gray-200/40">
                <h1 className="text-4xl font-semibold mb-4 tracking-tight text-gray-800">
                    Acerca de Nosotros
                </h1>

                <p className="text-gray-600 leading-relaxed text-lg">
                    Esta nueva versión de la Pokédex presenta una interfaz refinada,
                    moderna y minimalista. Cada detalle fue creado pensando en ofrecer
                    una experiencia visual limpia, suave y agradable.
                </p>
            </section>
        </div>
    );
};
4