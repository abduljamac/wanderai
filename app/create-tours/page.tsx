import { getGmapsPlaceDetails } from "@/app/actions/google-maps-places"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export default function CreateTours() {
	return (
		<div className="max-w-screen mx-auto p-8">
			<h1 className="mb-4 text-3xl font-bold">Create Tour</h1>
			<form action={getGmapsPlaceDetails}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="startingLocation"
					>
						Starting Location
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="startingLocation"
						name="startingLocation"
						placeholder="Enter starting location"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="endLocation"
					>
						End Location
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="endLocation"
						name="endLocation"
						placeholder="Enter end location"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="tourDuration"
					>
						Tour Duration
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="tourDuration"
						name="tourDuration"
						placeholder="Enter tour duration"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="mustSeeSights"
					>
						Must See Sights (comma separated)
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="mustSeeSights"
						name="mustSeeSights"
						placeholder="Enter must-see sights"
					/>
				</div>
				<div className="flex items-center justify-center">
					<Button className="bg-[#85C1E9] hover:bg-[#5DADE2] text-white font-bold w-1/2 focus:outline-none focus:shadow-outline flex items-center rounded justify-center">
						<Zap className="mr-2 h-5 w-5" />
						<span className="hidden md:inline">Create Tour</span>
					</Button>
				</div>
			</form>
		</div>
	)
}
