import { HeroPanel } from "../components/HeroPanel";
import { PokeList } from "../components/Pokedex/PokeList";

export const Home = () => {
    return (
        <>
            <HeroPanel photoId="340" title="Explora el Mundo Pokémon" subtitle="Descubre tus Pokémon favoritos con un diseño fresco y actual" />

            <section className="py-12 px-6">
                <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl shadow-lg rounded-3xl p-10 border border-gray-200/40">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                        Tus Pokémon Favoritos
                    </h2>

                    <PokeList />
                </div>
            </section>
        </>
    );
};
