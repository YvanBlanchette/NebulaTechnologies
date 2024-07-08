import Hero from "@/components/Hero";

const Homepage = () => {
	return (
		<div className="w-screen h-[calc(100vh-160px)] flex flex-col items-center justify-center px-[5vw]">
			<div>
				<Hero />
			</div>
		</div>
	);
};
export default Homepage;
