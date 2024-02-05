'use client'

import ListPokemon from "@/components/ListPokemon";

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-10">
      <div className="text-center mb-8 col-span-1 md:col-span-2 lg:col-span-4">
        <h1 className="text-4xl font-bold">Welcome to Pokedex</h1>
        <p className="text-lg">The best place to find your favorite Pokemon</p>
      </div>
      <ListPokemon />
    </div>
  );
}