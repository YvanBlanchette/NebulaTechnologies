import reactLogo from "/assets/images/react.svg";
import tailwindLogo from "/assets/images/tailwind.svg";
import viteLogo from "/assets/images/vite.svg";

const Homepage = () => {
	return (
		<div className="relative w-screen h-[calc(100vh-160px)] flex flex-col items-center justify-center">
			<div className="absolute left-1/2 -translate-x-1/2 w-full top-1/2 -translate-y-1/3">
				<div className="flex justify-evenly items-center lg:max-w-4xl lg:mx-auto ">
					<a
						href="https://vitejs.dev"
						target="_blank"
						className="flex flex-col justify-center items-center text-center hover:opacity-70 transition-all duration-300"
					>
						<img src={viteLogo} className="size-16 lg:size-24" alt="Vite logo" />
						<h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wide pt-4">Vite JS</h1>
					</a>
					<a
						href="https://react.dev"
						target="_blank"
						className="-translate-y-16 lg:-translate-y-20 flex flex-col justify-center items-center text-center  hover:opacity-70 transition-all duration-200"
					>
						<img src={reactLogo} className="size-20 lg:size-28 animate-spin-slow hover:opacity-80" alt="React logo" />
						<h1 className="text-3xl md:text-4xl lg:text-6xl  tracking-wide pt-4">React JS</h1>
					</a>
					<a
						href="https://tailwindcss.com/docs/guides/vite"
						target="_blank"
						className="flex flex-col justify-center items-center text-center hover:opacity-70 transition-all duration-300"
					>
						<img src={tailwindLogo} className="size-16 lg:size-28" alt="Tailwind CSS logo" />
						<h1 className="text-3xl md:text-4xl lg:text-5xl  tracking-wide">Tailwind</h1>
					</a>
				</div>

				<div className="text-gray-900 dark:text-white tracking-widest text-center mt-10">
					<h2 className="text-4xl lg:text-5xl mb-2 ">VTR Starter</h2>
					<p className="max-w-[90%] mx-auto uppercase text-sm font-medium text-gray-900 dark:text-gray-50">
						Incluant des libraries intégrées telles que{" "}
						<a href="https://ui.shadcn.com/" className="text-secondary hover:opacity-70 transition-all duration-200">
							Shadcn-UI
						</a>
						,{" "}
						<a href="https://reactrouter.com/en/main" className="text-secondary hover:opacity-70 transition-all duration-200">
							React-Router-Dom
						</a>
						,{" "}
						<a
							href="https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=PerformanceMax-Framer_&gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aCGAeXMkT1XRPevrjA8E4nWEzlmXYgBxy5MNmBLXBLlP7RHIWX-UsRoCio0QAvD_BwE"
							className="text-secondary hover:opacity-70 transition-all duration-200"
						>
							Framer-Motion,{" "}
						</a>
						<br />
						<a href="https://lucide.dev/icons/" className="text-secondary hover:opacity-70 transition-all duration-200">
							React Icons{" "}
						</a>
						et plus encore!
					</p>
				</div>
			</div>
		</div>
	);
};
export default Homepage;
