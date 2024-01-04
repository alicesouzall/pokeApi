interface AbilityModel {
    name: string
    url: string
}

interface Abilities {
    ability: AbilityModel
    isHidden: boolean
    slot: number
}

interface Pokemon {
    abilities: Abilities[]
    image: string
    name: string
    height: number
    weight: number
}

export default Pokemon;
