"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { PokemonCard } from "./pokemon-card"

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    const [search, setSearch] = useState("");

    // Filters the pokemonList prop based on the search state
    const filteredPokemonList = (pokemonList : any) => {
        return pokemonList.filter(
            (pokemon : any) => pokemon.name.toLowerCase().indexOf(search.toLowerCase()) > -1 // Checks if the pokemon name includes the search state
        )
    }

    // Saves the filtered pokemonList
    const pokemonListFiltered = filteredPokemonList(pokemonList);

    return (
        <>
        <div>
            <h3 className="text-2xl py-6 text-center">Search For Any Pokémon!</h3>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="pokemonName">Pokémon Name</Label>
                <Input 
                    type="text" 
                    value={search}
                    autoComplete="off" 
                    id="pokemonName"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)} // Sets the search state to the value of the input
                />
            </div>
            <h3 className="text-3xl pt-12 pb-6 text-center">Pokémon</h3>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left"> 
            {pokemonListFiltered.map((pokemon : any) => {
                return (
                    <PokemonCard name={pokemon.name} key={pokemon.name + "Card"}/>
                )
            })}
        </div>
        </>
    )
}