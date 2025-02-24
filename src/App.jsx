import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { ThemeProvider } from "./components/providers/ThemeProvider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="min-h-screen w-screen flex flex-col">
				<Header />
				<main className="flex-1">
					<Outlet />
				</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
