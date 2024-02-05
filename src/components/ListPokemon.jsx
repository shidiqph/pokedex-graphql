'use client'
import CardPoke from './CardPoke';
import { useQuery } from '@apollo/client';
import { Q_POKEMONS } from '@/lib/query';

function ListPokemon() {
    const { loading, error, data } = useQuery(Q_POKEMONS, {
        variables: { limit: 24, offset: 0 },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-10">
            {data?.pokemon_v2_pokemon.map((pokemon, index) => (
                <div className="col-span-1" key={index}>
                    <CardPoke name={pokemon.name} image={pokemon.pokemon_v2_pokemonsprites[0].sprites} categories={pokemon.pokemon_v2_pokemontypes.map((type) => type.pokemon_v2_type.name)} />
                </div>
            ))}
        </div>
    );
}

export default ListPokemon