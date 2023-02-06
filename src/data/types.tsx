export interface CharacterStructure {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
}

type CharactersStructure = CharacterStructure[];

export interface CharactersApiStructure {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharactersStructure;
}

export interface ApiEndpointsStructure {
  characters: string;
}
