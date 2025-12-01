import { HeroPanel } from "../components/HeroPanel";

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center px-6 py-12 text-center">
            <HeroPanel photoId="260" title="Página no encontrada" subtitle="Ups... parece que te perdiste en tu aventura Pokémon" />

            <div className="mt-10 max-w-xl bg-white/70 backdrop-blur-xl shadow-lg border border-gray-200/50 rounded-3xl p-10">
                <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>

                <p className="text-gray-600 text-lg leading-relaxed">
                    La página que buscas no existe o fue movida.  
                    Puedes volver al inicio y continuar explorando el mundo Pokémon.
                </p>
            </div>
        </div>
    );
};
