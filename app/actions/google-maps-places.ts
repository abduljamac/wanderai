export const getGmapsPlaceDetails = async (formData: FormData) => {
	"use server"
	console.log("Form Data", formData)

	const startLocation = formData.get("startingLocation")
	const endLocation = formData.get("endLocation")
	const tourDuration = formData.get("tourDuration")

	const placesApi = `https://maps.googleapis.com/maps/api/place/textsearch/json?query="must see, tourist attractions"&location=${startLocation}|${endLocation}&radius=3218.69&key=${process.env.GMAPS_PLACES_API_KEY}` // Radius can be adjusted

	const response = await fetch(placesApi)
	const data = await response.json()

	console.log("Places Data", data["results"])
}
