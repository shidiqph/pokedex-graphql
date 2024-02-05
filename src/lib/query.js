'use client'
import { gql } from "@apollo/client";

export const Q_POKEMONS = gql`
  query GetPokemons($limit: int, $offset: int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
        name
        pokemon_v2_pokemonsprites {
          sprites
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
  }
`