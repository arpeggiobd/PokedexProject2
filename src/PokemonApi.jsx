export const PokemonApi = async (pokemon) => {
    try {
        let url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log("error: ", error)
    }
}