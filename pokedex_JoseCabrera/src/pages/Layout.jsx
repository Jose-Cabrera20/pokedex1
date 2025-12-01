import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router";

export const Layout = () => {
    return (
        <section className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900">
            <Header title="Pokédex 2025" />

            <main className="flex-1 px-6 py-10 max-w-6xl mx-auto w-full">
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-200/50 p-8">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </section>
    );
};
