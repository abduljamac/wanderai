import { Folder, Pyramid } from "lucide-react"
import Link from "next/link"

export default function NavBar() {
	return (
		<nav className="bg-[#85C1E9] py-4 ">
			<div className="container mx-auto px-4 flex items-center">
				<div className="flex items-center">
					<Link href="/" className="text-white text-2xl font-bold">
						WanderAi
					</Link>
				</div>

				<div className="flex item-center ml-10 space-x-2">
					<Link
						href="/create-tours"
						className="flex text-white items-center p-2 border rounded-md border-transparent transition-colors duration-100 hover:bg-[#5DADE2] "
					>
						<Pyramid className="mr-2 h-5 w-5" />
						Create Tour
					</Link>

					<Link
						href="/tour-archives"
						className="flex text-white items-center p-2 border rounded-md border-transparent transition-colors duration-300 hover:bg-[#5DADE2]"
					>
						<Folder className="mr-2 h-5 w-5" />
						Tour Archives
					</Link>
				</div>

				<div className="flex ml-auto">
					<Link
						href="/login"
						className="text-white bg-[#5DADE2] px-5 py-3 rounded-md mr-2 font-bold border border-white border-opacity-30"
					>
						Sign In
					</Link>
					<Link
						href="/signup"
						className="text-[#85C1E9] font-bold bg-white px-5 py-3 rounded-md"
					>
						Sign Up
					</Link>
				</div>
			</div>
		</nav>
	)
}
