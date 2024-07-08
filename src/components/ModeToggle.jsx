import { Moon, Sun } from "lucide-react";

import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { useTheme } from "./providers/ThemeProvider";

export function ModeToggle({ className, iconsClassName }) {
	const { setTheme, theme } = useTheme();

	return (
		<>
			{theme === "dark" ? (
				<Button onClick={() => setTheme("light")} variant="plain" size="icon" className={`group ${className ? className : ""}`}>
					<Sun className={`size-[250px] group-hover:text-[#9B5FFE] transition-all duration-300 ${iconsClassName ? iconsClassName : ""}`} />
					<span className="sr-only">Toggle theme</span>
				</Button>
			) : (
				<Button onClick={() => setTheme("dark")} variant="plain" size="icon" className={`group ${className ? className : ""}`}>
					<Moon className={`size-[150px] text-black group-hover:text-[#9B5FFE] transition-all duration-300 ${iconsClassName ? iconsClassName : ""}`} />
					<span className="sr-only">Toggle theme</span>
				</Button>
			)}
		</>
	);
}
