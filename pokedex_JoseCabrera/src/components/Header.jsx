import { Link } from "react-router";

export const Header = ({ title = "Pokedex 2025" }) => {
    return (
        <header className="w-full bg-white/70 backdrop-blur-xl border-b border-gray-300/40 shadow-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                
                <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
                    {title}
                </h1>

                <nav>
                    <ul className="flex gap-8 text-gray-700 font-medium">
                        <li>
                            <Link 
                                to="/" 
                                className="hover:text-blue-600 transition-colors"
                            >
                                Inicio
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/about" 
                                className="hover:text-blue-600 transition-colors"
                            >
                                Acerca
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
