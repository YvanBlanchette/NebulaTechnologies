import { Moon, Sun } from "lucide-react";

import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { useTheme } from "./providers/ThemeProvider";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<>
			{theme === "dark" ? (
				<Button onClick={() => setTheme("light")} variant="ghost" size="icon" className="group">
					<Sun className="h-[1.75rem] w-[1.75rem] group-hover:text-[#9B5FFE] transition-all duration-300" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			) : (
				<Button onClick={() => setTheme("dark")} variant="ghost" size="icon" className="group">
					<Moon className="h-[1.75rem] w-[1.75rem] text-black group-hover:text-[#9B5FFE] transition-all duration-300" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			)}
		</>
	);
}
