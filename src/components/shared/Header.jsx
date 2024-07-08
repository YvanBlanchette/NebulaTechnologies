import { Link, useLocation, useNavigate } from "react-router-dom";
import { links, socials } from "@/data/constants";
import { useState } from "react";

const Header = () => {
	const pathname = useLocation().pathname;
	const [isOpen, setIsOpen] = useState(false);

	// Function to handle closing the menu
	const handleCloseMenu = () => {
		setIsOpen(false);
	};

	return (
		<header className="w-full h-[185px] bg-white dark:bg-[#000000]">
			<div className="px-[5vw] py-[3vw] mx-auto flex justify-between gap-10 items-center">
				<Link to="/" className={`relative transition-opacity duration-500 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-1 pointer-events-auto"}`}>
					<img src="/assets/images/nebula_logo.svg" alt="Logo de Nebula Technologies" className="h-[90px]" />
					<img src="/assets/images/nebula_logo.svg" alt="Logo de Nebula Technologies" className="absolute top-0 h-[90px] hover:animate-slow-ping" />
					<h1 className="sr-only">Nebula Technologies</h1>
				</Link>
				<div className="flex justify-end items-center gap-10">
					<Link
						to="/nous-joindre"
						className={`hidden lg:block h-[65px] text-slate-200 border-2 border-[#6f00ff] hover:bg-[#E000EF] hover:border-[#E000EF] px-8 py-4 text-lg rounded-full transition-all font-semibold tracking-widest duration-500 ${
							isOpen ? "opacity-0" : "opacity-1"
						}`}
					>
						DÉMARRER VOTRE PROJET
					</Link>
					<div className="relative group">
						<div className="absolute top-0 bg-[#E000EF] z-0 w-[69px] h-[65px] rounded-full group-hover:animate-slow-ping"></div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={`relative z-[10] h-[65px] w-[69px] px-3 py-7 rounded-full transition-all duration-200 ${
								isOpen ? "opened hover:bg-[#6f00ff] bg-[#E000EF]" : "bg-[#6f00ff] hover:bg-[#E000EF]"
							}`}
						>
							<span className="openMenu__lines mx-auto"></span>
						</button>
					</div>
				</div>
			</div>

			{/* Navigation Menu */}
			<div
				className={`bottom-0 left-0 right-0 h-screen bg-black absolute transition-opacity duration-500 grid grid-cols-12 px-[5vw] ${
					isOpen ? "opacity-1" : "opacity-0 pointer-events-none"
				}`}
			>
				<nav className="col-span-12 md:col-span-6 lg:col-span-3">
					<ul className="h-full flex flex-col justify-evenly text-center lg:text-start">
						{links.map((link, index) => (
							<li key={link.name} className="group">
								<Link onClick={handleCloseMenu} to={link.path} className="relative text-4xl uppercase text-slate-200 flex flex-col gap-1">
									<span className="text-xl ml-1 font-semibold tracking-wide">[&nbsp;0{index + 1}&nbsp;]</span>
									<span className="z-10 hover-text-gradient">{link.name}</span>
									<span className="absolute top-8 z-0 text-gradient group-hover:animate-slow-ping">{link.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div aria-hidden="true" className="hidden lg:col-span-6 lg:flex justify-center items-center w-full h-full">
					<img src="/assets/images/nebula_logo.svg" alt="Nebula logo" />
				</div>
				<nav className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center mt-10 lg:justify-end h-full">
					<ul className="h-full flex lg:flex-col justify-center gap-16">
						{socials.map((social) => {
							const IconComponent = social.icon;
							return (
								<li key={social.name} className="relative">
									<a href={social.href} target="_blank" className="group transition-all duration-200 text-4xl">
										<IconComponent className="absolute top-0 z-0 text-[#E000EF] group-hover:animate-slow-ping" />
										<IconComponent className="relative z-50 text-[#6f00ff] hover:text-[#E000EF]" />
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
