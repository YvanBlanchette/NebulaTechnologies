const Hero = () => {
	return (
		<div className="grid grid-cols-12 w-full h-full">
			<div className="col-span-12 md:col-span-6">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-[3.8rem] leading-none  font-semibold tracking-tighter">
						VOTRE AGENCE DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6f00ff] to-[#E000EF]">DESIGN ET DÉVELOPPEMENT WEB</span> DANS
						LES LAURENTIDES
					</h2>
					<button className="btn-long w-fit mt-6">VOIR NOS RÉALISATIONS</button>
				</div>
			</div>
			<div className="col-span-12 md:col-span-6 pointer-events-none">
				<video autoPlay loop muted>
					<source src="/assets/videos/hero.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
};
export default Hero;
