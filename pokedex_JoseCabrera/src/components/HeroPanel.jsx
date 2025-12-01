export const HeroPanel = ({ photoId = "120", title = "Bienvenido a la Pokédex 2025", subtitle = "Explora todos los Pokémon con un diseño limpio y moderno" }) => {
    return (
        <div className="relative w-full h-[65vh] overflow-hidden rounded-b-3xl shadow-lg">

            <picture className="w-full h-full">
                <source srcSet={`https://picsum.photos/id/${photoId}/1300/720`} media="(min-width:1025px)" />
                <source srcSet={`https://picsum.photos/id/${photoId}/1024/640`} media="(min-width:720px)" />
                <img
                    src={`https://picsum.photos/id/${photoId}/480/480`}
                    alt="Hero Panel Image"
                    className="w-full h-full object-cover"
                />
            </picture>

            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-white text-4xl font-bold tracking-tight drop-shadow-lg">
                    {title}
                </h2>

                <p className="text-gray-200 mt-3 max-w-xl text-lg leading-relaxed drop-shadow">
                    {subtitle}
                </p>

                <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-2xl text-lg font-medium shadow-lg transition-all">
                    Explorar
                </button>
            </div>

        </div>
    );
};
